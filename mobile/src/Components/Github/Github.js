import * as React from 'react';
import { WebView } from 'react-native-webview';
import Axios from 'react-native-axios';
import config from '../../../config.json';
import AsyncStorage from '@react-native-community/async-storage';

function Github({navigation}) {
    const [url, setUrl] = React.useState('');
    const [webview, setWebView] = React.useState(null);
    const [stop, setStop] = React.useState(false);

    React.useEffect(() => {
        console.log(`${config.address}${config.github_url}`);
        Axios(`${config.address}${config.github_url}`, {
            method: 'GET'
        }).then(res => {
            console.log(res.data.url);
            setUrl(res.data.url);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    function isRedirecting(navState) {
        let code = '';
        const data = {};

        if (!navState.url || stop)
            return;
        console.log(navState.url);
        if (navState.url.includes('code=')) {
            code = navState.url.split('=');
            data.code = code[1];
            Axios(`${config.address}${config.github_token}`, {
                method: 'POST',
                data
            }).then(res => {
                AsyncStorage.setItem('github-token', res.data.github_token);
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
            ref={ref => setWebView(ref)}
            onNavigationStateChange={navState => {isRedirecting(navState)}}
            source={{ uri: (url !== '' ? url : '') }}
            incognito={true}
        />
    )
}

export default Github;