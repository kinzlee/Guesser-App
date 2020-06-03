import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Card from '../components/Card';
import NumberOutput from '../components/NumberOutput';
import defaultStyle from '../constants/DefaultText';
import MainButton from '../components/MainButton';

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

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const [rounds, setRounds] = useState(0);

    const { userChoice, onGameOver} = props;

    useEffect(() => {
        if(currentGuess == userChoice) {
            onGameOver(rounds);
        };
    }, [currentGuess, userChoice, onGameOver]);


const nextGuessHandler = (direction) => {
    if((direction === 'lower' && currentGuess < props.userChoice) ||
     (direction === 'greater' &&  currentGuess > props.userChoice)) {
        Alert.alert('Please Don\'t Cheat', 'Quit trying to scam tunik\s tech',
         [{text: 'Sorry!', style: 'cancel'}])
         return;
    }
    if(direction === 'lower') {
        currentHigh.current = currentGuess;
    }else {
        currentLow.current = currentGuess;
    }
    const nextNumber = randomNumberGenerator(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(curRounds => curRounds + 1);
};


    return (
        <View style={styles.screen}>
            <Text style={defaultStyle.title}>Opponents Guess</Text>
            <NumberOutput>{currentGuess}</NumberOutput>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')} >LOWER</MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>GREATER</MainButton>                
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
        width: 400,
        maxWidth: '90%'
    }
});

export default GameScreen
