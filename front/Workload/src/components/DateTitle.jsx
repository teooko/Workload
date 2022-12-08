import * as React from 'react';
import { Text } from 'react-native-paper'

const DateTitle = ({month, year}) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    return (
        <Text variant="titleSmall">{months[month]} {year}</Text>
    )
}

export default DateTitle
