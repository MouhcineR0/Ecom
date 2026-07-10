import React from 'react';
import { NavLink } from 'react-router-dom';
import { RollbackOutlined, UserSwitchOutlined, MacCommandOutlined, ProductOutlined, FolderOutlined, HomeOutlined } from '@ant-design/icons'
import { Icon, InlineIcon } from '@iconify/react';


const Sidebar = () => {
    return (
        <aside className="sidebar_dashboard fixed bg-[#262D34] font-Play text-[#707793] w-64 h-screen py-4 flex flex-col justify-center">
            <h1 className='mb-7 p-4'> GENERAL</h1>
            <NavLink
                to="/dashboard/accueil"
            >
                {
                    ({ isActive }) => (
                        <>
                            <div className={
                                `p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'border-l-[1px] border-[#FF6C2F]' : 'hover:text-white hover:rounded-l-full'
                                }`
                            }>

                                <span className="w-6 h-6">
                                    <InlineIcon icon={"solar:widget-5-bold-duotone"} fontSize={24} color={isActive ? "#FF6C2F" : ""} />
                                </span>
                                <span>
                                    Dashboard
                                </span>
                            </div>
                        </>
                    )
                }
            </NavLink>

            <NavLink to="/dashboard/categories">
                {
                    ({ isActive }) => (
                        <>
                            <div className={
                                `p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'border-l-[1px] border-[#FF6C2F]' : 'hover:text-white hover:rounded-l-full'
                                }`}>

                                <span className="w-6 h-6">
                                    <InlineIcon icon={"solar:clipboard-list-bold-duotone"} fontSize={24} color={isActive ? "#FF6C2F" : ""} />
                                </span>
                                Category
                            </div>
                        </>
                    )
                }
            </NavLink>
            <NavLink
                to="/dashboard/products"
                className={({ isActive }) =>
                    `p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'border-l-[1px] border-[#FF6C2F]' : 'hover:text-white hover:rounded-l-full'
                    }`
                }
            >
                {
                    ({ isActive }) => (
                        <>
                            <span className="w-6 h-6">
                                <InlineIcon icon={"solar:t-shirt-bold-duotone"} fontSize={24} color={isActive ? "#FF6C2F" : ""} />
                            </span>
                            Products
                        </>
                    )
                }
            </NavLink>
            <NavLink
                to="/dashboard/commandes"
                className={({ isActive }) =>
                    `p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'border-l-[1px] border-[#FF6C2F]' : 'hover:text-white hover:rounded-l-full'
                    }`
                }
            >
                {({ isActive }) => (
                    <>
                        <span className="w-6 h-6">
                            <InlineIcon icon={"solar:bag-smile-bold-duotone"} fontSize={24} color={isActive ? "#FF6C2F" : ""} />
                        </span>
                        Orders
                    </>
                )}
            </NavLink>
            <NavLink
                to="/dashboard/utilisateurs"
                className={({ isActive }) =>
                    `p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'border-l-[1px] border-[#FF6C2F]' : 'hover:text-white hover:rounded-l-full'
                    }`
                }
            >
                {({ isActive }) => (
                    <>
                        <span className="w-6 h-6">
                            <InlineIcon icon={"solar:user-speak-rounded-bold-duotone"} fontSize={24} color={isActive ? "#FF6C2F" : ""} />
                        </span>
                        Roles
                    </>
                )}

            </NavLink>

            <NavLink
                to="/"
                className={({ isActive }) =>
                    `p-4 cursor-pointer flex items-center gap-3 ${isActive ? 'border-l-[1px] border-[#FF6C2F]' : 'hover:text-white hover:rounded-l-full'
                    }`
                }
            >
                <span><RollbackOutlined /></span>
                Back Home
            </NavLink>
        </aside >
    );
};

export default Sidebar;
