import React from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton'

const GameOverScreen = ({roundsDone, selectedNumber, onResartGame}) => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/success.png')} resizeMode="cover"/>
            </View>
            <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>Tuniks computer went <Text style={styles.highlight}>{roundsDone}</Text> rounds to guess 
            <Text style={styles.highlight}> {selectedNumber}</Text></BodyText>
            </View>
            <MainButton onPress={onResartGame}>New Game</MainButton>

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
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 3,
        borderColor:'black',
        overflow: 'hidden',
        marginVertical: 30,
        justifyContent: 'center'
    },
    image: {
        width: '120%',
        height: '100%',
        alignItems: 'center'
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    highlight: {
        color: Colors.primary,
    }
});

export default GameOverScreen;