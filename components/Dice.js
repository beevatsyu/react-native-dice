import React from 'react';
import { Image, View } from 'react-native';

const diceImage = [
    "https://upload.wikimedia.org/wikipedia/commons/c/c5/Dice-1.png",
    "https://upload.wikimedia.org/wikipedia/commons/1/18/Dice-2.png",
    "https://upload.wikimedia.org/wikipedia/commons/7/70/Dice-3.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Dice-4.png",
    "https://upload.wikimedia.org/wikipedia/commons/6/6c/Dice-5.png",
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/Dice-6E.png"
]

export function Dice(props) {
    return (
        <View {...props}>
            <Image
                source={{ uri: diceImage[props.face - 1] }}
                style={{ width: 200, height: 200 }} />
        </View>
    );
}
