import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 6,
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  paragraph: {
    marginVertical: 2,
  },
  containerText: {
    flex: 0.85,
    justifyContent: 'flex-start',
  },
  containerInfo: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrimary: {
    color: colors.blueText,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'avenir',
  },
  textSecondary: {
    color: colors.gray,
    fontSize: 16,
    fontFamily: 'avenir',
  },
  containerActions: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;