import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';

const Header = ({title}) => {
    return (
    <View style={{...styles.Header, ...Platform.select({ios: styles.headerIos, android: styles.headerAndroid})}}>
        <TitleText style={styles.title}>{title}</TitleText>
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
        // backgroundColor: Platform.OS === 'android' ? Colors.primary : '#ffff',
        // borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
        // borderBottomWidth: Platform.OS ==='ios' ? 1 : 0
    },
    headerIos: {
        backgroundColor: '#fff',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: Colors.primary
    },
    title :{
        color: Platform.OS === 'ios' ? Colors.primary : '#fff'
    }
});

export  default Header;