import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

export default function Loading() {
    return (<View style={styles.container}>
        <Text style={styles.text}>Получение данных...</Text>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'flex-end',
        paddingHorizontal: 30,
        paddingVertical:100,
        backgroundColor: "#FDF6AA",

    },
    text:{
        color: "2c2c2c",
        fontSize: 30,
    }
})