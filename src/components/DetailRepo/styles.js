import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  textButton: {
    color: colors.mainBlue,
    fontFamily: 'avenir',
    fontSize: 14,
  },
  textCount: {
    backgroundColor: colors.blueLigth,
    fontWeight: 'bold',
    height: 20,
    width: 20,
    marginHorizontal: 2,
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    color: colors.white,
    textAlign: 'center',
  }
});

export default styles;