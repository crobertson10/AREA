import React from 'react';
import AREATouchableOpacity from '../../Components/AREATouchableOpacity/AREATouchableOpacity';
import AREAInput from '../../Components/AREAInput/AREAInput';
import { ScrollView, KeyboardAvoidingView } from 'react-native';


function Dashboard({ navigation }) {


    return (
        <ScrollView>
            <AREATouchableOpacity
                text={'Do something with GitHub'}
                alignSelf={'stretch'}
                backgroundColor={'#00FFFF'}
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
                onPress={() => navigation.navigate('Github')}
            />
            <AREATouchableOpacity
                text={'Do something with Trello'}
                alignSelf={'stretch'}
                backgroundColor={'#00FFFF'}
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
                onPress={() => navigation.navigate('Trello')}
            />
        </ScrollView>
    );
}

export default Dashboard;