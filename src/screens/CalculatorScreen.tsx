import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import KeyboardRow from '../components/KeyboardRow';
import { styles } from '../theme/appTheme';
import SpecialKeyboardRow from '../components/SpecialKeyboardRow';

export default function CalculatorScreen() {

  const [numero, setNumero] = useState('0');

  const limpiar = () => {
    setNumero('0');
  }

  const actualizaNumero = (numberInput:string) => {
    numberInput = (numero === '0' ? '' : numero) + numberInput;
     setNumero(numberInput);
  }
  
  useEffect(() => {
    
  }, [numero])

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.textoOperaciones}>500.00</Text>
      <Text style={styles.texto}>{numero}</Text>
      <View style= {styles.keyboardMainContainer}>
        <KeyboardRow buttons={
          [{ label: 'AC', type: 2, accion: limpiar},
           { label: '+/-', type: 2, accion: limpiar},
           { label: '%', type: 2, accion: limpiar},
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
           { label: '+', type: 1, accion: limpiar},
          ]}
        />
        <SpecialKeyboardRow buttons={
          [{ label: '0', type: 0, accion: ()=>actualizaNumero('0')},
           { label: '.', type: 0, accion: ()=>actualizaNumero('.')},
           { label: '=', type: 1, accion: limpiar},
          ]}
        />
      </View>
    </View>
  );
}
