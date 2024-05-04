import React, { useState } from 'react';
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

import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

export default function Acesso() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const verificarAcesso = async () => {
    try {
      // Busca os dados salvos no AsyncStorage
      const emailSalvo = await AsyncStorage.getItem('email');
      const senhaSalva = await AsyncStorage.getItem('senha');

      // Verifica se os dados salvos correspondem aos inseridos nos campos
      if (email === emailSalvo && senha === senhaSalva) {
        // Navega para a próxima tela se os dados coincidirem
        navigation.navigate('inicioRecursosDidaticos');
      } else {
        console.error('E-mail ou senha incorretos');
      }
    } catch (error) {
      console.error('Erro ao verificar o acesso:', error);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>

          <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.navigate('index')}>
            <Ionicons name="chevron-back-outline" color="white" size={20}></Ionicons>
            <Text style={styles.btnVoltarTxt}>Voltar</Text>
          </TouchableOpacity>

          <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Bem-vindo(a)</Text>
          </Animatable.View>
          <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>E-mail</Text>
            <TextInput
              placeholder='Digite um E-Mail...'
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder='Sua senha'
              style={styles.input}
              secureTextEntry={true}
              value={senha}
              onChangeText={setSenha}
            />
            <TouchableOpacity style={styles.button} onPress={verificarAcesso}>
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('cadastro')}>
              <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
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
  },
  btnVoltar: {
    display: "flex",
    color: '#fff',
    marginLeft: 10,
    marginTop: 10,
    width: 60,
    flexDirection: "row",
    alignItems: "center",
    verticalAlign: "middle"
  },
  btnVoltarTxt: {
    color: "#fff",
    marginLeft: 10,
  }
})