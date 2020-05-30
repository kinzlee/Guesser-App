import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#0000',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 9,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8
    }
});

export default Card;