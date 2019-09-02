import React from 'react'
import PropTypes from 'prop-types'

import { FlatList, View, Text } from 'react-native';

import ItemRepo from '../ItemRepo';
import Spinner from '../Spinner';

import styles from './styles';

const ListOfRepos = ({
  data,
}) => {

  const renderItem = ({ item }) => {
    return <ItemRepo item={item} />
  }

  return (
    data && Array.isArray(data) ? (
      <FlatList
        style={{ paddingHorizontal: 10, marginTop: 18 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => `list-item-${item.id}`}
        ListEmptyComponent={() => (
          <View style={styles.containerFill}>
            <Text style={styles.fillEmptyList}>
              {`You haven't created event repository yet`}
            </Text>
          </View>
        )}
      />
    ) : (
      <View style={styles.containerFill}>
        <Spinner />
      </View>
      )
  )
}

ListOfRepos.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }),
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  })),
}

ListOfRepos.defaultProps = {
  item: {},
  data: null,
}

export default ListOfRepos
