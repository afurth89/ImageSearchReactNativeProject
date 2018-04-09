import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, FlatList } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dataReceived: false
    };
  }
  getImages(searchInput) {
    console.log("\n\n @@@ SEARCHING", searchInput);
    let queryString = searchInput.replace(/ /g, '+');
    let requestUri = `https://pixabay.com/api/?key=8622479-43a84036a79d6b86f0d2526cd&q=${queryString}&image_type=photo&pretty=true`
    console.log("\n\n @@@ URI", requestUri)
    let response = fetch(requestUri)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataReceived: false,
          dataSource: responseJson.hits
        }, function(){
          console.log("\n\n *** RESULTS", responseJson.hits);
        });
      })
      .catch((error) => {
        console.error(error)
      });
  }

  render() {
    return (
      <View style={styles.parentContainer}>
        <View style={styles.searchInput}>
          <Text style={{height: 40}} >{this.state.text}</Text>
          <TextInput 
            style={{height: 40}}
            placeholder='Type something in me...'
            onChangeText={(text) => this.setState({text})}
          />
          <Button
            onPress={() => this.getImages(this.state.text) }
            title="Press Me"
          />
        </View>
        <View style={styles.searchResults}>
          <FlatList 
            data={this.state.dataSource}
            renderItem={ ({item}) => <Image source={{uri:item.largeImageURL}} style={styles.item}/> }
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'red',
  },
  searchInput: {
    flex: 1, 
    backgroundColor: 'yellow'
  },
  searchResults: {
    flex: 3, 
    backgroundColor: 'green'
  },
  item: {
    padding: 10,
    width: 193, 
    height: 110
  }
});

