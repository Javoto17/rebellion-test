/* eslint-disable camelcase */
import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import { RepoContext } from '../context/RepoContext';

import { URL_API } from '../utils/api';

import Detail from '../components/DetailRepo';

const DetailRepo = () => {
  const { incrementStar, decrementStar, incrementWatcher, decrementWatcher, repo } = useContext(RepoContext);
  const { owner: { login }, name } = repo;

  const setStar = async (starred) => {
    if (!starred) {
      await axios.put(`${URL_API}user/starred/${login}/${name}`)
      incrementStar(repo.id)
    } else {
      await axios.delete(`${URL_API}user/starred/${login}/${name}`)
      decrementStar(repo.id)
    }
  }

  const setWatcher = async (watcher) => {
    if (!watcher) {
      await axios.put(`${URL_API}repos/${login}/${name}/subscription`)
      incrementWatcher(repo.id)
    } else {
      await axios.delete(`${URL_API}repos/${login}/${name}/subscription`)
      decrementWatcher(repo.id)
    }
  }

  return (
    <Detail repo={repo} setStar={setStar} setWatcher={setWatcher} />
  );
}

DetailRepo.propTypes = {
  repo: PropTypes.shape({
    watchers_count: PropTypes.number,
  }),
}

DetailRepo.defaultProps = {
  repo: null,
}

export default DetailRepo
