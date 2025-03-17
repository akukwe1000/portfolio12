import React from 'react';
import { DarkModeProvider } from './components/DarkModeContext';
import Body from './pages/Body';

export default function App() {
  return (
    <DarkModeProvider>
      <Body/>
    </DarkModeProvider>
  );
}
