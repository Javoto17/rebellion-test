import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';



import Button from '../Button';

import styles from './styles';

const Login = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <IconFeather name="github" size={64} style={styles.iconGithub} />
        <Text style={styles.title}>
          Rebellion Test
        </Text>
        <Text style={styles.subTitle}>
          Access your account Github and discover more
        </Text>
      </View>
      <View style={styles.containerButton}>
        <Button value="Login with Github" onPress={onPress} />
      </View>
    </View>
  )
}

Login.propTypes = {
  onPress: PropTypes.func,
}

Login.defaultProps = {
  onPress: PropTypes.func,
}


export default Login

