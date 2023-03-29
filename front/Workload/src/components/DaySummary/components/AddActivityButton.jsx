import * as React from 'react';
import {
  Avatar,
  Card,
  Portal,
  Dialog,
  Paragraph,
  Button,
} from 'react-native-paper';
import {scale} from 'react-native-size-matters';
import {View} from 'react-native';

const AddActivityButton = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <Card
      mode={'contained'}
      style={{backgroundColor: '#CC4B35'}}
      marginTop={'2%'}
      onPress={showDialog}>
      <Avatar.Icon
        size={scale(40)}
        icon="plus"
        color={'white'}
        marginLeft={'auto'}
        marginRight={'auto'}
      />
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Card onPress={hideDialog}>
              <Avatar.Icon icon={'close'} />
            </Card>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Card>
  );
};

export default AddActivityButton;
