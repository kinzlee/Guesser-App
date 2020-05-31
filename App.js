import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const [userNumber, setUserNumber] = useState();

const gameScreenHandler = (changeNumber) => {
  setUserNumber(changeNumber);
}

let content = <StartGameScreen userNumber={userChoice}/>

if (userNumber) {
  content = <GameScreen  onStartGame={gameScreenHandler} />
}

export default function App() {
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
