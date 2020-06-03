import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = (props) => <Text style={{...styles.title, ...props.style}}>{props.children}</Text>


const styles = StyleSheet.create({
    title: {
        fontFamily: 'Open-Sans-Bold',
        fontSize:18
    }
});

export default TitleText;