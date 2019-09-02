import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { authorize } from 'react-native-app-auth'
import IconFeather from 'react-native-vector-icons/Feather';

import { Context } from '../../Context';

import { CLIENT_ID, CLIENT_SECRET } from '../../utils/api';

import Button from '../Button';

import styles from './styles';

const config = {
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUrl: 'com.rebelliontest://',
  serviceConfiguration: {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: `https://github.com/login/oauth/access_token`,
  },
}


const LoginForm = () => {
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
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <IconFeather name="github" size={64} style={styles.iconGithub} />
        <Text style={styles.title}>
          Rebellion Test
        </Text>
        <Text style={styles.subTitle}>
          Access your account Github and discover more
        </Text>
      </View>
      <View style={styles.containerButton}>
        <Button value="Login with Github" onPress={onPress} />
      </View>
    </View>

  )
}

LoginForm.propTypes = {

}


export default LoginForm

