import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const SocialButton = ({buttonTitle,btnType,color,backgroundColor}) => {
    return (
        <TouchableOpacity
            style={[styles.buttonContainer, {backgroundColor: backgroundColor}]}>
            <View style={styles.iconWrapper}>
                <Ionicons name={btnType} style={styles.icon} size={22} color={color} />
            </View>
            <View style={styles.btnTxtWrapper}>
                <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SocialButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: 55,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3,
    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontWeight: 'bold',
    },
    btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});