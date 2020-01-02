import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import FriendComponentRow from '../custom_components/FriendComponentRow';
import FriendListData from '../config/FriendsList';

export default class FriendsList extends React.Component {

  static navigationOptions = {
    title: 'Friends',
  };
  render() {
    return (
    <FlatList
      data={FriendListData}
      renderItem={({ item }) => 
      {
        return(<FriendComponentRow data={item}/>)
      }
    }
      keyExtractor={item => item.id}
      numColumns={1}
    />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 44
  },
  item: {
    padding: 10,
    marginHorizontal: 5,
    fontSize: 24,
    textAlign:'center'
  },
  listItem: {
    margin: 5,
    borderColor:'grey',
    borderWidth: 1
  }
});
