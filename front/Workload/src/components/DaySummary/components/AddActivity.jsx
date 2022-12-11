import * as React from 'react';
import {Avatar, Card} from 'react-native-paper';
import {scale} from 'react-native-size-matters';

const AddActivityButton = () => {
  return (
    <Card
      mode={'contained'}
      style={{backgroundColor: '#CC4B35'}}
      marginTop={'2%'}>
      <Avatar.Icon
        size={scale(40)}
        icon="plus"
        color={'white'}
        marginLeft={'auto'}
        marginRight={'auto'}
      />
    </Card>
  );
};

export default AddActivityButton;
