import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import HomeScreen from './src/Pages/HomeScreen/HomeScreen';
import Register from './src/Pages/Register/Register';
import Login from './src/Pages/Login/Login';
import Option from './src/Pages/Option/Option';
import Dashboard from './src/Pages/Dashboard/Dashboard';
import Github from './src/Pages/Dashboard/Action/Github/Github';
import Trello from './src/Pages/Dashboard/Action/Trello/Trello';
import Slack from './src/Pages/Dashboard/Action/Slack/Slack';
import Facebook from './src/Components/Facebook/Facebook';
import Github_Auth from './src/Components/Github/Github';
import Trello_Auth from './src/Components/Trello/Trello';
import Twitch_Auth from './src/Components/Twitch/Twitch';
import Slack_Auth from './src/Components/Slack/Slack';
import Yammer_Auth from './src/Components/Yammer/Yammer';

function App() {
  const Stack = createStackNavigator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Option" component={Option}/>
        <Stack.Screen 
          options={{headerShown: false, gestureEnabled: false}}
          name="Dashboard" 
          component={Dashboard}
        />
        <Stack.Screen name="Github" component={Github}/>
        <Stack.Screen name="Trello" component={Trello}/>
        <Stack.Screen name="Slack" component={Slack}/>
        <Stack.Screen options={{headerShown: false}} name="Facebook_Auth" component={Facebook}/>
        <Stack.Screen options={{headerShown: false}} name="Github_Auth" component={Github_Auth}/>
        <Stack.Screen options={{headerShown: false}} name="Trello_Auth" component={Trello_Auth}/>
        <Stack.Screen options={{headerShown: false}} name="Slack_Auth" component={Slack_Auth}/>
        <Stack.Screen options={{headerShown: false}} name="Yammer_Auth" component={Yammer_Auth}/>
        {/* <Stack.Screen options={{headerShown: false}} name="Twitch_Auth" component={Twitch_Auth}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
