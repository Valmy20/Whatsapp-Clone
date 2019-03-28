import React from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { updateValuesLoginSigup } from '../actions/AutenticacaoActions';

const bg = require('../imgs/bg.png');

const formCadastro = props => {
  console.log(props);
  return (
    <ImageBackground source={bg} style={{ width: '100%', height: '100%' }}>
      <View style={styles.formCadastro}>
        <View style={styles.viewInputs}>
          <TextInput
            value={props.name} style={styles.inputs} placeholder="Nome"
            placeholderTextColor='white'
            onChangeText={text => props.updateValuesLoginSigup(text, 'name')}
          />
          <TextInput
            value={props.email} style={styles.inputs} placeholder="E-mail"
            placeholderTextColor='white'
            onChangeText={text => props.updateValuesLoginSigup(text, 'email')}
          />
          <TextInput
            value={props.password} style={styles.inputs} placeholder="Senha"
            secureTextEntry
            placeholderTextColor='white'
            onChangeText={text => props.updateValuesLoginSigup(text, 'password')}
          />
        </View>
        <View style={styles.viewButton}>
          <Button color="#115E54" title="Cadastrar" onPress={() => false} />
        </View>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return (
    {
      name: state.AutenticacaoReducer.name,
      email: state.AutenticacaoReducer.email,
      password: state.AutenticacaoReducer.password
    }
  );
};

export default connect(mapStateToProps, { updateValuesLoginSigup })(formCadastro);

const styles = StyleSheet.create({
  formCadastro: {
    flex: 1,
    padding: 10
  },
  viewInputs: {
    flex: 4,
    justifyContent: 'center'
  },
  inputs: {
    fontSize: 20,
    height: 45,
    color: 'white',
    borderColor: '#B2DFDB',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10
  },
  viewButton: {
    flex: 1,
    paddingHorizontal: 30
  }

});
