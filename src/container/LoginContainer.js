import React, { useContext } from 'react'
import { useNavigation } from 'react-navigation-hooks';
import { authorize } from 'react-native-app-auth'

import { Context } from '../context/AuthContext';

import { CLIENT_ID, CLIENT_SECRET } from "../utils/api";

import Login from '../components/Login';

const config = {
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUrl: 'com.rebelliontest://',
  serviceConfiguration: {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: `https://github.com/login/oauth/access_token`,
  },
  scopes: ['repo'],
}


const LoginContainer = () => {
  const { activateAuth } = useContext(Context);
  const { navigate } = useNavigation();

  const onPress = async () => {
    try {
      const authState = await authorize(config)
      if (authState) {
        activateAuth(authState.accessToken)
        navigate('App');
      }
    } catch (error) {
      // console.log('error', error)
    }
  }

  return (
    <Login onPress={onPress} />
  );
}

LoginContainer.propTypes = {

}


export default LoginContainer

