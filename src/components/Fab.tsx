import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View,Platform, TouchableOpacity } from 'react-native';

interface Props {
    //se tecmienda que propiedades como title y position vayan arriba y metodos como onPress esten abajo
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}
//si no mandas nada en el position lo tomare como 'br'
export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.5 }
                style={[ styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right ]}
                onPress={ onPress }
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText} >{ title }</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () =>{
        return (
            <View
                style={[ styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right ]}
            >
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple('black',true, 30) }
                    >
                    <View style={styles.fab}>
                        <Text style={styles.fabText} >{ title }</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'ios') ? ios() : android()
}

const styles = StyleSheet.create({
    fabLocation:{
        position: 'absolute',
        bottom: 20,
    },
    right:{
        right: 20
    },
    left:{
        left: 20
    },
    fab:{
        backgroundColor: '#e9c46a',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 2,
    },
    fabText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        //a mi perspectiva es mejor esto que textalign para alinear
    },
})