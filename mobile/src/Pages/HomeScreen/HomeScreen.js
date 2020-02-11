import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';
import Header from '../../Components/Header/Header';
import AnimatedGradient from '../../Components/AnimatedGradient/AnimatedGradient';
import AnimatedImage from '../../Components/AnimatedImage/AnimatedImage';
import AREAText from '../../Components/AREAText/AREAText';
import AREAInput from '../../Components/AREAInput/AREAInput';
import AREATouchableOpacity from '../../Components/AREATouchableOpacity/AREATouchableOpacity';
import Scherpi from '../../Assets/scherpi1.png';
import Slack from '../../Assets/slack-logo.png';
import Trello from '../../Assets/trello-logo.png';
import Github from '../../Assets/github-logo.png';

const Styles = StyleSheet.create({
  substitute: {
    height: 160,
  },
});

function HomeScreen(props) {
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior={'position'} enabled>
        <Header
          firstLogo={Slack}
          secondLogo={Github}
          thirdLogo={Trello}
          width={100}
          height={100}
          flexDirection={'row'}
          justifyContent={'space-evenly'}
          duration={2000}
          delay={[500, 1000, 1500]}
        />
        <AnimatedGradient
          duration={2000}
          delay={1500}
          upColor={'#cccccc'}
          downColor={'#cccccc'}
          upHeight={200}
          downHeight={150}
          upDirection={'up'}
          downDirection={'down'}
        />
        {/* View needed to space things after absolute view above */}
        <View style={Styles.substitute} />
        <AnimatedImage
          image={Scherpi}
          width={200}
          height={200}
          position={'absolute'}
          justifyContent={'center'}
          alignItems={'center'}
          alignSelf={'center'}
          top={160}
          duration={2000}
          delay={1600}
        />
        <AREAText
          text={"Bienvenue sur l'AREA !"}
          justifyContent={'center'}
          alignItems={'center'}
          alignSelf={'center'}
          fontWeight={'bold'}
          fontSize={25}
        />
        <AREAInput
          placeholder={'Email adress'}
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
          text={'Continue'}
          alignSelf={'stretch'}
          backgroundColor={'#ff0000'}
          borderRadius={20}
          marginRight={10}
          marginLeft={10}
          marginTop={-8}
          padding={5}
          paddingLeft={10}
          fontSize={20}
          fontWeight={'bold'}
          color={'#ffffff'}
          textAlign={'center'}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

// HomeScreen.navigationOptions = ({navigation}) => ({
//   headerShown: false,
// });

export default HomeScreen;
