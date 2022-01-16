import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'yellow'
    },
    title:{
        fontSize: 20,
        paddingVertical:30,
        paddingHorizontal:10,
        // width:150,
        borderWidth:10,
        // backgroundColor: 'gray',
    }
});