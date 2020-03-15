import * as React from 'react';
import AREATouchableOpacity from '../AREATouchableOpacity/AREATouchableOpacity';

function ServiceButton(props) {
    return (
        <AREATouchableOpacity
            text={props.text}
            alignSelf={'stretch'}
            backgroundColor={props.backgroundColor}
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
            onPress={props.onPress}
            />
    );
}

export default ServiceButton;