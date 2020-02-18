import React, {useState} from 'react';
import {ScrollView, KeyboardAvoidingView} from 'react-native';
import AREATouchableOpacity from '../../Components/AREATouchableOpacity/AREATouchableOpacity';
import AREAInput from '../../Components/AREAInput/AREAInput';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login() {
    console.log(email);
    console.log(password);
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
