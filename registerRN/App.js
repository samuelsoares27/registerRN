import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      listaSexo: ['Masculino', 'Feminino', 'Outros'],
      limite: 0,
      estudante: true
    }
  }

  Cadastrar() {

    if (this.state.nome == '') {
      alert('Digite seu nome');
      return;
    }
    if (this.state.idade == '') {
      alert('Digite sua idade');
      return;
    }
    if (this.state.sexo == 0) {
      alert('Selecione seu sexo');
      return;
    }
    if (this.state.limite == '') {
      alert('Selecione seu limite');
      return;
    }

    var cadastro =
      `
        nome: ${this.state.nome} \n
        idade: ${this.state.idade} \n
        sexo: ${this.state.listaSexo[sexo]} \n
        nome: ${this.state.limite} \n
        estudante: ${this.state.estudante} \n
      `
    alert(cadastro);
  }

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.titulo}>
          Cadastrar Conta
        </Text>

        <View style={styles.viewCampos}>
          <TextInput
            style={styles.input}
            onChangeText={(e) => this.setState({ nome: e })}
            placeholder="Digite seu nome"
            underlineColorAndroid="transparent" />

          <TextInput
            style={styles.input}
            onChangeText={(e) => this.setState({ idade: e })}
            placeholder="Digite sua idade"
            keyboardType="numeric"
            underlineColorAndroid="transparent" />

          <Picker
            style={styles.picker}
            selectedValue={this.state.sexo}
            onValueChange={(itemValue, itemIndex) => this.setState({ pizza: itemValue })}
          >
            {
              this.state.listaSexo.map((value, key) => {
                return <Picker.Item key={key} value={key} label={value} />
              })
            }
          </Picker>

          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={10000}
            onValueChange={(value) => this.setState({ limite: value })}
            value={this.state.limite}
            minimumTrackTintColor="#ff0000"
            maximumTrackTintColor="#000000"
          />

          <Text style={styles.textoSlider}>
            Limite {this.state.limite.toFixed(2)}
          </Text>

          <View style={styles.button}>
            <Button
              title="Entrar"
              onPress={this.Cadastrar} />
          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    padding: 10,
    borderRadius: 5
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    fontSize: 25,
    marginTop: 10,
  },
  viewCampos: {
    marginTop: 50,
    height: 500,
  },
  picker: {
    marginTop: 5
  },
  slider: {
    marginTop: 10
  },
  textoSlider: {
    textAlign: 'center',
    fontSize: 15,
  },
  button: {
    marginTop: 150,
    alignContent: 'flex-end',
    padding: 5
  }

})