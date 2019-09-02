import React from 'react'
import PropTypes from 'prop-types'

import { Image, View } from 'react-native';

import styles from './styles';


const ImageProfile = ({ url }) => {
  return (
    <View style={styles.wrapperImg}>
      <Image source={{ uri: url }} style={styles.image} />
    </View>
  )
}

ImageProfile.propTypes = {
  url: PropTypes.string,
}

ImageProfile.defaultProps = {
  url: null,
}


export default ImageProfile
