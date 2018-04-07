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
  }
  render() {
    return (
      <View style={styles.searchResults}>
        <FlatList 
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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
    fontSize: 36,
    height: 44,
  }
});
