import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { buttonParameters } from '../Interfaces/buttonCalc';

export default function ButtonKeyboard(props: buttonParameters) {
    const { label, type, accion } = props;
    
    const tipos = [
        {
            color: 'white',
            backgroundColor: '#333333',
        },
        {
            color: 'white',
            backgroundColor: '#ff9e0a',
        },
        {
            color: 'black',
            backgroundColor: '#a5a5a5',
        },
    ];
    const {color, backgroundColor} = tipos[type];

    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>accion()}>
            <View style={[styles.button, {backgroundColor}] }>
                <Text style={[styles.textButton,{color}]}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 10,
    },

    button: {
        borderRadius: 100,
        // backgroundColor: "#a5a5a5",
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 40,
        fontWeight:'bold',
        // color: 'black',
    },
});