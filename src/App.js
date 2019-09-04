
import React from 'react';
import { StatusBar } from 'react-native';

import AppNavigation from './navigation/AppNavigation';

import { Provider, Consumer } from './context/AuthContext';
import { RepoContextProvider, RepoContextConsumer } from './context/RepoContext';
import colors from './utils/colors';

const PREFIX_URI = 'com.rebelliontest://';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.mainBlue} barStyle="light-content" />
      <Provider>
        <Consumer>
          {() => (
            <RepoContextProvider>
              <RepoContextConsumer>
                {() => <AppNavigation uriPrefix={PREFIX_URI} />}
              </RepoContextConsumer>
            </RepoContextProvider>
          )}
        </Consumer>
      </Provider>
    </>
  );
};

export default App;
