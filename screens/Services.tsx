import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { mockServices } from '../data/mockData';
import { TestService } from '../types';

type RootStackParamList = {
  Welcome: undefined;
  Services: undefined;
  OrderForm: { serviceId: string };
  Payment: { orderId: string };
  Orders: undefined;
  OrderDetails: { orderId: string };
};

type ServicesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Services'
>;

interface Props {
  navigation: ServicesScreenNavigationProp;
}

export default function Services({ navigation }: Props) {
  const renderService = ({ item }: { item: TestService }) => (
    <TouchableOpacity
      style={styles.serviceCard}
      onPress={() => navigation.navigate('OrderForm', { serviceId: item.id })}
    >
      <View style={styles.serviceHeader}>
        <Text style={styles.serviceName}>{item.name}</Text>
        <Text style={styles.servicePrice}>£{item.price}</Text>
      </View>
      <Text style={styles.serviceCategory}>{item.category}</Text>
      <Text style={styles.serviceDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Available Tests</Text>
        <Text style={styles.subtitle}>Choose a health test service</Text>
      </View>

      <FlatList
        data={mockServices}
        renderItem={renderService}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e8ed',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  listContainer: {
    padding: 20,
  },
  serviceCard: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 15,
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
  serviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    flex: 1,
  },
  servicePrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  serviceCategory: {
    fontSize: 14,
    color: '#3498db',
    fontWeight: '600',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
  },
});
