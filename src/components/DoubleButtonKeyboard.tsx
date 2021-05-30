import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function DoubleButtonKeyboard(props:any) {
    const { label, type } = props;
    
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
        <View style={styles.buttonContainer}>
            <View style={[styles.button, {backgroundColor}] }>
                <Text style={[styles.textButton,{color}]}>{label}</Text>
            </View>
            <View style={[styles.button, {backgroundColor}] }>
                {/* <Text style={[styles.textButton,{color}]}>{label}</Text> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#333333',
        borderRadius: 100,
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