import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default function Weather({temp, condition}){
    return (
            <LinearGradient 
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.container}>
            <View style={styles.halfcontainer}>
                <Ionicons name="rainy" size={96}/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfcontainer}>
                
            </View>
            </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Dust", "Smoke"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    halfcontainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp:{
        fontSize: 42,
    }
})