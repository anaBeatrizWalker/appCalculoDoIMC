import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native';
import Constants from 'expo-constants';

export default function App(){

  const [peso, setPeso] = useState(0.0);
  const [altura, setAltura] = useState(0.0);
  const [resultado, setResultado] = useState(0.0);
  const [classificacao, setClassificacao] = useState("");

  function calcular(){
    let res = peso / (altura * altura);

    if (res < 18.5)
      texto = 'Você está abaixo do peso.';
    else if (res < 24.9)
      texto = 'Você está com o peso normal.';
    else if (res < 29.9)
      texto = 'Você está com sobrepeso.';
    else if (res < 34.9)
      texto = 'Você está com obesidade grau 1.';
    else if (res < 39.9)
      texto = 'Você está com obesidade grau 2.';
    else
      texto = 'Você está com obesidade grau 3 ou mórbida.';

    setResultado(res);
    setClassificacao(texto);
  }

  return (
    <View>
      <Text style={styles.paragraph}>
        Cálculo do IMC
      </Text>

      <Image style={styles.image} source={require('./img/IMC-icon.png')}></Image>

      <TextInput style={styles.inputs}  placeholder="Digite sua altura. Ex: 1.65 " onChangeText={(e) => setAltura(e)}></TextInput>

      <TextInput style={styles.inputs}  placeholder="Digite seu peso. Ex: 65 " onChangeText={(e) => setPeso(e)}></TextInput>

      <View style={styles.buttons}>
        <Button color={'#3CB371'} title='Verificar' onPress={calcular}></Button>
      </View>

      <Text> Altura: {altura}; Peso: {peso}; IMC: {resultado} </Text>

      <Text style={styles.classificacao} className="classificacao"> Classificação: {classificacao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputs: {
    margin: 5,
    padding: 10,
    width: 300,
    backgroundColor: '#F5F5F5',
    borderRadius: 5
  },
  buttons: {
    margin: 5,
    width: 300,
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: '28%',
    marginBottom: 20
  },
  classificacao: {
    marginTop: 15,
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold'
  }
});