import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const FormButton = ({buttonTitle}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} >
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
};

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: 70,
        backgroundColor: '#045C61',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});