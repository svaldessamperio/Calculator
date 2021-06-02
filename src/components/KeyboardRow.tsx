import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ButtonKeyboard from './ButtonKeyboard';

interface buttonCalc {
    label: string;
    type: number;
    accion: () => void;
}

interface rowParameters {
    buttons: buttonCalc[];
}

export default function KeyboardRow(props: rowParameters) {
    const {buttons} = props;

    return (
        <View style= {styles.keyboardContainer}>
            <View style={styles.keyboardRowContainer}>
                <ButtonKeyboard label={buttons[0].label} type={buttons[0].type} accion={buttons[0].accion}/>
                <ButtonKeyboard label={buttons[1].label} type={buttons[1].type} accion={buttons[1].accion}/>
                <ButtonKeyboard label={buttons[2].label} type={buttons[2].type} accion={buttons[2].accion}/>
                <ButtonKeyboard label={buttons[3].label} type={buttons[3].type} accion={buttons[3].accion}/>
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