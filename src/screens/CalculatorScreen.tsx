import React from 'react';
import {View, Text} from 'react-native';
import KeyboardRow from '../components/KeyboardRow';
import { styles } from '../theme/appTheme';
import SpecialKeyboardRow from '../components/SpecialKeyboardRow';

export default function CalculatorScreen() {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.textoOperaciones}>500.00</Text>
      <Text style={styles.texto}>1500.00</Text>
      <View style= {styles.keyboardMainContainer}>
        <KeyboardRow buttons={
          [{ label: 'AC', type: 2 },
           { label: '+/-', type: 2 },
           { label: '%', type: 2 },
           { label: '/', type: 1 },   
          ]}
        />
        <KeyboardRow buttons={
          [{ label: '7', type: 0 },
           { label: '8', type: 0 },
           { label: '9', type: 0 },
           { label: 'X', type: 1 },   
          ]}
        />
        <KeyboardRow buttons={
          [{ label: '4', type: 0 },
           { label: '5', type: 0 },
           { label: '6', type: 0 },
           { label: '-', type: 1 },   
          ]}
        />
        <KeyboardRow buttons={
          [{ label: '1', type: 0 },
           { label: '2', type: 0 },
           { label: '3', type: 0 },
           { label: '+', type: 1 },   
          ]}
        />
        <SpecialKeyboardRow buttons={
          [{ label: '0', type: 0 },
           { label: '.', type: 0 },
           { label: '=', type: 1 },   
          ]}
        />
      </View>
    </View>
  );
}
