import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigation } from 'react-navigation-hooks';
import { Context } from '../context/AuthContext';
import { RepoContext } from '../context/RepoContext';

import Profile from '../components/Profile';
import Toast from '../components/Toast';

import { URL_API } from '../utils/api';

const UserProfile = () => {
  const { isAuth } = useContext(Context);
  const { setRepos, repos, setReposWatch, setReposStar, setRepo } = useContext(RepoContext);
  const { navigate } = useNavigation();

  const [user, setUser] = useState(null)
  // const [repos, setRepos] = useState(null)

  useEffect(() => {
    if (isAuth) {
      axios.defaults.headers.common.Authorization = `Bearer ${isAuth}`;
    }
  }, [isAuth]);

  const getInfoUser = async () => {
    try {
      const res = await axios.get(`${URL_API}user`);
      if (res && res.data) {
        setUser(res.data);
      }
    } catch (error) {
      setUser(null);
      // console.log(error)
    }
  }

  const getReposUserStar = async () => {
    try {
      const res = await axios.get(`${URL_API}user/starred`);
      if (res && res.data) {
        setReposStar(res.data);
      }
    } catch (error) {
      setReposStar([]);
      // console.log(error)
    }
  }
  const getReposUserWatch = async () => {
    try {
      const res = await axios.get(`${URL_API}user/subscriptions`);
      if (res && res.data) {
        setReposWatch(res.data);
      }
    } catch (error) {
      setReposWatch([]);
      // console.log(error)
    }
  }

  const getReposUser = async () => {
    try {
      const res = await axios.get(`${URL_API}user/repos`);
      if (res && res.data) {
        setRepos(res.data);
        getReposUserStar();
        getReposUserWatch();
      }
    } catch (error) {
      setRepos([]);
      // console.log(error)
    }
  }

  const goToDetail = (repo) => {
    setRepo(repo);
    navigate('Detail', { name: repo.full_name, private: repo.private });
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
    <Profile user={user} repos={repos} onPressItem={goToDetail} />
  )
}

UserProfile.propTypes = {
}

UserProfile.defaultProps = {
}

export default UserProfile
