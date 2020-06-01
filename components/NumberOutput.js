import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const NumberOutput = (props) => {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    numberContainer: {
        borderWidth: 2,
        borderColor: Colors.secondary,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginVertical: 10
    },
    number: {
        fontSize: 22,
        color: Colors.secondary
    }
});

export default NumberOutput;