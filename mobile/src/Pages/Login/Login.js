import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AREATouchableOpacity from '../../Components/AREATouchableOpacity/AREATouchableOpacity';
import AREAInput from '../../Components/AREAInput/AREAInput';
import axios from 'react-native-axios';
import config from '../../../config.json';

function Login({ navigation }) {
  const [email, setEmail] = useState('fred@fred.fr');
  const [password, setPassword] = useState('fred');

  function login() {
    const data = {
      email,
      password
    };
    console.log('toto');
    console.log(`${config.address}${config.login}`);

    axios(`${config.address}${config.login}`, {
      method: 'POST',
      data
    }).then(res => {
      console.log(res.data);
      if (res.status == 200) {
        AsyncStorage.setItem("AreaToken", res.data.authToken);
        navigation.navigate('Dashboard');
      }
    }).catch(err => {
      console.log(err);
      if (err.status != 200) {
        Alert.alert('Login', `Error: Bad Creditentials`, [{ text: 'OK' }])
      }
    })
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior={'position'} enabled>
        <AREAInput
          placeholder={'Email'}
          underlineColorAndroid={'transparent'}
          alignSelf={'stretch'}
          backgroundColor={'#e5e5e5'}
          borderRadius={20}
          margin={10}
          marginTop={50}
          padding={5}
          paddingLeft={10}
          fontSize={20}
          fontWeight={'bold'}
          onChange={setEmail}
          secure={false}
        />
        <AREAInput
          placeholder={'Password'}
          underlineColorAndroid={'transparent'}
          alignSelf={'stretch'}
          backgroundColor={'#e5e5e5'}
          borderRadius={20}
          margin={10}
          marginTop={0}
          padding={5}
          paddingLeft={10}
          fontSize={20}
          fontWeight={'bold'}
          onChange={setPassword}
          secure={true}
        />
        <AREATouchableOpacity
          text={'Login'}
          alignSelf={'stretch'}
          backgroundColor={'#ff0000'}
          borderRadius={20}
          marginRight={10}
          marginLeft={10}
          marginTop={10}
          padding={5}
          paddingLeft={10}
          fontSize={20}
          fontWeight={'bold'}
          color={'#ffffff'}
          textAlign={'center'}
          onPress={() => login()}
        />
        <AREATouchableOpacity
          text={'Register'}
          alignSelf={'stretch'}
          backgroundColor={'#ff0000'}
          borderRadius={20}
          marginRight={10}
          marginLeft={10}
          marginTop={10}
          padding={5}
          paddingLeft={10}
          fontSize={20}
          fontWeight={'bold'}
          color={'#ffffff'}
          textAlign={'center'}
          onPress={() => navigation.navigate('Register')}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default Login;
