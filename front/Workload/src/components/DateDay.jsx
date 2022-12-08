import * as React from 'react';
import { Text, Avatar, Card } from 'react-native-paper'
import { View } from 'react-native'
import { scale } from 'react-native-size-matters';

const DateDay = ({item}) => {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
    
    return (
        <Card width = {scale(70)} mode = {'contained'} marginLeft = {scale(13)}>
            <View style={{ justifyContent: "center", flexDirection: "column", alignItems: "center", alignSelf: "center"}} height = {"100%"}>
                <Text variant="titleSmall">{weekDays[item.weekDay]}</Text>
                <Text variant="bodyMedium">{item.monthDay}</Text>
                <View style={{ flexDirection: "row", alignItems: 'center'} }>
                    <Avatar.Icon size={scale(15)} icon="circle" color={"red"} />
                    <Avatar.Icon size={scale(15)} icon="checkbox-multiple-blank-circle-outline" color={"white"} />
                </View>
            </View>
        </Card>
    )
}

export default DateDay
