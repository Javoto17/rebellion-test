import React from 'react'
import PropTypes from 'prop-types'

import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const ItemRepo = ({ item }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.containerInfo}>
        <Icon name={item.fork ? 'fork' : 'book'} size={18} />
      </View>
      <View style={styles.containerText}>
        <Text style={[styles.paragraph, styles.textPrimary]}>
          {item.name}
        </Text>
        <Text style={[styles.paragraph, styles.textSecondary]}>
          {item.full_name}
        </Text>
      </View>
      {/* <View style={styles.containerActions}>
        <Icon name="star" size={18} />
      </View> */}
    </View>
  )
}

ItemRepo.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    full_name: PropTypes.string,
    fork: PropTypes.bool,
  }),
}

ItemRepo.defaultProps = {
  item: {}
}

export default ItemRepo
