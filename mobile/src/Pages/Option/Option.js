import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, ScrollView, KeyboardAvoidingView, Linking } from 'react-native';
import AREATouchableOpacity from '../../Components/AREATouchableOpacity/AREATouchableOpacity';
import { useFocusEffect } from '@react-navigation/native';


function Option({ navigation }) {
    const [statusGitHub, setStatusGitHub] = React.useState('#FF0000');
    const [statusTrello, setStatusTrello] = React.useState('#FF0000');
    const [statusSlack, setStatusSlack] = React.useState('#FF0000');
    const [statusTwitch, setStatusTwitch] = React.useState('#FF0000');
    const [statusYammer, setStatusYammer] = React.useState('#FF0000');
    const [statusFacebook, setStatusFacebook] = React.useState('#FF0000');

    function Disconnect() {
        AsyncStorage.clear();
        navigation.navigate('HomeScreen');
    }

    useFocusEffect(
        React.useCallback(() => {
            async function getTokens(name, setStatus) {
                const value = await AsyncStorage.getItem(name);
                console.log(name + ' ' + value);
                if (value !== null)
                    setStatus('#00FF00');
            }
            getTokens('github-token', setStatusGitHub);
            getTokens('trello-token', setStatusTrello);
            getTokens('slack-token', setStatusSlack);
            getTokens('twitch-token', setStatusTwitch);
            getTokens('yammer-token', setStatusYammer);
            getTokens('facebook-token', setStatusFacebook);
        }, [])
    );

    return (
        <ScrollView>
            <AREATouchableOpacity
                text={'Connect to Facebook'}
                alignSelf={'stretch'}
                backgroundColor={statusFacebook}
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
                onPress={() => navigation.navigate('Facebook')}
            />
            <AREATouchableOpacity
                text={'Disconnect AREA'}
                alignSelf={'stretch'}
                backgroundColor={'#FFA500'}
                borderRadius={20}
                marginRight={10}
                marginLeft={10}
                marginTop={70}
                padding={5}
                paddingLeft={10}
                fontSize={20}
                fontWeight={'bold'}
                color={'#ffffff'}
                textAlign={'center'}
                onPress={() => Disconnect()}
            />
        </ScrollView>
    );
}

export default Option;