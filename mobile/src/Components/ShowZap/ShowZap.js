import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import Axios from 'react-native-axios';
import config from '../../../config.json';
import AsyncStorage from '@react-native-community/async-storage';
import AREATouchableOpacity from '../../Components/AREATouchableOpacity/AREATouchableOpacity';

function ShowZap() {
    const [zap, setZap] = React.useState([]);

    React.useEffect(() => {
        async function getZap() {
            await Axios(`${config.address}${config.get_zap}`, {
                method: 'POST',
                data: {
                    authToken: await AsyncStorage.getItem('AreaToken')
                }
            }).then(res => {
                console.log(res.data);
                setZap(res.data);
            }).catch(err => {
                console.log(err);
            })
        }
        getZap();
    }, []);

    async function deleteZap(id) {
        console.log(id);
        await Axios(`${config.address}${config.delete_zap}`, {
            method: 'POST',
            data: {
                authToken: await AsyncStorage.getItem('AreaToken'),
                zapId: id
            }
        }).then(res => {
            Alert.alert('Deleting Zap ', `${res.data}`);
            //getZap();
        }).catch(err => {
            Alert.alert('Deleting Zap ', `${err.data}`);
        })
    }

    return (
        <View>
            {zap.length > 0 && zap.map((item, index) => {
                return (
                    <View key={`${index}MainView`}>
                        <View key={`${index}View1`} style={{ backgroundColor: 'grey', marginTop: 10 }}>
                            <Text key={`${index}serviceA`} style={{ fontWeight: 'bold' }}>{item.serviceA}</Text>
                            <Text key={`${index}+Action`}>Action</Text>
                            <Text key={`${index}+nameA`} style={{ fontWeight: 'bold' }}>{item.nameA}</Text>
                        </View>
                        <View key={`${index}View2`} style={{ backgroundColor: 'purple', marginBottom: 10 }}>
                            <Text key={`${index}serviceR`} style={{ fontWeight: 'bold' }}>{item.serviceR}</Text>
                            <Text key={`${index}+Reaction`}>Reaction</Text>
                            <Text key={`${index}+nameR`} style={{ fontWeight: 'bold' }}>{item.nameR}</Text>
                        </View>
                        <AREATouchableOpacity
                            text={'Delete Zap'}
                            alignSelf={'stretch'}
                            backgroundColor={'#FFA500'}
                            borderRadius={20}
                            marginRight={10}
                            marginLeft={10}
                            marginTop={0}
                            padding={5}
                            paddingLeft={10}
                            fontSize={20}
                            fontWeight={'bold'}
                            color={'#ffffff'}
                            textAlign={'center'}
                            onPress={() => deleteZap(item._id)}
                        />
                    </View>
                )
            })}
        </View>
    )
}

export default ShowZap;