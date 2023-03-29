import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {MenuDrawer} from './components/MenuDrawer';

const AppBar = () => {
  return (
    <View style={{flex: 1, alignSelf: 'stretch'}}>
      <Appbar.Header>
        <Appbar.Action icon="menu" size={scale(25)} onPress={() => {}} />
      </Appbar.Header>
    </View>
  );
};

export default AppBar;
