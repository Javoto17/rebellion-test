import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.9,
    elevation: 2,
    backgroundColor: '#ffffff',
  },
  wrapperInfo: {
    paddingVertical: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paragraph: {
    marginVertical: 2,
  },
  primaryText: {
    fontFamily: 'avenir',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    color: colors.blueText,
  },
  secondaryText: {
    fontFamily: 'avenir',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.11,
    color: colors.gray,
  }
});

export default styles;