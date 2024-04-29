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
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

import { Ionicons } from '@expo/vector-icons';

export default function Cadastro() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const storeData = async () => {
    try {
      // Verifica se as senhas coincidem
      if (senha !== confirmarSenha) {
        console.error('As senhas não coincidem');
        return;
      }

      // Salva os dados no AsyncStorage
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('senha', senha);

      console.log('Dados salvos com sucesso');
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>

          <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.navigate('index')}>
            <Text style={styles.btnVoltar}>Voltar</Text>
          </TouchableOpacity>

          <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Crie sua Conta</Text>
          </Animatable.View>
          <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>E-mail</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder='Insira seu E-Mail...'
              style={styles.input}
            />
            <TextInput
              value={senha}
              placeholder='Crie sua senha'
              style={styles.input}
              secureTextEntry={true}
              onChangeText={setSenha}
            />
            <TextInput
              value={confirmarSenha}
              placeholder='Confirme sua senha'
              style={styles.input}
              secureTextEntry={true}
              onChangeText={setConfirmarSenha}
            />
            <TouchableOpacity style={styles.button} onPress={() => { storeData(); navigation.navigate('entrada'); }}>
              <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('entrada')}>
              <Text style={styles.registerText}>Já possui uma conta? Entre Aqui</Text>
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
  },
  btnVoltar: {
    color: '#fff',
    marginLeft: 10,
    marginTop: 10,
  }
})