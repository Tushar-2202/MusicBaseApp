import React, {useEffect} from 'react';

import {View} from 'react-native';

import {CommonActions} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {connect} from 'react-redux';
import Routes from 'src/router/Routes';
import {IS_IOS} from 'src/utils';

import {RootState} from 'src/reduxToolkit/store';
import {StackParamList} from 'src/utils/types';
import {styles} from './styles';

interface SplashProps {
  user: object | null;
  navigation: StackNavigationProp<StackParamList>;
}
interface StateProps {
  user: object | null;
  token: string | null;
}
interface DispatchProps {
  // Define your action dispatch functions here
}

// Combine the StateProps and DispatchProps into one type
type Props = StateProps & DispatchProps;

const Splash: React.FC<SplashProps> = props => {
  // navigate to authenticated route
  const resetToAuth = CommonActions.reset({
    index: 0,
    routes: [{name: Routes.Authenticated}],
  });

  // navigate to authenticated route
  const resetToNotAuth = CommonActions.reset({
    index: 0,
    routes: [{name: Routes.UnAuthenticated}],
  });

  /*  Life-cycles Methods */

  useEffect(() => {
    const splashDelay = IS_IOS ? 100 : 1000;
    const {user, navigation} = props;

    if (!user) {
      setTimeout(() => {
        navigation.dispatch(resetToNotAuth);
      }, splashDelay);
    } else {
      setTimeout(() => {
        navigation.dispatch(resetToAuth);
      }, splashDelay);
    }
  }, []);

  /*  Public Interface Methods */

  /*  Validation Methods  */

  /*  UI Events Methods   */

  /*  Custom-Component sub-render Methods */

  return <View style={styles.container} />;
};

// set store values as props

const mapStateToProps = (state: RootState): StateProps => ({
  user: state.app.user,
  token: state.app.token,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
