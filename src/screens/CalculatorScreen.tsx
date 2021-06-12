import React, { useState } from 'react';
import {View, Text} from 'react-native';
import KeyboardRow from '../components/KeyboardRow';
import { styles } from '../theme/appTheme';
import SpecialKeyboardRow from '../components/SpecialKeyboardRow';

export default function CalculatorScreen() {

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
    var numNuevo:string = '';

    if (operacion != '') {
      switch (operacion) {
        case '+':
          if (tipoOperacion != '')
          {
            numNuevo = numeroAnterior + tipoOperacion + numero;
            console.log("numNuevo: " + numNuevo);
            setNumeroAnterior(numNuevo);
          } else {
            setNumeroAnterior(numero);
            
          }
          break;
        case '-':
          break;
        case 'X':
          break;
        case '/':
          break;
        case '=':
          console.log("Entrando al Igual");
          setNumero(numeroAnterior);
          break;
        default:
          break;
      }
      setNumero('0');
      setTipoOperacion(operacion);
      //numeroAnterior
      //Convertir Numero anterior a decimal
      //Convertir Numero actual a decimal
      //Operar los números
      //Almacenar en número anterior el resultado

    } else {
      setTipoOperacion(operacion);
      setNumeroAnterior(numero);
    }
    setNumero('0');
  }

  return (
    <View style={styles.calculadoraContainer}>
      <Text 
        style={styles.textoOperaciones} 
        numberOfLines={1}
        adjustsFontSizeToFit={true}
      >
        {numeroAnterior}
      </Text>
      <Text 
        style={styles.texto}
        numberOfLines={1}
        adjustsFontSizeToFit={true}
      >
        {numero}
      </Text>
      <View style= {styles.keyboardMainContainer}>
        <KeyboardRow buttons={
          [{ label: 'AC', type: 2, accion: limpiar},
           { label: '+/-', type: 2, accion: cambiarSigno},
           { label: 'del', type: 2, accion: btnDelete},
           { label: '/', type: 1, accion: limpiar},
          ]}
        />
        <KeyboardRow buttons={
          [{ label: '7', type: 0, accion: ()=>actualizaNumero('7')},
           { label: '8', type: 0, accion: ()=>actualizaNumero('8')},
           { label: '9', type: 0, accion: ()=>actualizaNumero('9')},
           { label: 'X', type: 1, accion: limpiar},
          ]}
        />
        <KeyboardRow buttons={
          [{ label: '4', type: 0, accion: ()=>actualizaNumero('4')},
           { label: '5', type: 0, accion: ()=>actualizaNumero('5')},
           { label: '6', type: 0, accion: ()=>actualizaNumero('6')},
           { label: '-', type: 1, accion: limpiar},
          ]}
        />
        <KeyboardRow buttons={
          [{ label: '1', type: 0, accion: ()=>actualizaNumero('1')},
           { label: '2', type: 0, accion: ()=>actualizaNumero('2')},
           { label: '3', type: 0, accion: ()=>actualizaNumero('3')},
           { label: '+', type: 1, accion: ()=>operar('+')},
          ]}
        />
        <SpecialKeyboardRow buttons={
          [{ label: '0', type: 0, accion: ()=>actualizaNumero('0')},
           { label: '.', type: 0, accion: ()=>actualizaNumero('.')},
           { label: '=', type: 1, accion: ()=>operar('=')},
          ]}
        />
      </View>
    </View>
  );
}
