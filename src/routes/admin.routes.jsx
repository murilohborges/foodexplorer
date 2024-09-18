import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Edit } from '../pages/Edit';
import { New } from '../pages/New';
import { Favourites } from '../pages/Favourites';
import { Orders } from '../pages/Orders';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/new" element={<New />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/orders" element={<Orders />} />

      <Route path="*" element={<Navigate to='/'/>}/>
    </Routes>
  )
}