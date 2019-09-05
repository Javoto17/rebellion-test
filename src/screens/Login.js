import React from 'react';
import { SafeAreaView } from 'react-navigation';

import LoginContainer from '../container/LoginContainer';
import colors from '../utils/colors';

const LoginView = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <LoginContainer />
  </SafeAreaView>
);

LoginView.navigationOptions = {
  title: '',
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.background,
  }
};
export default LoginView;
