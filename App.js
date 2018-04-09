import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, FlatList } from 'react-native';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={styles.searchInput}>
        <Text>{this.state.text}</Text>
        <TextInput 
          style={{height: 40}}
          placeholder='Type something in me...'
          onChangeText={(text) => this.setState({text})}
        />
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
        />
      </View>
    )
  }
}

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  
  componentDidMount() {
    return fetch('https://pixabay.com/api/?key=8622479-43a84036a79d6b86f0d2526cd&q=yellow+flowers&image_type=photo&pretty=true')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.hits);
        this.setState({
          isLoading: false,
          dataSource: responseJson.hits
        }, function() {
          
        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.searchResults}>
        <FlatList 
          data={this.state.dataSource}
          renderItem={ ({item}) => <Image source={{uri:item.largeImageURL}} style={styles.item}/> }
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.parentContainer}>
        <SearchInput  />
        <SearchResults  />
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
