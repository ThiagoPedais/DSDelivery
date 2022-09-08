import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import delivery from '../assets/deliveryman.png';
import { PropsStack } from '../Models';


export default function Home() {

    const navigation = useNavigation<PropsStack>();


    const handleOnPress = () => {
        navigation.navigate('Orders');
    };

    return (
        <>
            <View style={styles.container}>
                <Image source={delivery} />
                <Text style={styles.title}>Acompanhe os pedidos e {'\n'} entregue no prazo!</Text>
                <Text style={styles.subTitle}>Receba todos os pedidos do seu {'\n'} restaurante na palma da sua mão</Text>
            </View>
            
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={handleOnPress}>
                    <Text style={styles.buttonText}>VER PEDIDOS</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        alignItems: 'center'
    },
    title: {
        padding: 15,
        color: '#263238',
        fontSize: 26,
        lineHeight: 35,
        fontWeight: 'bold',
        marginTop: 31,
        textAlign: 'center'
    },
    subTitle: {
        color: '#9E9E9E',
        fontSize: 16,
        marginTop: 15,
        lineHeight: 22,
        textAlign: 'center'
    },
    footer: {
        marginTop: '5%',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#DA5C5C',
        flexDirection: 'row',
        borderRadius: 10
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24
    }
});
