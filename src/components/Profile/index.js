import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { View, } from 'react-native';
import { Context } from '../../Context';

import CardProfile from '../CardProfile';
import ListOfRepos from '../ListOfRepos';
import Toast from '../Toast';

import styles from './styles';

const Profile = () => {
  const { isAuth } = useContext(Context);

  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState(null)

  useEffect(() => {
    if (isAuth) {
      axios.defaults.headers.common.Authorization = `Bearer ${isAuth}`;
    }
  }, [isAuth]);

  const getInfoUser = async () => {
    try {
      const res = await axios.get("https://api.github.com/user");
      if (res && res.data) {
        setUser(res.data);
      }
    } catch (error) {
      setUser(null);
      // console.log(error)
    }
  }

  const getReposUser = async () => {
    try {
      const res = await axios.get("https://api.github.com/user/repos");
      if (res && res.data) {
        setRepos(res.data);
      }
    } catch (error) {
      setRepos([]);
      // console.log(error)
    }
  }

  useEffect(() => {
    if (isAuth) {
      getInfoUser();
      Toast.show('Authenticated', 100);
    }
  }, [isAuth]);

  useEffect(() => {
    if (user && isAuth) {
      getReposUser();
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.borderTop} />
      <View style={styles.wrapper}>
        <CardProfile user={user} />
        <ListOfRepos data={repos} />
      </View>
    </View>
  )
}

Profile.propTypes = {
}

Profile.defaultProps = {
}

export default Profile
