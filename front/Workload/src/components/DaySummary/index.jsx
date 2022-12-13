import * as React from 'react';
import {Text, Card} from 'react-native-paper';
import {View} from 'react-native';
import PieChart from 'react-native-pie-chart';
import {moderateScale} from 'react-native-size-matters';
import Activity from './components/Activity';
import AddActivityButton from './components/AddActivityButton';

export default DaySummary = () => {
  return (
    <View style={{flex: 7, alignSelf: 'stretch'}} marginTop={'2%'}>
      <View>
        <Text variant="titleMedium">Today's Activity</Text>
      </View>
      <Card
        mode={'contained'}
        marginLeft={'auto'}
        marginRight={'auto'}
        paddingTop={'5%'}
        width={'100%'}>
        <View style={{flexDirection: 'column'}} height={'100%'}>
          <PieChart
            widthAndHeight={moderateScale(170, 0.8)}
            series={[10, 80, 20]}
            sliceColor={['blue', 'yellow', 'red']}
            style={{flex: 50, alignSelf: 'center'}}
          />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              flex: 35,
              flexWrap: 'wrap',
              alignContent: 'stretch',
            }}
            paddingLeft={'10%'}
            paddingRight={'10%'}>
            <Activity color={'red'} name={'Cititu'} />
            <Activity color={'blue'} name={'Invatat'} />
            <Activity color={'green'} name={'Sport'} />
            <Activity color={'yellow'} name={'Dormit'} />
          </View>
          <View style={{flex: 15, alignSelf: 'center'}}>
            <AddActivityButton />
          </View>
        </View>
      </Card>
    </View>
  );
};
