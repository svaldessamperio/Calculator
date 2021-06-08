import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ButtonKeyboard from './ButtonKeyboard';
import DoubleButtonKeyboard from './DoubleButtonKeyboard';
import { rowParameters } from '../Interfaces/buttonCalc';

export default function SpecialKeyboardRow(props: rowParameters) {
    const {buttons} = props;

    return (
        <View style= {styles.keyboardContainer}>
            <View style={styles.keyboardRowContainer}>
                <DoubleButtonKeyboard label={buttons[0].label} type={buttons[0].type} accion={buttons[0].accion}/>
                <ButtonKeyboard label={buttons[1].label} type={buttons[1].type} accion={buttons[1].accion}/>
                <ButtonKeyboard label={buttons[2].label} type={buttons[2].type} accion={buttons[2].accion}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    keyboardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    keyboardRowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});