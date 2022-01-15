import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10)

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Contador: {contador}
            </Text>

            <TouchableOpacity
                onPress={()=> setContador(contador + 1)}
            >
                <View style={styles.btnUp}>
                    <Text>+1</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        //flex: 1 debe ir aqui apra asegurarnos que estamos tomando todo el espacio de la pantalla como si fuera a envolverlo
        backgroundColor:'gray',
        justifyContent: 'center',
    },
    title:{
        textAlign: 'center',
        fontSize: 40,
        color: 'white',
        top: -15,
    },
    btnUp:{
        backgroundColor:'orange',
        borderRadius: 100,
    }
})