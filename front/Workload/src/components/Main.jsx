import * as React from 'react';
import { Text, Surface, Card } from 'react-native-paper'
import { View, FlatList } from 'react-native'
import PieChart from 'react-native-pie-chart'
import { moderateScale } from 'react-native-size-matters';
import AppBar from './AppBar';
import DateTitle from './DateTitle';
import { useState, useEffect, useCallback} from 'react';
import DateDay from './DateDay';
import {getDays, getPreviousDays, getCalendarTitle} from '../utility/Calendar.jsx'
import Activity from './Activity';
import AddActivity from './AddActivity';

const Main = () => {
    const [days, setDays] = useState([])
    const [daysAgo, setDaysAgo] = useState(30)
    const [month, setMonth] = useState()
    const [year, setYear] = useState()

    useEffect(() => {
        const initCalendar = () => {
            const initialMonth = getDays();
            setDays(initialMonth);
        };
        initCalendar();
    }, []);

    const loadOlderDays = () => {
        const oldDays = getPreviousDays(daysAgo);
        setDays(days.concat(oldDays));
        setDaysAgo(daysAgo + 30);
    };

    const onViewableItemsChanged = useCallback(({ changed }) => {
        const calendarTitle = getCalendarTitle(changed)
        if (month !== calendarTitle.month) {
            setMonth(calendarTitle.month)
        }
        if (year !== calendarTitle.year) {
            setYear(calendarTitle.year)
        }
    }, []);
    
    return (
        <Surface elevation={0}>
            <View style={{ flexDirection: "column", alignItems: "stretch" }} height="100%" width={"95%"} marginLeft={"auto"} marginRight={"auto"} paddingBottom={"10%"}>
                <AppBar />
                <View style={{ flex: 2, alignSelf: "stretch" }}>
                    <View>
                        <Text variant="titleMedium" >Activity Calendar</Text>
                        <DateTitle  month = {month} year = {year}/>
                    </View>
                    <FlatList
                        horizontal={true}
                        fadingEdgeLength={200}
                        showsHorizontalScrollIndicator = {false}
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
                <View style={{ flex: 7, alignSelf: "stretch" }} marginTop={"2%"} >
                    <View>
                        <Text variant="titleMedium" >Today's Activity</Text>
                    </View>
                    <Card mode={'contained'} marginLeft={"auto"} marginRight={"auto"} paddingTop={"5%"} width={'100%'}>
                        <View style={{ flexDirection: "column" }} height={'100%'}>
                            <PieChart widthAndHeight={moderateScale(170, 0.8)} series={[10, 80, 20]} sliceColor={['blue', 'yellow', 'red']} style={{ flex: 50, alignSelf: "center" }} />
                            <View style={{ flexDirection: "column", justifyContent: 'flex-start', flex: 35, flexWrap: "wrap", alignContent: "stretch" }} paddingLeft={"10%"} paddingRight={"10%"}>
                                <Activity color = {"red"} name = {"Cititu"} />
                                <Activity color = {"blue"} name = {"Invatat"} />
                                <Activity color = {"green"} name = {"Sport"} />
                                <Activity color = {"yellow"} name = {"Dormit"} />
                            </View>
                            <View style={{ flex: 15, alignSelf: "center" }}>
                                <AddActivity />
                            </View>
                        </View>
                    </Card>
                </View>
            </View>
        </Surface>
    );
};

export default Main;