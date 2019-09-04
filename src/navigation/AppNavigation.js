import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../screens/Login';
import ProfileScreen from '../screens/Profile';
import AuthLoadingScreen from '../screens/AuthLoading';
import DetailScreen from '../screens/Detail';

const AppStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      path: 'profile',
    },
    Detail: {
      screen: DetailScreen,
      path: 'detail',
    },
  },
  {
    initialRouteName: 'Profile',
    defaultNavigationOptions: {
      headerTitleStyle: {
        width: '100%',
      },
    },
  }
);

const AuthStack = createStackNavigator(
  {
  Login: {
    screen: LoginScreen,
    path: 'login',
  },
});

const AuthSwitch = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
      AuthLoading: AuthLoadingScreen,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

export default AuthSwitch;
