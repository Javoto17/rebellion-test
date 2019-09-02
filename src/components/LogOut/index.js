import React, { useContext } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import IconFeather from 'react-native-vector-icons/Feather';

import { Context } from '../../Context';

const LogOut = () => {
  const { removeAuth } = useContext(Context);
  const { navigate } = useNavigation();

  const onPress = () => {
    removeAuth(null);
    navigate('Auth');
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ alignItems: 'center', width: 50 }}>
        <IconFeather color="#fff" name="log-out" size={18} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default LogOut
