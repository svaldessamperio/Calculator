import React, { useState } from 'react';
import {View, Text} from 'react-native';
import KeyboardRow from '../components/KeyboardRow';
import { styles } from '../theme/appTheme';
import SpecialKeyboardRow from '../components/SpecialKeyboardRow';
import { useCalculadora } from '../hooks/useCalculadora';

export default function CalculatorScreen() {

  const {numero, 
    numeroAnterior, limpiar, cambiarSigno, btnDelete, actualizaNumero, operar} = useCalculadora();
  
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
           { label: '/', type: 1, accion: ()=>operar('/')},
          ]}
        />
        <KeyboardRow buttons={
          [{ label: '7', type: 0, accion: ()=>actualizaNumero('7')},
           { label: '8', type: 0, accion: ()=>actualizaNumero('8')},
           { label: '9', type: 0, accion: ()=>actualizaNumero('9')},
           { label: 'X', type: 1, accion: ()=>operar('*')},
          ]}
        />
        <KeyboardRow buttons={
          [{ label: '4', type: 0, accion: ()=>actualizaNumero('4')},
           { label: '5', type: 0, accion: ()=>actualizaNumero('5')},
           { label: '6', type: 0, accion: ()=>actualizaNumero('6')},
           { label: '-', type: 1, accion: ()=>operar('-')},
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
