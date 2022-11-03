import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CarList from './pages/CarList';
import CarDescription from './pages/CarDescription';
import Error from './pages/Error';
import Layout from './styles/Layout';

function Router() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>알티 모빌리티</title>
      </Helmet>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<CarList />} />
          <Route path='/:carId' element={<CarDescription />} />
          <Route path='/error' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
