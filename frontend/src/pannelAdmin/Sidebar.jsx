import React from 'react';
import { NavLink } from 'react-router-dom';
import { RollbackOutlined, UserSwitchOutlined, MacCommandOutlined, ProductOutlined, FolderOutlined, HomeOutlined } from '@ant-design/icons'
import { Icon, InlineIcon } from '@iconify/react';


const Sidebar = () => {
    return (
        <aside className="sidebar_dashboard fixed bg-[#262D34] font-Play text-[#707793] w-64 h-screen py-4 flex flex-col justify-center gap-4">
            <NavLink
                to="/dashboard/accueil"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-[#F5F5F5] text-[#DB4444] rounded-l-full' : 'hover:text-white hover:rounded-l-full'
                    }`
                }
            >
                <span className="w-6 h-6">
                    <InlineIcon icon={"solar:widget-5-bold-duotone"} fontSize={24} />
                </span>
                <span>
                    Dashboard
                </span>
            </NavLink>
            <NavLink
                to="/dashboard/categories"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-[#F5F5F5] text-[#DB4444] rounded-l-full' : 'hover:text-white hover:rounded-l-full'
                    }`
                }
            >
                <span className="w-6 h-6">
                    <InlineIcon icon={"solar:clipboard-list-bold-duotone"} fontSize={24} />
                </span>
                Category
            </NavLink>
            <NavLink
                to="/dashboard/products"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-[#F5F5F5] text-[#DB4444] rounded-l-full' : 'hover:text-white hover:rounded-l-full'
                    }`
                }
            >
                <span className="w-6 h-6">
                    <InlineIcon icon={"solar:t-shirt-bold-duotone"} fontSize={24} />
                </span>
                Products
            </NavLink>
            <NavLink
                to="/dashboard/commandes"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-[#F5F5F5] text-[#DB4444] rounded-l-full' : 'hover:text-white hover:rounded-l-full'
                    }`
                }
            >
                {({ isActive }) => (
                    <>
                        <span className="w-6 h-6">
                            <InlineIcon icon={"solar:bag-smile-bold-duotone"} fontSize={24} />
                        </span>
                        Orders
                    </>
                )}
            </NavLink>
            <NavLink
                to="/dashboard/utilisateurs"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-[#F5F5F5] text-[#DB4444] rounded-l-full' : 'hover:text-white hover:rounded-l-full'
                    }`
                }
            >
                {({ isActive }) => (
                    <>
                        <span className="w-6 h-6">
                            <InlineIcon icon={"solar:user-speak-rounded-bold-duotone"} fontSize={24} />
                        </span>
                        Roles
                    </>
                )}

            </NavLink>

            <NavLink
                to="/"
                className={({ isActive }) =>
                    `mb-4 p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'bg-[#F5F5F5] text-[#DB4444] rounded-l-full' : 'hover:text-white hover:rounded-l-full'
                    }`
                }
            >
                <span><RollbackOutlined /></span>
                Back Home
            </NavLink>
        </aside>
    );
};

export default Sidebar;
