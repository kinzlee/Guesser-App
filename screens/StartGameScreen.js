import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input  from '../components/Input';

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('');

    const numericInputHandler = (input) => {
        setEnteredValue(input.replace(/[^0-9]/g, ''));
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.gameScreen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
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
                        <Button title="RESET" onPress={() => {console.log('this works')}} color={Colors.primary} />
                        </View>
                        <View style={styles.button}>
                        <Button title="CONFIRM" onPress={() => {console.log('this also works')}} color={Colors.secondary} />
                        </View>
                    </View>
            </Card>
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
        marginVertical: 10
    },
    inputContainer: {
        width: 320,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    button: {
        width: 90
    },
    input: {
        textAlign: 'center',
        width: 55
    }
});

export default StartGameScreen;