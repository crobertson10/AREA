import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Fade from '../../Components/Fade/Fade';
import FadeInView from '../../Components/FadeInView/FadeInView';
import Slack from '../../Assets/slack-logo.png';
import Trello from '../../Assets/trello-logo.png';
import Github from '../../Assets/github-logo.png';
import Scherpi from '../../Assets/scherpi1.png';

const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  logoServices: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: 160,
  },
  substitute: {
    height: 160,
  },
  welcomeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  email: {
    alignSelf: 'stretch',
    backgroundColor: '#e5e5e5',
    borderRadius: 20,
    margin: 10,
    marginTop: 50,
    padding: 5,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  continue: {
    alignSelf: 'stretch',
    backgroundColor: '#ff0000',
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop: -8,
    padding: 5,
    paddingLeft: 10,
  },
  continueText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});

class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior={'position'} enabled>
          {/* Header Up Begin */}
          <View style={Styles.header}>
            <FadeInView duration={2000} delay={500}>
              <Image style={Styles.logoServices} source={Slack} />
            </FadeInView>
            <FadeInView duration={2000} delay={1000}>
              <Image style={Styles.logoServices} source={Github} />
            </FadeInView>
          </View>
          {/* Header Up End */}
          {/* Header Down Begin */}
          <View style={Styles.header}>
            <FadeInView duration={2000} delay={1500}>
              <Image style={Styles.logoServices} source={Trello} />
            </FadeInView>
          </View>
          {/* Header Down End */}
          {/* Fade Effect Begin */}
          <View>
            <FadeInView duration={2000} delay={1500}>
              <Fade color="#cccccc" height={200} direction={'up'}>
                <View />
              </Fade>
              <Fade color="#cccccc" height={150} direction={'down'}>
                <View />
              </Fade>
            </FadeInView>
          </View>
          {/* Fade Effect End */}
          {/* Substitution View for absolute View above Begin */}
          <View style={Styles.substitute} />
          {/* Substitution View for absolute View above End */}
          {/* Display App Logo Begin */}
          <View style={Styles.logoContainer}>
            <FadeInView duration={2000} delay={1600}>
              <Image style={Styles.logo} source={Scherpi} />
            </FadeInView>
          </View>
          {/* Display App Logo End */}
          {/* Welcome Message Begin */}
          <View style={Styles.welcomeContainer}>
            <Text style={Styles.welcomeText}>Bienvenue sur ScherpAREA !</Text>
          </View>
          {/* Welcome Message End */}
          {/* Email Input Begin */}
          <View>
            <TextInput
              style={Styles.email}
              placeholder={'Email adress'}
              underlineColorAndroid={'transparent'}
            />
          </View>
          {/* Email Input End */}
          {/* Continue Button Begin */}
          <View>
            <TouchableOpacity style={Styles.continue}>
              <Text style={Styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>
          {/* Continue Button Begin */}
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

export default HomeScreen;
