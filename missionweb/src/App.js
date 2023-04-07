import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productlist from './components/productlist/productlist';
import Filter from './components/filter/filter';
// import TopNavbar from './components/topNavbar/topNavbar';
import Stepper from './components/Checkout/Stepper/Stepper';

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/stepper' element={<Stepper />}>
          <Route path=':cart' element={<Productlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;