import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from './icons/Home';
import Category from './icons/Category';
import Product from './icons/Product';
import Order from './icons/Order';
import Users from './icons/Users';

const Sidebar = () => {
    return (
        <aside className="fixed bg-primary font-poppins text-white w-64 h-screen py-4 flex flex-col justify-center gap-4">
            <NavLink
                to="/dashboard/accueil"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-white text-[#DB4444] rounded-l-full' : 'hover:bg-white hover:text-[#DB4444] hover:rounded-l-full'
                    }`
                }
            >
                <span className="w-6 h-6"><Home /></span>
                Accueil
            </NavLink>
            <NavLink
                to="/dashboard/categories"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-white text-[#DB4444] rounded-l-full' : 'hover:bg-white hover:text-[#DB4444] hover:rounded-l-full'
                    }`
                }
            >
                <span className="w-6 h-6"><Category /></span>
                Categories
            </NavLink>
            <NavLink
                to="/dashboard/products"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-white text-[#DB4444] rounded-l-full' : 'hover:bg-white hover:text-[#DB4444] hover:rounded-l-full'
                    }`
                }
            >
                <span className="w-6 h-6"><Product /></span>
                Products
            </NavLink>
            <NavLink
                to="/dashboard/commandes"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-white text-[#DB4444] rounded-l-full' : 'hover:bg-white hover:text-[#DB4444] hover:rounded-l-full'
                    }`
                }
            >
                {({ isActive }) => (
                    <>
                        <span className="w-6 h-6">
                            <Order isActive={isActive} />
                        </span>
                        Commandes
                    </>
                )}
            </NavLink>
            <NavLink
                to="/dashboard/utilisateurs"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-white text-[#DB4444] rounded-l-full' : 'hover:bg-white hover:text-[#DB4444] hover:rounded-l-full'
                    }`
                }
            >
                <span className="w-6 h-6"><Users /></span>
                Utilisateurs
            </NavLink>
        </aside>
    );
};

export default Sidebar;
