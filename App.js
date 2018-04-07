import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class LandingPageTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let titleText = this.props.title;
    return (
      <Text>{titleText}</Text>
    )
  }
}

class LandingPageImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pic = {
      uri: this.props.uri
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}} />
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LandingPageTitle title='I AM THE TITLE'/>
        <LandingPageImage uri='https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
