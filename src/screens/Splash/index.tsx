import React, {useEffect} from 'react';

import {View} from 'react-native';

import {CommonActions} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Routes from 'src/router/Routes';
import {IS_IOS} from 'src/utils';
import {StackParamList} from 'src/utils/types';
import {styles} from './styles';

interface SplashProps {
  navigation: StackNavigationProp<StackParamList>;
}

const Splash = (props: SplashProps) => {
 
  const resetToAuth = CommonActions.reset({
    index: 0,
    routes: [{name: Routes.Authenticated}],
  });

  useEffect(() => {
    const splashDelay = IS_IOS ? 100 : 1000;
    const {navigation} = props;

    setTimeout(() => {
      navigation.dispatch(resetToAuth);
    }, splashDelay);
  }, []);

  return <View style={styles.container} />;
};

export default Splash;
