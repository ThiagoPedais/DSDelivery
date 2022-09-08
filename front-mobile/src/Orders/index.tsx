import React from 'react';
import {  StyleSheet, ScrollView  } from 'react-native';
import OrderCard from '../OrderCard';



export default function Orders() {

    
    return (
        <>
            <ScrollView style={styles.container}>
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',
    }
});
