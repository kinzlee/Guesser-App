import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView, Dimensions} from 'react-native';
import Card from '../components/Card';
import NumberOutput from '../components/NumberOutput';
import defaultStyle from '../constants/DefaultText';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';
import {Ionicons} from '@expo/vector-icons';

const randomNumberGenerator = (min, max, except) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor(Math.random() * (max - min)) + min;
    if(randNum === except) {
        return randomNumberGenerator(min, max, except);
    }else {
        return randNum;
    }
};

const renderListItem = (value, numbOfRound) =>  (
    <View key={value} style={styles.listItem}>
        <BodyText>#{numbOfRound} </BodyText>
        <BodyText> computer guessed {value}</BodyText>
        </View>
             );

const GameScreen = (props) => {
    const initialGuess = randomNumberGenerator(1, 100, props.userChoice)
    const [currentGuess, setCurrentGuess] = useState( initialGuess);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const [pastGuess, setPastGuess] = useState([initialGuess]);
    const  [availableDeviceWidth, setAvailableDeviceWidth] = useState(
        Dimensions.get('window').width
    );
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
        Dimensions.get('window').height
    );

    const { userChoice, onGameOver} = props;

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        };
        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    });

    useEffect(() => {
        if(currentGuess == userChoice) {
            onGameOver(pastGuess.length);
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
        currentLow.current = currentGuess + 1;
    }
    const nextNumber = randomNumberGenerator(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    // setRounds(curRounds => curRounds + 1);
    setPastGuess(currPastGuess => [nextNumber, ...currPastGuess]);
};

let listContainerStyle = styles.listContainer;

if(availableDeviceWidth < 350 ) {
    listContainerStyle = styles.listContainerBig;
}

if(availableDeviceWidth < 400) {
    return (
        <View style={styles.screen}>
            <Text style={defaultStyle.title}>Opponents Guess</Text>
            <NumberOutput>{currentGuess}</NumberOutput>
            <View style={styles.control}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')} >
                    <Ionicons name="md-remove" size={24} color="white" /> 
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name="md-add" size={24} color="white"/>
                </MainButton>                
                </View>
            <View style={listContainerStyle}>
            <ScrollView contentContainerStyle={styles.list}>
                {pastGuess.map((guess, index) => renderListItem(guess, pastGuess.length - index))}
            </ScrollView>
            </View>
        </View>
    );
}

    return (
        <View style={styles.screen}>
            <Text style={defaultStyle.title}>Opponents Guess</Text>
            <NumberOutput>{currentGuess}</NumberOutput>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')} >
                    <Ionicons name="md-remove" size={24} color="white" /> 
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name="md-add" size={24} color="white"/>
                </MainButton>                
            </Card>
            <View style={styles.listContainer}>
            <ScrollView contentContainerStyle={styles.list}>
                {pastGuess.map((guess, index) => renderListItem(guess, pastGuess.length - index))}
            </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        paddingVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
        width: 400,
        maxWidth: '90%'
    },
    listItem: {
        borderColor: '#ccc',
        marginVertical: 10,
        backgroundColor: 'white',
        padding: 15,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '75%'
    },
    listContainer: {
        width: Dimensions.get('window').width > 350 ? '70%' : '80%',
        flex: 1,
    },
    control: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        alignItems: 'center'
    },
    listContainerBig: {
        flex: 1,
        width: '80%'
    },
    list: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'  
    }
});

export default GameScreen
