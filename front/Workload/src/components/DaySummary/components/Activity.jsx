import * as React from 'react';
import { Text, Avatar} from 'react-native-paper'
import { View } from 'react-native'
import { scale } from 'react-native-size-matters';

const Activity = ({color, name}) => {
    return (
        <View style={{ flexDirection: "row", alignItems: 'center' }} paddingTop={'3%'}>
            <Avatar.Icon size={scale(15)} icon="circle" color={color} />
            <Text variant="titleSmall">
                {name}
            </Text>
        </View>
    )
}

export default Activity
