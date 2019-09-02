import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../pages/Login';
import ProfileScreen from '../pages/Profile';
import AuthLoadingScreen from '../pages/AuthLoading';

const AppStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      path: 'profile',
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        width: '100%',
      },
    },
  }
);

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    path: 'login',
  },

});

const AuthSwitch = createAppContainer(
  createSwitchNavigator(
    {
      App: {
        screen: AppStack,
        path: '',
      },
      Auth: { screen: AuthStack, path: 'auth' },
      AuthLoading: { screen: AuthLoadingScreen },
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

export default AuthSwitch;
