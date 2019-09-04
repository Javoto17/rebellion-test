import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.grayDark,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 'auto',
    flexDirection: 'row',
  },
  textButton: {
    color: colors.mainBlue,
    fontFamily: 'avenir',
    fontSize: 14,
  },
});

export default styles;