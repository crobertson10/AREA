import * as React from 'react';
import { WebView } from 'react-native-webview';
import Axios from 'react-native-axios';
import config from '../../../config.json';
import AsyncStorage from '@react-native-community/async-storage';

function Yammer({ navigation }) {
    const [url, setUrl] = React.useState('');
    const [webview, setWebview] = React.useState(null);
    const [stop, setStop] = React.useState(false);

    React.useEffect(() => {
        Axios(`${config.address}${config.yammer_url}`, {
            method: 'GET'
        }).then(res => {
            setUrl(res.data.url);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    function isRedirecting(navState) {
        let code = '';

        if (!navState.url || stop)
            return;
        console.log(navState.url);
        if (navState.url.includes('code=')) {
            code = navState.url.split('=');
            Axios(`${config.address}${config.yammer_token}`, {
                method: "post",
                data: {
                    code: code[1],
                }
            }).then(res => {
                console.log(res.data);
                AsyncStorage.setItem('yammer-token', res.data.yammer_token);
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

export default Yammer;