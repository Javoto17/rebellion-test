
import React, { } from 'react';

import { StatusBar } from 'react-native';

import AppNavigation from './navigation/AppNavigation';

import ContextApp from './Context'
import colors from './utils/colors';

const prefix = 'com.rebelliontest://';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.mainBlue} barStyle="light-content" />
      <ContextApp.Provider>
        <ContextApp.Consumer>
          {() => <AppNavigation uriPrefix={prefix} />}
        </ContextApp.Consumer>
      </ContextApp.Provider>
    </>
  );
};

export default App;
