import { TestService, Order, TestResult } from '../types';

export const mockServices: TestService[] = [
  {
    id: '1',
    name: 'Full Blood Count',
    description:
      'Comprehensive blood analysis including red and white blood cells, platelets, and hemoglobin levels.',
    price: 45,
    category: 'Blood Tests',
  },
  {
    id: '2',
    name: 'Lipid Profile',
    description:
      'Cholesterol and triglyceride levels to assess cardiovascular risk.',
    price: 35,
    category: 'Cardiovascular',
  },
  {
    id: '3',
    name: 'Thyroid Function Test',
    description: 'TSH, T3, and T4 levels to evaluate thyroid health.',
    price: 40,
    category: 'Hormone Tests',
  },
  {
    id: '4',
    name: 'Vitamin D Test',
    description:
      'Blood level assessment of Vitamin D for bone health and immunity.',
    price: 30,
    category: 'Nutritional',
  },
  {
    id: '5',
    name: 'Diabetes Screening',
    description: 'HbA1c and glucose levels for diabetes assessment.',
    price: 25,
    category: 'Metabolic',
  },
];

export const mockOrders: Order[] = [
  {
    id: 'ORD001',
    serviceId: '1',
    serviceName: 'Full Blood Count',
    status: 'completed',
    createdAt: new Date('2025-12-20'),
    patientName: 'John Doe',
    patientEmail: 'john.doe@example.com',
    patientPhone: '+44 1234 567890',
    address: '123 Health Street, London, UK',
    paymentId: 'PAY001',
    results: [
      {
        id: 'RES001',
        testName: 'Hemoglobin',
        value: '14.2',
        unit: 'g/dL',
        normalRange: '13.5-17.5',
        status: 'normal',
        date: new Date('2025-12-22'),
      },
      {
        id: 'RES002',
        testName: 'White Blood Cells',
        value: '7.8',
        unit: 'x10^9/L',
        normalRange: '4.0-11.0',
        status: 'normal',
        date: new Date('2025-12-22'),
      },
    ],
  },
  {
    id: 'ORD002',
    serviceId: '2',
    serviceName: 'Lipid Profile',
    status: 'in_progress',
    createdAt: new Date('2025-12-25'),
    patientName: 'Jane Smith',
    patientEmail: 'jane.smith@example.com',
    patientPhone: '+44 9876 543210',
    address: '456 Wellness Ave, Manchester, UK',
    paymentId: 'PAY002',
  },
];

export const mockResults: TestResult[] = [
  // Additional mock results can be added here
];
