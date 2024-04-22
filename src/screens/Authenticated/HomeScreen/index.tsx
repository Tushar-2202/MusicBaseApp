import React from 'react';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Label} from 'src/component';
import {CommonStyle} from 'src/utils';
import Routes from 'src/router/Routes';
import {StackParamList} from 'src/utils/types';
import {styles} from './styles';

interface HomeProps {
  navigation: StackNavigationProp<StackParamList>;
  // Add your props with type
}
const Home: React.FC<HomeProps> = props => {
  const {navigation} = props;
  /*  Life-cycles Methods */
  /*  Public Interface Methods */
  /*  Validation Methods  */
  /*  UI Events Methods   */
  const onPressIcon = () => {
    navigation.navigate(Routes.Profile);
  };
  /*  Custom-Component sub-render Methods */
  return (
    <View style={CommonStyle.master_full_flex}>
      <View style={styles.container}>
        <Label onPress={onPressIcon}>Home Screen</Label>
      </View>
    </View>
  );
};
export default Home;
