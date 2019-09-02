import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native';

import colors from "../../utils/colors";

const Spinner = ({ color, size }) => {
  return (
    <ActivityIndicator size={size} color={color} />
  )
}

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

Spinner.defaultProps = {
  color: colors.mainBlue,
  size: 'large',
}

export default Spinner
