import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton'

const GameOverScreen = ({roundsDone, selectedNumber, onResartGame}) => {
    return (
        <ScrollView>
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: (Dimensions.get('window').width * 0.7) /2,
        borderWidth: 3,
        borderColor:'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 20,
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 30
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },
    highlight: {
        color: Colors.primary,
    }
});

export default GameOverScreen;