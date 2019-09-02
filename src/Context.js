import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

export const Context = createContext();

const KEYNAME = '@RebellionTest:';

// eslint-disable-next-line react/prop-types
const ProviderContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const getToken = async () => {
    try {
      return await AsyncStorage.getItem(`${KEYNAME}token`);
    } catch (error) {
      return null;
    }
  }

  const value = {
    isAuth,
    activateAuth: async (authToken) => {
      setIsAuth(authToken);
      await AsyncStorage.setItem(`${KEYNAME}token`, authToken);
    },
    removeAuth: async () => {
      setIsAuth(null);
      await AsyncStorage.setItem(`${KEYNAME}token`, null);
    },
    getToken,
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default {
  Provider: ProviderContext,
  Consumer: Context.Consumer,
};
