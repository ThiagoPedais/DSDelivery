import React from 'react';
import Home from "./Home";
import Orders from "./Orders";
import { PropsNavigationStack } from './Models';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderDetails from './OrderDetails';

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator<PropsNavigationStack>();


const Routes = () => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: '#fff'
                    }
                }
            }
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Orders" component={Orders} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} />

        </Stack.Navigator>

    );
};

export default Routes;