import React from 'react'
import PropTypes from 'prop-types';
import { View, } from 'react-native';

import CardProfile from '../CardProfile';
import ListOfRepos from '../ListOfRepos';

import styles from './styles';

const Profile = ({ onPressItem, user, repos }) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderTop} />
      <View style={styles.wrapper}>
        <View style={styles.wrapperCard}>
          <CardProfile user={user} />
        </View>
        <ListOfRepos data={repos} onPressItem={onPressItem} />
      </View>
    </View>
  )
}

Profile.propTypes = {
  onPressItem: PropTypes.func,
  user: PropTypes.shape({}),
  repos: PropTypes.arrayOf(PropTypes.shape({
  })),
}

Profile.defaultProps = {
  onPressItem: () => { },
  user: null,
  repos: null,
}

export default Profile
