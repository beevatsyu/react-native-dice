import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';

const diceImage = [
  "https://upload.wikimedia.org/wikipedia/commons/c/c5/Dice-1.png",
  "https://upload.wikimedia.org/wikipedia/commons/1/18/Dice-2.png",
  "https://upload.wikimedia.org/wikipedia/commons/7/70/Dice-3.png",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Dice-4.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/6c/Dice-5.png",
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Dice-6E.png"
]

class Dice extends Component {
  constructor() {
    super();
    this.state = { face: Math.round(Math.random() * 5) };
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => {
        // alert("I'm touched!");
        this.setState({ face: Math.round(Math.random() * 5) }); // random number [0-5]
      }}>
        <Image
          source={{ uri: diceImage[this.state.face] }}
          style={{ width: 200, height: 200 }} />
      </TouchableWithoutFeedback>
    );
  }
}

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <Dice />
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
