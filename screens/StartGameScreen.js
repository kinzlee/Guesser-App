import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';

const StartGameScreen = ({}) => {
    return (
        <View style={styles.gameScreen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                    <View style={styles.buttonContainer}>
                        <View>
                        <Button title="RESET" onPress={() => {console.log('this works')}} color={Colors.primary} />
                        </View>
                        <View>
                        <Button title="CONFIRM" onPress={() => {console.log('this also works')}} color={Colors.secondary} />
                        </View>
                    </View>
            </Card>
        </View>

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
    }
});

export default StartGameScreen;