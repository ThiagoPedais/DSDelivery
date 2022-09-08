import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Order } from '../types';



export type PropsNavigationStack = {
    Home: undefined;
    Orders: undefined;    
    OrderDetails: {
        order: Order
    };
};

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;
