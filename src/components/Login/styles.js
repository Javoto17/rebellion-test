import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: 8,
  },
  containerIcon: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.mainBlue,
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'avenir',
  },
  subTitle: {
    color: colors.gray,
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'avenir',
  },
  containerButton: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8
  },
  iconGithub: {
    color: colors.mainBlue,
  },
});

export default styles;