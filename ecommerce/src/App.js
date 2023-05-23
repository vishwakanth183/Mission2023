import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stepper from './components/Checkout/Stepper/Stepper';
import CartSummary from './components/Checkout/CartSummary/cartSummary';
import Delivery from './components/Checkout/Delivery/delivery';
import { cartDelivery, cartRoute, cartSummary, paymentRoute , homeRoute} from './components/Routing';
import Home from './components/Home/home';

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={homeRoute} element={<Home/>}/>
        <Route path={cartRoute} element={<Stepper />}>
          <Route path={cartSummary} element={<CartSummary />} />
          <Route path={cartDelivery} element={<Delivery />} />
          <Route path={paymentRoute} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;