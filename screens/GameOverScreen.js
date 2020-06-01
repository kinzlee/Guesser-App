import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const GameOverScreen = ({roundsDone, selectedNumber, onResartGame}) => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over</Text>
            <Text>Number of rounds: {roundsDone}</Text>
            <Text>Selected Number: {selectedNumber}</Text>
            <Button title="New Game" onPress={onResartGame}/>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default GameOverScreen;