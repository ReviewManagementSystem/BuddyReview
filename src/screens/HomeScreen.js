import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, FlatList, Image } from 'react-native';

import DATA from '../config/MovieCategoryList'

const dimensions = Dimensions.get('window');

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };
  render() {
    
    return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => 
      {
        return(
          <View style = {styles.listItem}>
          <Image style={{width: dimensions.width/2 - 12, height: 150}} 
            source={{uri: item.image}}/>
          <Text style={styles.item}>{item.title}</Text>
          </View>
        )
      }
    }
      keyExtractor={item => item.id}
      numColumns={2}
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
