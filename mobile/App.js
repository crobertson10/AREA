import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import HomeScreen from './src/Pages/HomeScreen/HomeScreen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <HomeScreen />;
};

export default App;
