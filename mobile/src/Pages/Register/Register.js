import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';

function Register() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     password: '',
  //     confpassword: '',
  //     name: '',
  //     lastname: '',
  //   };
  // }

  // onClickListener = viewId => {
  //   Alert.alert('Alert', 'Button pressed ' + viewId);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} />
        <TextInput
          style={styles.inputs}
          placeholder="Name"
          underlineColorAndroid="transparent"
          onChangeText={name => this.setState({name})}
        />

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} />
          <TextInput
            style={styles.inputs}
            placeholder="Lastname"
            underlineColorAndroid="transparent"
            onChangeText={lastname => this.setState({lastname})}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({email})}
          />

          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} />
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({password})}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} />
            <TextInput
              style={styles.inputs}
              placeholder="Confirm Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={confpassword => this.setState({confpassword})}
            />
          </View>

          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.onClickListener('register')}>
            <Text style={styles.loginText}>Register</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonContainer}
            onPress={() => this.onClickListener('login')}>
            <Text>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A9A9A9',
  },
  inputContainer: {
    borderBottomColor: '#696969',
    backgroundColor: '#696969',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FEFEFE',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#ED2425',
  },
  loginText: {
    color: 'white',
  },
});

export default Register;
