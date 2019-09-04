/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import ButtonRepo from '../ButtonRepo';

import styles from './styles';

const DetailRepo = ({ repo, setStar, setWatcher }) => {
  const { watchers_count, stargazers_count } = repo;

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'space-around', flexDirection: 'row', paddingVertical: 4 }}>
        <View style={{ flex: 0.40 }}>
          <ButtonRepo onPress={() => setStar(repo.isStar)}>
            <MaterialIcon name="star" size={24} color={repo.isStar ? 'gold' : '#0047cc'} />
            <Text style={styles.textButton}>Stars</Text>
            {!!stargazers_count && <Text style={styles.textCount}>{stargazers_count}</Text>}
          </ButtonRepo>
        </View>
        <View style={{ flex: 0.40 }}>
          <ButtonRepo onPress={() => setWatcher(repo.isWatcher)}>
            <MaterialIcon name="remove-red-eye" size={24} color={repo.isWatcher ? 'gold' : '#0047cc'} />
            <Text style={styles.textButton}>Watch</Text>
            {!!watchers_count && <Text style={styles.textCount}>{watchers_count}</Text>}
          </ButtonRepo>
        </View>
      </View>
    </View>
  )
}

DetailRepo.propTypes = {
  repo: PropTypes.shape({
    watchers_count: PropTypes.number,
    stargazers_count: PropTypes.number,
    isStar: PropTypes.bool,
    isWatcher: PropTypes.bool,
  }),
  setStar: PropTypes.func.isRequired,
  setWatcher: PropTypes.func.isRequired,
}

DetailRepo.defaultProps = {
  repo: null,
}

export default DetailRepo
