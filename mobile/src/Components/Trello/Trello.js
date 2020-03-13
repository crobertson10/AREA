import * as React from 'react';
import { WebView } from 'react-native-webview';
import Axios from 'react-native-axios';
import config from '../../../config.json';
import AsyncStorage from '@react-native-community/async-storage';

function Trello({navigation}) {
    const [url, setUrl] = React.useState('');
    const [webview, setWebview] = React.useState(null);
    const [stop, setStop] = React.useState(false);

    return (
        <WebView 
            ref={ref => setWebview(ref)}
        />
    )
}

export default Trello;