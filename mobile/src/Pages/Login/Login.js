import React, { Component } from 'react';
import {StyleSheet, ScrollView, View, KeyboardAvoidingView,} from 'react-native';
import AREATouchableOpacity from '../../Components/AREATouchableOpacity/AREATouchableOpacity';
import AREAInput from '../../Components/AREAInput/AREAInput'

function Login(props) {
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
            />
            <AREAInput
              placeholder={'Password'}
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