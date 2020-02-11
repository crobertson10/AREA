import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import HomeScreen from './src/Pages/HomeScreen/HomeScreen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <HomeScreen />;
}

export default App;
