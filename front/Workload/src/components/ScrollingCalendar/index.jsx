import * as React from 'react';
import { Text } from 'react-native-paper'
import { View, FlatList } from 'react-native'
import DateTitle from './components/DateTitle';
import DateDay from './components/DateDay';

export default ScrollingCalendar = ({days, month, year, loadOlderDays, onViewableItemsChanged}) => {
    return (
        <View style={{ flex: 2, alignSelf: "stretch" }}>
            <View>
                <Text variant="titleMedium" >Activity Calendar</Text>
                <DateTitle month={month} year={year} />
            </View>
            <FlatList
                horizontal={true}
                fadingEdgeLength={200}
                showsHorizontalScrollIndicator={false}
                data={days}
                onEndReached={loadOlderDays}
                onEndReachedThreshold={10}
                renderItem={DateDay}
                overScrollMode={"never"}
                marginTop={"1%"}
                inverted={true}
                onViewableItemsChanged={onViewableItemsChanged}
            />
        </View>
    )
}
