import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import SideBar from './Sidebar';
import Accueil from './Dashboard/accueil/Accueil';
import Category from './Dashboard/category/Category';
import Product from './Dashboard/product/Product';

const Dashboard = () => {
  return (
    <div className="flex ">
      <SideBar />
      <main className="main-content flex-1 bg-gray-100">
        <Header />
        <div className="mt-6 px-6 overflow-y-auto bg-gray-100 ">
          <Routes>
            <Route path="accueil" element={<Accueil />} />
            <Route path="categories" element={<Category />}/>
            <Route path="products" element={<Product/>  }/>
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
