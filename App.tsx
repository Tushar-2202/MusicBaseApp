import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, BackHandler} from 'react-native';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import JailMonkey from 'jail-monkey';
import {Toast} from 'src/component';
import {Color} from 'src/utils';
import RootNavigator from 'src/router';
import {persistor, store} from 'src/reduxToolkit/store';
import TrackPlayer, {Capability} from 'react-native-track-player';
import {songsList} from 'src/utils/MusicData';

const MyAppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Color.PRIMARY,
    background: Color.PRIMARY_BACKGROUND,
    card: Color.PRIMARY,
    text: Color.WHITE,
  },
};

const App: React.FC = () => {
  // Implemented security from root devices, if device is rooted, it will exit the app
  useEffect(() => {
    if (JailMonkey.isJailBroken()) {
      BackHandler.exitApp();
    }
    setupPlayer();
  }, []);

  const setupPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        // Media controls capabilities
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],

        // Capabilities that will show up when the notification is in the compact form on Android
        compactCapabilities: [Capability.Play, Capability.Pause],

        // Icons for the notification on Android (if you don't like the default ones)
      });
      await TrackPlayer.add(songsList);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor={Color.TRANSPARENT}
            translucent
          />
          <NavigationContainer theme={MyAppTheme}>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
        <Toast ref={ref => Toast.setRef(ref)} />
      </PersistGate>
    </Provider>
  );
};

export default App;
