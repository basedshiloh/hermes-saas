import Login from '@/src/components/auth/login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Hermes Agent',
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
