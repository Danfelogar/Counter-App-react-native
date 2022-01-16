import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.cajaVerde }/>
            <View style={ styles.cajaMorada }/>
            <View style={ styles.cajaNaraja }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28C4D9',
    },
    cajaMorada:{
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        // top:270
        right: 0,
        top: 0,
    },
    cajaNaraja:{
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        // top:-180
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    cajaVerde:{
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // top:-180
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // right: 0,
        // top: 0,
        ...StyleSheet.absoluteFillObject
    },
});
