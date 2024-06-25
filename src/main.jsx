import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import WalletContextProvider from './context/WalletContextProvider.jsx';
import { SectionProvider } from './Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <WalletContextProvider>
    <SectionProvider>
      <App />
    </SectionProvider>
  </WalletContextProvider>
);
