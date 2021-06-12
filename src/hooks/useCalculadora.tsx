import { useState } from "react";

export const useCalculadora = () => {
    
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('');
    const [tipoOperacion, setTipoOperacion] = useState('');

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('');
        setTipoOperacion('');
    }

    const actualizaNumero = (numberInput:string) => {

        //Si el esta empezando la cantidad y arranca con un punto se respeta el cero, si no? se reemplaza
        if (numero.startsWith('0') && numberInput === '0' && !numero.includes('.')){
        return;
        }
        else if (numero.includes('.') && numberInput === '.'){
        return;
        }
        else if (numero.startsWith('0') && numero.includes('.')){
        numberInput = numero + numberInput;
        }
        else if(numero.startsWith('0') && numberInput != '.'){
        numberInput = '' + numberInput;
        }
        else {
        numberInput = numero + numberInput;
        }
        setNumero(numberInput);
    }

    const cambiarSigno = () => {
        var numNuevo:string = '';

        if (numero.startsWith('-')) {
        numNuevo = numero.replace('-','');
        } else {
        numNuevo = '-' + numero;
        }

        setNumero(numNuevo);
    }

    const btnDelete = () => {
        var numNuevo:string = '';
        if ((numero.length == 2 && numero.startsWith('-')) || (numero.length == 1)) {
        numNuevo = '0';
        } else {
        numNuevo = numero.substring(0,numero.length - 1);
        }
        setNumero(numNuevo);
    }

    const operar = (operacion:string) => {
        var numNuevo:string = '0';
        
        if (tipoOperacion == '') {
        setTipoOperacion(operacion);
        setNumero('0');
        setNumeroAnterior(numero);
        } else {
        switch (tipoOperacion) {
            case '+':
            numNuevo = `${Number (numeroAnterior) + Number(numero)}`;
            // setNumeroAnterior(numNuevo);
            break;
            case '-':
            numNuevo = `${Number (numeroAnterior) - Number(numero)}`;
            // setNumeroAnterior(numNuevo);
            break;
            case 'X':
            numNuevo = `${Number (numeroAnterior) * Number(numero)}`;
            // setNumeroAnterior(numNuevo);
            break;
            case '/':
            numNuevo = `${Number (numeroAnterior) / Number(numero)}`;
            // setNumeroAnterior(numNuevo);
            break;
            default:
            break;
        }

        if (operacion == '=') {
            setTipoOperacion('');
            setNumeroAnterior('');
            setNumero(numNuevo);
        } else {
            setNumeroAnterior(numNuevo);
            setNumero('0');
            setTipoOperacion(operacion);
        }
        }
    }

    return {
        numero,
        numeroAnterior,
        limpiar,
        cambiarSigno,
        btnDelete,
        actualizaNumero,
        operar
    }
}
