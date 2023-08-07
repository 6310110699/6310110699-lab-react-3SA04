import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.main}>{props.main}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <View style={styles.tempContainer}>
                <Text style={styles.temp}>{props.temp}</Text>
                <Text style={styles.tempC}>°C</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        fontSize: 32,
        color: 'white',
        lineHeight: 70
    },
    description: {
        fontSize: 18,
        color: 'white',
        lineHeight: 70
    },
    tempContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    temp: {
        fontSize: 26,
        color: 'white',
        lineHeight: 70
    },
    tempC: {
        fontSize: 18,
        color: 'white',
        lineHeight: 70
    },
});