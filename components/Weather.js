import React, { useState } from 'react';
import Forecast from './Forecast';
import { Text, ImageBackground, StyleSheet, View } from 'react-native';


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.background}>
                <View style={styles.zipCodecontainer}>
                    <Text style={styles.title}>Zip code is </Text>
                    <Text style={styles.zipCode}>{props.zipCode}</Text>
                </View>
                <Forecast {...forecastInfo} />
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%'
    },
    background: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: '40%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    zipCodecontainer: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        color: 'white',
        lineHeight: 70

    },
    zipCode: {
        fontSize: 18,
        color: 'white',
        lineHeight: 70
    }
});
