import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, Platform, StyleSheet, ScrollView} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import * as firebase from "firebase";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const Login = (email, password) => {
        try {
            if (password.length <8 ){
                alert("Votre mot de passe doit être d'au moins 8 caractères");
                return;
            }
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user =>{
                    navigation.navigate('Home')
                });
        } catch (error) {
            console.log(error);
            alert(error);

        }
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/belhom.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Belhom App</Text>

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="person-outline"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Mot de passe"
                iconType="lock-closed-outline"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Connexion"
                onPress={() => Login(email, password)}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
                <Text style={styles.navButtonText}>Mot de passe oublié ?</Text>
            </TouchableOpacity>

            {Platform.OS === 'android' ? (
                <View>
                    <SocialButton
                        buttonTitle="Connexion avec Facebook"
                        btnType="logo-facebook"
                        color="#4867aa"
                        backgroundColor="#e6eaf4"
                        onPress={() => fbLogin()}
                    />

                    <SocialButton
                        buttonTitle="Connexion avec Google"
                        btnType="logo-google"
                        color="#de4d41"
                        backgroundColor="#f5e7ea"
                        onPress={() => googleLogin()}
                    />
                </View>
            ) : null}

            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.navButtonText}>
                    Pas encore inscrit ? Créer mon compte
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        backgroundColor: '#faf4e2'
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#045C61',
    },
});