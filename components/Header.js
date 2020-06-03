import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TitleText from '../components/TitleText';

const Header = ({title}) => {
    return (
    <View style={styles.Header}>
        <TitleText>{title}</TitleText>
    </View>
    );
}


const styles = StyleSheet.create({
    Header: {
        width: '100%',
        height: 90,
        paddingTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2787b'
    },
});

export  default Header;