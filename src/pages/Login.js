import React from 'react';
import { SafeAreaView } from 'react-navigation';

import Login from '../components/Login';

const LoginView = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Login />
  </SafeAreaView>
);

LoginView.navigationOptions = {
  title: '',
  headerStyle: {
    elevation: 0,
    flex: 1,
  }
};
export default LoginView;
