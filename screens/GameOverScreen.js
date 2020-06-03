import React from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = ({roundsDone, selectedNumber, onResartGame}) => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/success.png')} resizeMode="contain"/>
            </View>
            <BodyText>Number of rounds: {roundsDone}</BodyText>
            <BodyText>Selected Number: {selectedNumber}</BodyText>
            <Button title="New Game" onPress={onResartGame}/>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3.5,
        borderColor:'blue',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default GameOverScreen;