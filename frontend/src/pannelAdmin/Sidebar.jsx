import React from 'react';
import { NavLink } from 'react-router-dom';
import { RollbackOutlined ,UserSwitchOutlined , MacCommandOutlined , ProductOutlined , FolderOutlined , HomeOutlined  } from '@ant-design/icons'

const Sidebar = () => {
    return (
        <aside className="fixed bg-primary font-poppins text-white w-64 h-screen py-4 flex flex-col justify-center gap-4">
            <NavLink
                to="/dashboard/accueil"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-[#F5F5F5] text-[#DB4444] rounded-l-full' : 'hover:bg-white hover:text-[#DB4444] hover:rounded-l-full'
                    }`
                }
            >
                <span className="w-6 h-6"><HomeOutlined /></span>
                Accueil
            </NavLink>
            <NavLink
                to="/dashboard/categories"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-[#F5F5F5] text-[#DB4444] rounded-l-full' : 'hover:bg-white hover:text-[#DB4444] hover:rounded-l-full'
                    }`
                }
            >
                <span className="w-6 h-6"><FolderOutlined /></span>
                Categories
            </NavLink>
            <NavLink
                to="/dashboard/products"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-[#F5F5F5] text-[#DB4444] rounded-l-full' : 'hover:bg-white hover:text-[#DB4444] hover:rounded-l-full'
                    }`
                }
            >
                <span className="w-6 h-6"><ProductOutlined /></span>
                Products
            </NavLink>
            <NavLink
                to="/dashboard/commandes"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-[#F5F5F5] text-[#DB4444] rounded-l-full' : 'hover:bg-white hover:text-[#DB4444] hover:rounded-l-full'
                    }`
                }
            >
                {({ isActive }) => (
                    <>
                        <span className="w-6 h-6">
                            <MacCommandOutlined/>
                        </span>
                        Commandes
                    </>
                )}
            </NavLink>
            <NavLink
                to="/dashboard/utilisateurs"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-[#F5F5F5] text-[#DB4444] rounded-l-full' : 'hover:bg-white hover:text-[#DB4444] hover:rounded-l-full'
                    }`
                }
            >
                {({ isActive }) => (
                    <>
                        <span className="w-6 h-6">
                            <UserSwitchOutlined />                        </span>
                        Utilisateurs
                    </>
                )}

            </NavLink>

            <NavLink
                to="/"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-[#F5F5F5] text-[#DB4444] rounded-l-full' : 'hover:bg-white hover:text-[#DB4444] hover:rounded-l-full'
                    }`
                }
            >
                <span><RollbackOutlined /></span>
                Page d'accueil.
            </NavLink>
        </aside>
    );
};

export default Sidebar;
