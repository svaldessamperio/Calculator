import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ButtonKeyboard from './ButtonKeyboard';
import DoubleButtonKeyboard from './DoubleButtonKeyboard';

export default function SpecialKeyboardRow(props: any) {
    const {buttons} = props;

    return (
        <View style= {styles.keyboardContainer}>
            <View style={styles.keyboardRowContainer}>
                <DoubleButtonKeyboard label={buttons[0].label} type={buttons[0].type}/>
                <ButtonKeyboard label={buttons[1].label} type={buttons[1].type}/>
                <ButtonKeyboard label={buttons[2].label} type={buttons[2].type}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    keyboardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        padding: 10,
    },
    keyboardRowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});