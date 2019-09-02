import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native';

import ImageProfile from '../ImageProfile';

import styles from './styles';

const CardProfile = ({ user }) => {
  if (user) {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <ImageProfile url={user.avatar_url} />
          <View style={styles.wrapperInfo}>
            <Text style={[styles.paragraph, styles.primaryText]}>
              {user.name}
            </Text>
            <Text style={[styles.paragraph, styles.secondaryText]}>
              {user.email}
            </Text>
          </View>
        </View>
      </View>
    )
  }

  return null;
}

CardProfile.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
}

CardProfile.defaultProps = {
  user: {
    avatar_url: '',
    name: '',
    email: ''
  },
}

export default CardProfile
