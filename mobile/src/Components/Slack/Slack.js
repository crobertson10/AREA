import * as React from 'react';
import { WebView } from 'react-native-webview';
import Axios from 'react-native-axios';
import config from '../../../config.json';
import AsyncStorage from '@react-native-community/async-storage';

function Slack({ navigation }) {
    const [url, setUrl] = React.useState('');
    const [webview, setWebview] = React.useState(null);
    const [stop, setStop] = React.useState(false);

    React.useEffect(() => {
        Axios(`${config.address}${config.slack_url}`, {
            method: 'GET'
        }).then(res => {
            setUrl(res.data.url);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    function isRedirecting(navState) {
        let code = '';
        let split = '';

        if (!navState.url || stop)
            return;
        console.log(navState.url);
        if (navState.url.includes('code=')) {
            split = navState.url.split('&');
            code = split[0].split('=');
            Axios(`${config.address}${config.slack_token}`, {
                method: "post",
                data: {
                    code: code[1],
                }
            }).then(res => {
                console.log(res.data);
                AsyncStorage.setItem('slack-token', res.data.slack_token);
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
            onNavigationStateChange={navState => { isRedirecting(navState) }}
            source={{ uri: (url !== '' ? url : '') }}
        // incognito={true}
        />
    )
}

export default Slack;