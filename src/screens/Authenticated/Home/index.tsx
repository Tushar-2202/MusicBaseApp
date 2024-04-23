import React, {useState} from 'react';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppButton, Dialog, Label} from 'src/component';
import {Color, CommonStyle} from 'src/utils';
import Routes from 'src/router/Routes';
import {StackParamList} from 'src/utils/types';
import {styles} from './styles';

interface HomeProps {
  navigation: StackNavigationProp<StackParamList>;
  // Add your props with type
}
const Home = (props: HomeProps) => {
  const {navigation} = props;
  const [open, setOpen] = useState(false);
  return (
    <View style={CommonStyle.master_full_flex}>
      <View style={styles.header}>
        <Label bold xlarge>
          Good Mornig
        </Label>

        <Dialog
          visible={open}
          title="Title"
          desc="Description"
          onNegativePress={() => setOpen(false)}
          onPositivePress={() => setOpen(false)}
          positiveBtnText="Yes"
          negativeBtnText="No"
        />

        <AppButton
          children="Open Dialog"
          width=""
          click={() => setOpen(true)}
          backgroundColor={Color.BLACK}
          textColor={Color.WHITE}
        />
      </View>
    </View>
  );
};
export default Home;
