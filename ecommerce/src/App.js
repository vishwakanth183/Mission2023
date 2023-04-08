import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stepper from './components/Checkout/Stepper/Stepper';

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Stepper />}>
          <Route path=':cart' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;