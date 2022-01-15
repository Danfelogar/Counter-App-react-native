import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10)

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Contador: {contador}
            </Text>

            <Fab
                title='+1'
                onPress={()=> setContador(contador + 1)}
            />

            <Fab
                title='-1'
                position='bl'
                onPress={()=> setContador(contador - 1)}
            />

            {/* <TouchableOpacity
                style={ styles.fabLocationBL }
                onPress={()=> setContador(contador - 1)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText} >-1</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'gray',
        flex: 1,
        //flex: 1 debe ir aqui apra asegurarnos que estamos tomando todo el espacio de la pantalla como si fuera a envolverlo
        justifyContent: 'center',
    },
    title:{
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        top: -15,
    },
})