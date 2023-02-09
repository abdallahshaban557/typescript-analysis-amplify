import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports';

Amplify.configure({Auth: {identityPoolId: ''}});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
