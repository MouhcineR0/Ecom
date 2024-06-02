import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import SideBar from './Sidebar';
import Accueil from './Dashboard/Accueil';

const Dashboard = () => {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1 bg-gray-100">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-6">
          <Routes>
            <Route path="accueil" element={<Accueil />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
