import React from 'react';
import { SafeAreaView } from 'react-navigation';
import IconFeather from 'react-native-vector-icons/Feather';

import DetailRepo from '../container/DetailRepoContainer';

import colors from '../utils/colors';

const Detail = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DetailRepo />
    </SafeAreaView>
  );
};

Detail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('name'),
  headerRight: navigation.getParam('private') ? <IconFeather size={18} color={colors.mainBlue} name="lock" style={{ width: 40 }} /> : null,
  headerStyle: {
    elevation: 0,
    flexDirection: 'row',
    backgroundColor: colors.background,
  },
  headerTitleStyle: {
    fontFamily: 'avenir',
    color: colors.mainBlue,
    fontWeight: 'bold',
  },
});

export default Detail;
