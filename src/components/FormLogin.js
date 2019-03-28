import React from 'react';
import {
   View,
   Text,
   TextInput,
   Button,
   StyleSheet,
   TouchableHighlight,
   ImageBackground
 } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { updateValuesLoginSigup } from '../actions/AutenticacaoActions';

const bg = require('../imgs/bg.png');

const formLogin = props => {
  return (
    <ImageBackground source={bg} style={{ width: '100%', height: '100%' }}>
      <View style={styles.formLogin}>
        <View style={styles.top}>
          <Text style={styles.textTop}>Whatsapp Clone</Text>
        </View>
        <View style={styles.viewInputs}>

          <TextInput
            value={props.email} style={styles.inputs}
            placeholder="E-mail"
            placeholderTextColor='white'
            underlineColorAndroid='transparent'
            onChangeText={text => props.updateValuesLoginSigup(text, 'email')}
          />

          <TextInput
            value={props.password} style={styles.inputs}
            secureTextEntry
            placeholder="Senha"
            placeholderTextColor='white'
            underlineColorAndroid='transparent'
            onChangeText={text => props.updateValuesLoginSigup(text, 'password')}
          />
        </View>
        <View style={styles.viewButton}>
          <Button color="#115E54" title="Acessar" onPress={() => false} />
        </View>
        <TouchableHighlight
            onPress={() => { Actions.formcadastro(); }}
        >
          <Text style={{ fontSize: 15, color: 'white', textAlign: 'center' }}>
            cadastre-se</Text>
          </TouchableHighlight>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    password: state.AutenticacaoReducer.password
  }
);

export default connect(mapStateToProps, { updateValuesLoginSigup })(formLogin);

const styles = StyleSheet.create({
  formLogin: {
    flex: 1,
    padding: 10
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTop: {
    fontSize: 25,
    color: 'white'
  },
  viewInputs: {
    flex: 2,
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
    flex: 2,
    paddingHorizontal: 30,
    justifyContent: 'center'
  }

});
