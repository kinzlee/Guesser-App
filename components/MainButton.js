import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';


const MainButton = (props) => {
return (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);
};

const styles = StyleSheet.create({
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