import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Welcome: undefined;
  Services: undefined;
  OrderForm: { serviceId: string };
  Payment: { orderId: string };
  Orders: undefined;
  OrderDetails: { orderId: string };
};

type PaymentScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Payment'
>;

type PaymentScreenRouteProp = RouteProp<RootStackParamList, 'Payment'>;

interface Props {
  navigation: PaymentScreenNavigationProp;
  route: PaymentScreenRouteProp;
}

export default function Payment({ navigation, route }: Props) {
  const { orderId } = route.params;
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (
    method: 'google_pay' | 'apple_pay' | 'stripe'
  ) => {
    setIsProcessing(true);

    // Mock payment processing
    setTimeout(() => {
      setIsProcessing(false);
      Alert.alert(
        'Payment Successful',
        `Your payment has been processed successfully using ${method}!`,
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Orders'),
          },
        ]
      );
    }, 2000);
  };

  const renderPaymentOptions = () => {
    const options = [];

    if (Platform.OS === 'android') {
      options.push(
        <TouchableOpacity
          key="google_pay"
          style={[styles.paymentButton, styles.googlePayButton]}
          onPress={() => handlePayment('google_pay')}
          disabled={isProcessing}
        >
          <Text style={styles.paymentButtonText}>Pay with Google Pay</Text>
        </TouchableOpacity>
      );
    } else if (Platform.OS === 'ios') {
      options.push(
        <TouchableOpacity
          key="apple_pay"
          style={[styles.paymentButton, styles.applePayButton]}
          onPress={() => handlePayment('apple_pay')}
          disabled={isProcessing}
        >
          <Text style={styles.paymentButtonText}>Pay with Apple Pay</Text>
        </TouchableOpacity>
      );
    }

    options.push(
      <TouchableOpacity
        key="stripe"
        style={[styles.paymentButton, styles.stripeButton]}
        onPress={() => handlePayment('stripe')}
        disabled={isProcessing}
      >
        <Text style={styles.paymentButtonText}>Pay with Card</Text>
      </TouchableOpacity>
    );

    return options;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Complete Payment</Text>
        <Text style={styles.subtitle}>Order ID: {orderId}</Text>

        <View style={styles.amountContainer}>
          <Text style={styles.amountLabel}>Total Amount</Text>
          <Text style={styles.amount}>£45.00</Text>
        </View>

        <View style={styles.paymentOptions}>
          <Text style={styles.sectionTitle}>Choose Payment Method</Text>
          {renderPaymentOptions()}
        </View>

        {isProcessing && (
          <View style={styles.processingContainer}>
            <Text style={styles.processingText}>Processing payment...</Text>
          </View>
        )}

        <Text style={styles.note}>
          Your payment information is secure and encrypted.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 30,
  },
  amountContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  amountLabel: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  paymentOptions: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  paymentButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  googlePayButton: {
    backgroundColor: '#4285f4',
  },
  applePayButton: {
    backgroundColor: '#000000',
  },
  stripeButton: {
    backgroundColor: '#635bff',
  },
  paymentButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  processingContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  processingText: {
    fontSize: 16,
    color: '#f39c12',
    fontWeight: '600',
  },
  note: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
