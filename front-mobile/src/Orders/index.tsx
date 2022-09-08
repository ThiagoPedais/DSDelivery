import React, { useEffect, useState } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { StyleSheet, ScrollView, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { fetchOrders } from '../api';
import { PropsStack } from '../Models';
import OrderCard from '../OrderCard';
import { Order } from '../types';



export default function Orders() {

    const navigation = useNavigation<PropsStack>();
    const isFocused = useIsFocused();
    const [orders, setOrders] = useState<Order[]>();
    const [isLoading, setIsLoading] = useState(false);

    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails', {
            order
        });
    };

    const fetchData = () => {
        setIsLoading(true)
        fetchOrders()
            .then(res => {
                setOrders(res.data);
                console.log(res.data)
            })
            .catch(() => Alert.alert("Houve um erro ao buscar pedidos!"))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        if (isFocused){
            fetchData();
        }
    }, [isFocused])

    return (
        <>
            <ScrollView style={styles.container}>
                {
                    isLoading ? (<ActivityIndicator style={{ marginTop: 10 }} />)
                        : (
                            orders?.map(order => (
                                <TouchableOpacity
                                    key={order.id}
                                    onPress={() => handleOnPress(order)} >
                                    <OrderCard order={order} />
                                </TouchableOpacity>
                            ))
                        )

                }
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
