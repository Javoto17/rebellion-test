import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  containerList: {
    flex: 1,
  },
  wrapperCard: {
    minHeight: (SCREEN_HEIGHT / 2) / 1.75,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;