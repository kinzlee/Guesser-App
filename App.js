import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  Font.loadAsync({
    'Open-Sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'Open-Sans-bold': require('./assets/fonts/OpenSans-Regular.ttf')
  })
}


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded) {
    return (
      <AppLoading 
      startAsync={fetchFonts}
      onFinish={() => {setDataLoaded(true)}}
      onError={() => {console.log(err)}}
      />
    );
  }

  const onStartNewGameHandler = () => {
    setGuessRound(0);
    setUserNumber(null);
  };

const gameScreenHandler = (selectedNumber) => {
  setUserNumber(selectedNumber)
  setGuessRound(0);
};

const gameOverHandler = (numbOfRound) => {
  setGuessRound(numbOfRound);
}

let content = <StartGameScreen onStartGame={gameScreenHandler}/>

if (userNumber && guessRound <= 0) {
  content = <GameScreen userChoice={userNumber}  onGameOver={gameOverHandler}/>
} else if(guessRound > 0) {
  content = <GameOverScreen roundsDone={guessRound} selectedNumber={userNumber} onResartGame={onStartNewGameHandler} />
}

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
