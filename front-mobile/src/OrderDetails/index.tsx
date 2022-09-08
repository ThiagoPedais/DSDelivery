import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Linking } from 'react-native';
import { confirmDelivery } from '../api';

import { PropsStack } from '../Models';
import OrderCard from '../OrderCard';
import { Order } from '../types';




type Props = {
    route: {
        params: {
            order: Order;
        }
    }
}


export default function OrderDetails({ route }: Props) {

    const { order } = route.params;
    const navigation = useNavigation<PropsStack>();


    const handleOnCancel = () => {
        navigation.navigate('Orders');
    }

    const handleConfirmDelivery = () => {
        confirmDelivery(order.id)
        .then(() => {
            Alert.alert(`Pedido ${order.id} confirmado com sucesso ;)`)
            navigation.navigate('Orders');
        })
        .catch(() => Alert.alert(`Erro ao confirmar pedido ${order.id} :(`))
    }

    const handleStartingNavigation = () => {
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`)
    }


    return (

        <View style={styles.container}>
            <OrderCard order={order} />

            <TouchableOpacity style={styles.button} onPress={handleStartingNavigation}>
                <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleConfirmDelivery}>
                <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleOnCancel}>
                <Text style={styles.buttonText}>CANCELAR</Text>
            </TouchableOpacity>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    button: {
        backgroundColor: '#DA5C5C',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24,
        // fontFamily: 'OpenSans_700Bold'
    }
});
