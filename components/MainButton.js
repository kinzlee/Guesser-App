import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import Colors from '../constants/Colors';


const MainButton = (props) => {
let ButtonComponent = TouchableOpacity;

if(Platform.OS === 'android' && Platform.Version >= 21) {
    buttonComponent = TouchableNativeFeedback;
}

return (
    <View style={styles.buttonContainer}>
    <ButtonComponent onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </ButtonComponent>
    </View>
);
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden'
    },
    button: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 26,
        paddingVertical: 12,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Open-Sans',
        fontSize: 18
    }
});

export default MainButton;