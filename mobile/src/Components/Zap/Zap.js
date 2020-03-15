import * as React from 'react';
import { View, Picker, Text, Alert } from 'react-native';
import Axios from 'react-native-axios';
import AsyncStorage from '@react-native-community/async-storage';
import config from '../../../config.json';
import AREATouchableOpacity from '../../Components/AREATouchableOpacity/AREATouchableOpacity';
import AREAInput from '../../Components/AREAInput/AREAInput';


function Zap() {
    const [inputAction, setInputAction] = React.useState('');
    const [inputReaction, setInputReaction] = React.useState('');
    const [services, setServices] = React.useState([]);
    const [service, setService] = React.useState('');
    const [actions, setActions] = React.useState([]);
    const [action, setAction] = React.useState('');
    const [reactionServices, setReactionServices] = React.useState([]);
    const [reactionService, setReactionService] = React.useState('');
    const [reactions, setReactions] = React.useState([]);
    const [reaction, setReaction] = React.useState('');

    React.useEffect(() => {
        async function getServices() {
            await Axios(`${config.address}${config.services}`, {
                method: 'POST',
                data: {
                    authToken: await AsyncStorage.getItem('AreaToken')
                }
            }).then(res => {
                setServices(res.data);
                setReactionServices(res.data);
            }).catch(err => {
                console.log(err);
            })
        }
        getServices();
    }, []);

    async function updateService(value) {
        setService(value);
        await Axios(`${config.address}${config.actions}`, {
            method: 'POST',
            data: {
                authToken: await AsyncStorage.getItem('AreaToken'),
                service: value
            }
        }).then(res => {
            setActions(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    async function updateAction(value) {
        setAction(value);
    }

    async function updateReactionService(value) {
        setReactionService(value);
        console.log('service: ' + value);
        console.log('actionService: ' + service);
        console.log('actionName: ' + action);
        await Axios(`${config.address}${config.reactions}`, {
            method: 'POST',
            data: {
                authToken: await AsyncStorage.getItem('AreaToken'),
                service: value,
                actionService: service,
                actionName: action

            }
        }).then(res => {
            setReactions(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    async function updateReaction(value) {
        setReaction(value);
    }

    async function createZap() {
        await Axios(`${config.address}${config.zap}`, {
            method: 'POST',
            data: {
                authToken: await AsyncStorage.getItem('AreaToken'),
                serviceA: service,
                serviceR: reactionService,
                nameA: action,
                nameR: reaction,
                data1: inputAction,
                data2: inputReaction
            }
        }).then(res => {
            console.log('zap ?: ' + res.data);
            Alert.alert('Creating Zap ', `${res.data}`);
        }).catch(err => {
            console.log(err);
            Alert.alert('Creating Zap ', `${err}`);
        })
    }

    return (
        <View>
            <View>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Action Service
                </Text>
            </View>
            <Picker
                selectedValue={service}
                onValueChange={updateService}
            >
                {services.length > 0 && services.map((item, index) => {
                    return <Picker.Item key={index} label={item} value={item} />
                })}
            </Picker>
            <View>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Action
                </Text>
            </View>
            <Picker
                selectedValue={action}
                onValueChange={updateAction}
            >
                {actions.length > 0 && actions.map((item, index) => {
                    return <Picker.Item key={index} label={item} value={item} />
                })}
            </Picker>
            <AREAInput
                placeholder={'Input'}
                underlineColorAndroid={'transparent'}
                alignSelf={'stretch'}
                backgroundColor={'#e5e5e5'}
                borderRadius={20}
                margin={10}
                marginTop={0}
                padding={5}
                paddingLeft={10}
                fontSize={20}
                fontWeight={'bold'}
                onChange={setInputAction}
                secure={false}
            />
            <View>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Reaction Service
                </Text>
            </View>
            <Picker
                selectedValue={reactionService}
                onValueChange={updateReactionService}
            >
                {reactionServices.length > 0 && reactionServices.map((item, index) => {
                    return <Picker.Item key={index} label={item} value={item} />
                })}
            </Picker>
            <View>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Reaction
                </Text>
            </View>
            <Picker
                selectedValue={reaction}
                onValueChange={updateReaction}
            >
                {reactions.length > 0 && reactions.map((item, index) => {
                    return <Picker.Item key={index} label={item} value={item} />
                })}
            </Picker>
            <AREAInput
                placeholder={'Input'}
                underlineColorAndroid={'transparent'}
                alignSelf={'stretch'}
                backgroundColor={'#e5e5e5'}
                borderRadius={20}
                margin={10}
                marginTop={0}
                padding={5}
                paddingLeft={10}
                fontSize={20}
                fontWeight={'bold'}
                onChange={setInputReaction}
                secure={false}
            />
            <AREATouchableOpacity
                text={'Create Your Zap Now !'}
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
                onPress={() => createZap()}
            />
        </View >
    )
}

export default Zap;