import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import Welcome from './screens/Welcome';
import Services from './screens/Services';
import OrderForm from './screens/OrderForm';
import Payment from './screens/Payment';
import Orders from './screens/Orders';
import OrderDetails from './screens/OrderDetails';

export type RootStackParamList = {
  Welcome: undefined;
  Services: undefined;
  OrderForm: { serviceId: string };
  Payment: { orderId: string };
  Orders: undefined;
  OrderDetails: { orderId: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ title: 'HealthTest UK' }}
          />
          <Stack.Screen
            name="Services"
            component={Services}
            options={{ title: 'Available Tests' }}
          />
          <Stack.Screen
            name="OrderForm"
            component={OrderForm}
            options={{ title: 'Order Test' }}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{ title: 'Payment' }}
          />
          <Stack.Screen
            name="Orders"
            component={Orders}
            options={{ title: 'My Orders' }}
          />
          <Stack.Screen
            name="OrderDetails"
            component={OrderDetails}
            options={{ title: 'Order Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
