import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class LandingPageTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let titleText = this.props.title;
    return (
      <View style={{height: 50}}>
        <Text>{titleText}</Text>
      </View>
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
      <View style={{height: 300}}>
        <Image source={pic} style={{width: 200, height: 300}} />
      </View>
    )
  }
}
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LandingPageTitle title='I AM THE TITLE'/>
        <LandingPageImage uri='https://picsum.photos/200/300/?random' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
