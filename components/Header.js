import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
    return (
    <View style={styles.Header}>
        <Text style={styles.HeaderTitle}>{title}</Text>
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
    HeaderTitle: {
        color: 'black',
        fontSize: 18
    }
});

export  default Header;