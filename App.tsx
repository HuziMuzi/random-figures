import './i18n';
import {AuthProvider} from './src/components/AuthProvider/AuthProvider';
import AppEntry from './AppEntry';
import React from 'react';

export default function App() {
  return (
    <AuthProvider>
      <AppEntry />
    </AuthProvider>
  );
}
