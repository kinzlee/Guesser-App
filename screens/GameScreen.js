import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Card from '../components/Card';
import NumberOutput from '../components/NumberOutput';

const randomNumberGenerator = (min, max, except) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor(Math.random() *(max - min)) + min
    if(randNum === except) {
        return randomNumberGenerator(min, max, except);
    }else {
        return randNum;
    }
}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(
        
        
        randomNumberGenerator(1, 100, props.userChoice));
    return (
        <View style={styles.screen}>
            <Text>Opponents Guess</Text>
            <NumberOutput>{currentGuess}</NumberOutput>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" />
                <Button title="GREATER" />                
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        width: 320,
        maxWidth: '80%'
    }
});

export default GameScreen
