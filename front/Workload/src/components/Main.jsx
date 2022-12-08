import * as React from 'react';
import { Surface } from 'react-native-paper'
import { View } from 'react-native'
import AppBar from './AppBar';
import { useState, useEffect, useCallback} from 'react';
import {getDays, getPreviousDays, getCalendarTitle} from '../utility/Calendar.jsx'
import ScrollingCalendar from './ScrollingCalendar';
import ActivitySummary from './ActivitySummary';

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
                <ScrollingCalendar days = {days} month = {month} year = {year} loadOlderDays = {loadOlderDays} onViewableItemsChanged = {onViewableItemsChanged} />
                <ActivitySummary/>
            </View>
        </Surface>
    );
};

export default Main;
