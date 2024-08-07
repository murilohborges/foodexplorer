import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Favourites } from '../pages/Favourites';

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/favourites" element={<Favourites />} />

      <Route path="*" element={<Navigate to='/'/>} />
    </Routes>
  )
}