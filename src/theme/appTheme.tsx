import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    fondo: {
        flex:1,
        backgroundColor: 'black', 

    },
    calculadoraContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    textoOperaciones: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
    },
    texto: {
        color: 'white',
        fontSize: 50,
    },
    keyboardMainContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 10,
    },
});