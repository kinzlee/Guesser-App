import React, {useState} from 'react';
import {View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions} 
from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input  from '../components/Input';
import NumberOutput from '../components/NumberOutput';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [conFirmedState, setConfirmedState] =  useState(false);
    const [enteredNumber, setEnteredNumber] = useState();

    const numericInputHandler = (input) => {
        setEnteredValue(input.replace(/[^0-9]/g, ''));
    }

    const btnResetHandler = () => {
        setEnteredValue('');
        setConfirmedState(false);
    }

    const btnConfirmHandler = () => {
        const SelectedNumber = parseInt(enteredValue);
        if(isNaN(SelectedNumber) || SelectedNumber <= 0 || SelectedNumber > 99) {
            Alert.alert('Invalid Input!', 'Number should be in a range from 1 to 99.',
            [{text: 'Okay', style: 'destructive', onPress: btnResetHandler}])
            return;
        }
        setConfirmedState(true);
        setEnteredNumber(SelectedNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let outputNumber;

    if(conFirmedState) {
        outputNumber = 
        <Card style={styles.outputContainer}>
        <Text>Selected Number</Text>
        <NumberOutput>{enteredNumber}</NumberOutput>
        <MainButton onPress={() => props.onStartGame(enteredNumber)}>START GAME</MainButton>
        </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.gameScreen}>
            <TitleText style={styles.title}>Start a New Game</TitleText>
            <Card style={styles.inputContainer}>
                <BodyText>Select a Number</BodyText>
                <Input 
                style={styles.input}
                blurOnSubmint
                autoCaptalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                value={enteredValue}
                onChangeText={numericInputHandler}
                />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                        <Button title="RESET" onPress={btnResetHandler} color={Colors.primary} />
                        </View>
                        <View style={styles.button}>
                        <Button title="CONFIRM" onPress={btnConfirmHandler} color={Colors.secondary} />
                        </View>
                    </View>
            </Card>
            {outputNumber}
        </View>
        </TouchableWithoutFeedback>

    );
};

const styles = StyleSheet.create({
    gameScreen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'Open-Sans-Bold'
    },
    inputContainer: {
        width: '80%',
        minWidth: 300,
        maxWidth: '94%',
        // maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    button: {
        width: Dimensions.get('window').width/4
    },
    input: {
        textAlign: 'center',
        width: 55
    },
    outputNum: {
        textAlign: 'center',
        color: Colors.secondary,
        fontSize: 20
    },
    outputContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Open-Sans'
    }
});

export default StartGameScreen;