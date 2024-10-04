import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Favourites } from '../pages/Favourites';
import { Cart } from '../pages/Cart';
import { Profile } from '../pages/Profile';
import { Orders } from '../pages/Orders';
import { SuccessPayment } from '../pages/SuccessPayment';

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/success-payment" element={<SuccessPayment />} />

      <Route path="*" element={<Navigate to='/'/>} />
    </Routes>
  )
}