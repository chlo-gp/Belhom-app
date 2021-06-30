import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import * as firebase from "firebase";

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [displayName, setDisplayName] = useState();
    //const [confirmPassword, setConfirmPassword] = useState();

   const SignUp = (email, password) => {
       try {
           if (password.length <8 ){
               alert("Votre mot de passe doit être d'au moins 8 caractères");
               return;
           }
           firebase.auth().createUserWithEmailAndPassword(email, password)
           .then((res) => {
            res.user.updateProfile({
              displayName: displayName
            })
            navigation.navigate('Home');
        })      
       } catch (error) {
           console.log(error);

       }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Créer un compte</Text>

            <FormInput
                labelValue={displayName}
                onChangeText={(userDisplayName) => setDisplayName(userDisplayName)}
                placeholderText="Ton prénom"
                iconType="person-outline"
                autoCorrect={false}
            />
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
                buttonTitle="Créer un compte"
                onPress={() => SignUp(email,password)}
            />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By registering, you confirm that you accept our{' '}
                </Text>
                <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                        Terms of service
                    </Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                    Privacy Policy
                </Text>
            </View>

            {Platform.OS === 'android' ? (
                <View>
                    <SocialButton
                        buttonTitle="S'enregistrer avec Facebook"
                        btnType="logo-facebook"
                        color="#4867aa"
                        backgroundColor="#e6eaf4"
                        onPress={() => {}}
                    />

                    <SocialButton
                        buttonTitle="S'enregistrer avec Google"
                        btnType="logo-google"
                        color="#de4d41"
                        backgroundColor="#f5e7ea"
                        onPress={() => {}}
                    />
                </View>
            ) : null}

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Vous avez déjà un compte ? Se connecter</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#faf4e2',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#045C61',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey',
    },
});