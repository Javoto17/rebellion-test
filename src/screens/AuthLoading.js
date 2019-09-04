import { useContext, useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';

import { Context } from '../context/AuthContext';

const AuthLoading = () => {
  const { activateAuth, getToken } = useContext(Context);
  const { navigate } = useNavigation();

  useEffect(() => {
    getToken().then((token) => {
      if (token) {
        activateAuth(token);
        navigate('App');
      } else {
        navigate('Auth');
      }
    })
  }, []);

  return null;
};

AuthLoading.navigationOptions = {
  title: '',
  headerStyle: {
    elevation: 0,
    flex: 1,
  }
};
export default AuthLoading;
