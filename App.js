import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Dice } from './components/Dice'

export default function App() {
  const randomFace = () => 1 + Math.round(Math.random() * 5); // random number in [1-6]
  const [face, setFace] = useState(randomFace()); // start with a random face
  const rollDice = () => setFace(randomFace());  // roll to a random face

  return (
    <View style={styles.container}>

      <TouchableWithoutFeedback onPress={() => rollDice()}>
        <Dice face={face} />
      </TouchableWithoutFeedback>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});