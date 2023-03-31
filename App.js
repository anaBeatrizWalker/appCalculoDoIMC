import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      peso: 0.0,
      altura: 0.0,
      resultado: 0.0,
      classificacao: ''
    }
    this.calcular = this.calcular.bind(this);
  }

  calcular(){
    result = this.state.peso / (this.state.altura * this.state.altura);

    if (result < 18.5)
      texto = 'Você está abaixo do peso.'
    else if (result < 24.9)
      texto = 'Você está com o peso normal.'
    else if (result < 29.9)
      texto = 'Você está com sobrepeso.'
    else if (result < 34.9)
      texto = 'Você está com obesidade grau 1.'
    else if (result < 39.9)
      texto = 'Você está com obesidade grau 2.'
    else
      texto = 'Você está com obesidade grau 3 ou mórbida.'

    this.setState({
      resultado: result,
      classificacao: texto
    });
  }

  render(){
    return (
      <View>
        <Text style={styles.paragraph}>
          Cálculo do IMC
        </Text>

        <Image style={styles.image} source={require('./IMC-icon.png')}></Image>

        <TextInput style={styles.inputs}  placeholder="Digite sua altura. Ex: 1.65 " onChangeText={(e) => this.setState({altura:e})}></TextInput>

        <TextInput style={styles.inputs}  placeholder="Digite seu peso. Ex: 65 " onChangeText={(e) => this.setState({peso:e})}></TextInput>

        <View style={styles.buttons}>
          <Button color={'#3CB371'} title='Verificar' onPress={this.calcular}></Button>
        </View>

        <Text> Altura: {this.state.altura}; Peso: {this.state.peso}; IMC: {this.state.resultado} </Text>

        <Text style={styles.classificacao} className="classificacao"> Classificação: {this.state.classificacao}</Text>
      </View>
    );
  }
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