import { StyleSheet } from 'react-native';
import { ThemeUtils } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    height: ThemeUtils.relativeHeight(15),
    marginHorizontal: ThemeUtils.relativeWidth(5),
  }
});
