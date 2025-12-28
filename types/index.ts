export interface TestService {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface Order {
  id: string;
  serviceId: string;
  serviceName: string;
  status: 'pending' | 'paid' | 'in_progress' | 'completed' | 'cancelled';
  createdAt: Date;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  address: string;
  paymentId?: string;
  results?: TestResult[];
}

export interface TestResult {
  id: string;
  testName: string;
  value: string;
  unit: string;
  normalRange: string;
  status: 'normal' | 'abnormal' | 'pending';
  date: Date;
}

export interface Payment {
  id: string;
  amount: number;
  currency: string;
  method: 'google_pay' | 'apple_pay' | 'stripe';
  status: 'pending' | 'completed' | 'failed';
}
