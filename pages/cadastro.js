import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';

import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {

    const navigation = useNavigation();

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('my-key', value);
        } catch (e) {
          // saving error
        }
      };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <Text style={styles.message}>Crie sua Conta</Text>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                        <Text style={styles.title}>
                            E-mail
                        </Text>
                        <TextInput
                            placeholder='Insira seu E-Mail...'
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Crie sua senha'
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Confirme sua senha'
                            style={styles.input}
                        />
                        <TouchableOpacity style={styles.button}
                            onPress={() => navigation.navigate('entrada')}>
                            <Text style={styles.buttonText}>
                                Criar Conta
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonRegister}
                            onPress={() => navigation.navigate('entrada')}>
                            <Text style={styles.registerText}>
                                Já possui uma conta? Entre Aqui
                            </Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#880000'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#FFF"
    },
    containerForm: {
        backgroundColor: "#FFF",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#880000',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1'
    }
})