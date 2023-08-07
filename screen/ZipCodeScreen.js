import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Narathiwat', code: '96000' },
    { place: 'pattani', code: '94000' },
    { place: 'Yala', code: '95000' },
    { place: 'Songkhla', code: '90000' },
    { place: 'Krabi', code: '81000' },
    { place: 'Phrae', code: '54000' },
    { place: 'Nan', code: '55000' },
    { place: 'Lamphun', code: '51000' },
    { place: 'Mae Hong Son', code: '58000' },
    { place: 'Tak', code: '63000' },
    { place: 'Phayao', code: '56000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', { zipCode: code })
    }}>
        <View style={styles.ZipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={item => item.code}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    ZipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ZipPlace: {
        flex: 1
    },
    ZipCode: {
        flex: 1
    }
})