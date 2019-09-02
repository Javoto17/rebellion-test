import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayBackground,
  },
  borderTop: {
    height: 0,
    width: SCREEN_WIDTH,
    borderTopColor: colors.mainBlue,
    borderTopWidth: (SCREEN_HEIGHT / 2) / 1.75,
    borderBottomWidth: SCREEN_WIDTH,
    borderBottomColor: 'transparent',
  },
  wrapper: {
    position: 'absolute',
    top: (SCREEN_HEIGHT / 3) - (SCREEN_HEIGHT / 3.15),
    left: 0,
    width: '100%',
    height: '100%',
    paddingBottom: (SCREEN_HEIGHT / 3) - (SCREEN_HEIGHT / 3.15),
  },
  containerList: {
    flex: 1,
  },
});

export default styles;