import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainBlue,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  label: {
    fontFamily: 'avenir',
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100%',
  }
});

export default styles;