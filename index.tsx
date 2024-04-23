/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import TrackPlayer from 'react-native-track-player';

const APP_NAME = 'SpotifyClone';

AppRegistry.registerComponent(APP_NAME, () => App);
TrackPlayer.registerPlaybackService(() =>
  require('./src/utils/PlayBackService'),
);
