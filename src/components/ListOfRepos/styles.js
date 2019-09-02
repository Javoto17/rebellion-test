import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
    marginTop: 24
  },
  fillEmptyList: {
    color: colors.blueText,
    fontSize: 16,
  },
  containerFill: {
    flex: 1,
    flexGrow: 1,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;