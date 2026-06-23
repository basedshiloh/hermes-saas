import SignUp from '@/src/components/auth/sign-up';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up - Hermes Agent',
};

const SignUpPage = () => {
  return <SignUp />;
};

export default SignUpPage;
