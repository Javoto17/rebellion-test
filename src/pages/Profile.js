import React from 'react';
import { SafeAreaView } from 'react-navigation';

import InfoUser from '../components/Profile';
import LogOut from '../components/LogOut';

import colors from '../utils/colors';

const Profile = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <InfoUser />
    </SafeAreaView>
  );
}

Profile.navigationOptions = {
  title: 'Profile',
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.mainBlue,
  },
  headerRight: <LogOut />,
  headerTitleStyle: {
    color: colors.white,
    fontFamily: 'avenir',
    fontWeight: '900',
  },
};

export default Profile;
