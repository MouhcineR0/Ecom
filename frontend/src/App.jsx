import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pannelAdmin/Dashboard';
import Layout from './Layout';


function App() {

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;