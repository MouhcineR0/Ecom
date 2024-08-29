import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pannelAdmin/Dashboard';
import Layout from './Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Error404 from './pages/Error404';
import UserProtectedRoute from './components/ProtectedRoutes/UserProtectedRoute';
import AdminProtectedRoute from './components/ProtectedRoutes/AdminProtectedRoute';
import { useSelector } from 'react-redux';


function App() {

  const { isAuth } = useSelector(state => state.user);

  useEffect(() => {
    // start from above probleme
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
          <Route path='/login' element={isAuth ? <Navigate to={'/'} /> : <Login />} />
          <Route path='/signup' element={isAuth ? <Navigate to={'/'} /> : <Signup />} />
          <Route
            path='/card'
            element={
              <UserProtectedRoute>
                <Cart />
              </UserProtectedRoute>
            } />
          <Route path='*' element={<Error404 />} />
          {/* <Route path='/checkout' element={<Checkout />} /> */}
        </Route>
        <Route
          path="/dashboard/*"
          element={
            <AdminProtectedRoute>
              <Dashboard />
            </AdminProtectedRoute>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;