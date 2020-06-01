import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import Card from '../components/Card';
import NumberOutput from '../components/NumberOutput';

const randomNumberGenerator = (min, max, except) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor(Math.random() * (max - min)) + min;
    if(randNum === except) {
        return randomNumberGenerator(min, max, except);
    }else {
        return randNum;
    }
}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState( 
        randomNumberGenerator(1, 100, props.userChoice));
    const currentHigh = useRef(100);
    const currentLow = useRef(1);

    const [rounds, setRounds] = useState(0);

    const { userChoice, onGameOver} = props;

    useEffect(() => {
        if(currentGuess == userChoice) {
            onGameOver(rounds);
        };
    }, [currentGuess, userChoice, onGameOver]);


const nextGuessHandler = (direction) => {
    if((direction === 'Lesser' && currentGuess < props.userChoice) ||
     (direction === 'Greater' &&  currentGuess > props.userChoice)) {
        Alert.alert('Please Don\'t Cheat', 'Quit trying to scam tunik\s tech',
         [{text: 'Sorry!', style: 'cancel'}])
         return;
    }
    if(direction === 'Lesser') {
        currentLow.current = currentGuess;
    }else {
        currentHigh.current = currentGuess;
    }
    const nextNumber = randomNumberGenerator(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(curRounds => curRounds + 1);
};


    return (
        <View style={styles.screen}>
            <Text>Opponents Guess</Text>
            <NumberOutput>{currentGuess}</NumberOutput>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'Lesser')} />
                <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'Greater')}/>                
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
        marginTop: 20,
        width: 310,
        maxWidth: '80%'
    }
});

export default GameScreen
