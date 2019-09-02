import React from 'react'
import PropTypes from 'prop-types';
import { Text, TouchableNativeFeedback, View } from 'react-native';

import styles from './styles';

const Button = ({ value, onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.label}>
          {value}
        </Text>
      </View>
    </TouchableNativeFeedback>
  )
}

Button.propTypes = {
  onPress: PropTypes.func,
  value: PropTypes.string,
}

Button.defaultProps = {
  onPress: () => { },
  value: '',
}

export default Button
