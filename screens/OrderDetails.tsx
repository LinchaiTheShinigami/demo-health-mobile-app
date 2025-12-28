import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp } from '@react-navigation/native';
import { mockOrders } from '../data/mockData';

type RootStackParamList = {
  Welcome: undefined;
  Services: undefined;
  OrderForm: { serviceId: string };
  Payment: { orderId: string };
  Orders: undefined;
  OrderDetails: { orderId: string };
};

type OrderDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'OrderDetails'
>;

interface Props {
  route: OrderDetailsScreenRouteProp;
}

export default function OrderDetails({ route }: Props) {
  const { orderId } = route.params;
  const order = mockOrders.find((o) => o.id === orderId);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#27ae60';
      case 'in_progress':
        return '#f39c12';
      case 'paid':
        return '#3498db';
      case 'pending':
        return '#e74c3c';
      case 'cancelled':
        return '#95a5a6';
      default:
        return '#95a5a6';
    }
  };

  const getResultStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return '#27ae60';
      case 'abnormal':
        return '#e74c3c';
      case 'pending':
        return '#f39c12';
      default:
        return '#95a5a6';
    }
  };

  if (!order) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Order not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Order Details</Text>
          <Text style={styles.orderId}>{order.id}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Service:</Text>
            <Text style={styles.value}>{order.serviceName}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Status:</Text>
            <View
              style={[
                styles.statusBadge,
                { backgroundColor: getStatusColor(order.status) },
              ]}
            >
              <Text style={styles.statusText}>
                {order.status.replace('_', ' ')}
              </Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.value}>
              {order.createdAt.toLocaleDateString()}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Patient Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{order.patientName}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{order.patientEmail}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>{order.patientPhone}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{order.address}</Text>
          </View>
        </View>

        {order.results && order.results.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Test Results</Text>
            {order.results.map((result) => (
              <View key={result.id} style={styles.resultCard}>
                <View style={styles.resultHeader}>
                  <Text style={styles.resultName}>{result.testName}</Text>
                  <View
                    style={[
                      styles.resultStatusBadge,
                      { backgroundColor: getResultStatusColor(result.status) },
                    ]}
                  >
                    <Text style={styles.resultStatusText}>{result.status}</Text>
                  </View>
                </View>
                <View style={styles.resultDetails}>
                  <Text style={styles.resultValue}>
                    {result.value} {result.unit}
                  </Text>
                  <Text style={styles.resultRange}>
                    Normal: {result.normalRange}
                  </Text>
                </View>
                <Text style={styles.resultDate}>
                  {result.date.toLocaleDateString()}
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e8ed',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  orderId: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  section: {
    backgroundColor: 'white',
    margin: 20,
    marginBottom: 0,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#34495e',
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    color: '#2c3e50',
    flex: 1,
    textAlign: 'right',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  resultCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  resultName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  resultStatusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  resultStatusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  resultDetails: {
    marginBottom: 10,
  },
  resultValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 5,
  },
  resultRange: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  resultDate: {
    fontSize: 12,
    color: '#95a5a6',
    textAlign: 'right',
  },
});
