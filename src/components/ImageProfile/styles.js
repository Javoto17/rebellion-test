import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
  },
  wrapperImg: {
    overflow: 'hidden',
    borderRadius: 10,
    borderWidth: 8,
    borderColor: '#f5f5f5',
    backgroundColor: colors.grayLigth,
  }
});

export default styles;