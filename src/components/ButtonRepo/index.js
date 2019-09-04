import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableNativeFeedback, Text } from 'react-native';

import styles from './styles';

const ButtonRepo = ({ onPress, children }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.wrapper}>
        {children}
      </View>
    </TouchableNativeFeedback>
  )
}

ButtonRepo.propTypes = {
  value: PropTypes.string,
  onPress: PropTypes.func,
}

ButtonRepo.defaultProps = {
  value: '',
  onPress: () => { },
}

export default ButtonRepo
