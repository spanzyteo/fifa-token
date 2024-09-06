import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Modal from './components/Modal';
import InitialModal from './components/InitialModal';
import PurchaseModal from './components/PurchaseModal';

const App = () => {
  return (
    <div className="relative flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Modal />
      <InitialModal />
      <PurchaseModal />
    </div>
  );
};

export default App;
