import * as React from 'react';
import { WebView } from 'react-native-webview';
import Axios from 'react-native-axios';
import config from '../../../config.json';
import AsyncStorage from '@react-native-community/async-storage';

function Facebook({navigation}) {
    const [url, setUrl] = React.useState('');
    const [webview, setWebview] = React.useState(null);
    const [stop, setStop] = React.useState(false);

    React.useEffect(() => {
        Axios(`${config.address}${config.facebook_url}`, {
            method: 'GET'
        }).then(res => {
            setUrl(res.data.url);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    function isRedirecting(navState) {
        let split = '';
        let code = '';
        const data = {};

        if (!navState.url || stop)
            return;
        if (navState.url.includes('?code=')) {
            split = navState.url.split('?');
            code = split[1].split('code=');
            data.code = code[1];
            Axios(`${config.address}${config.facebook_token}`, {
                method: 'POST',
                data
            }).then(res => {
                AsyncStorage.setItem('facebook-token', res.data.facebook_token);
                navigation.navigate('Option');
            }).catch(err => {
                console.log(err);
            })
            webview.stopLoading();
            setStop(true);
        }
    }

    return (
        <WebView
            ref={ref => setWebview(ref)}
            onNavigationStateChange={navState => {isRedirecting(navState)}}
            source={{ uri: (url !== '' ? url : '') }}
        />
    );
}

export default Facebook;