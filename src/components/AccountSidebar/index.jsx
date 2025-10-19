import React from 'react';
import { LuUpload } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
const AccountSidebar = () => {
    return (
        <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
            <div className="w-full p-5 flex items-center justify-center flex-col">
                <div className="w-[110px] relative h-[110px] !mb-4 rounded-full overflow-hidden group">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                        className="w-full h-full object-cover"
                        alt="User Profile"
                    />
                    <div
                        className="overlay w-[100%] h-[100%] flex items-center justify-center
                                absolute top-0 opacity-0 transition-all left-0 z-50 bg-[rgba(0,0,0,0.7)]
                                 cursor-pointer group-hover:opacity-100">
                        <LuUpload className='text-[#fff] text-[25px]' />
                        <input type='file' className='w-full cursor-pointer opacity-0 h-full absolute top-0 left-0' />
                    </div>
                </div>
                <h4>Chirag Simepurushkar</h4>
                <h6 className='text-[12px] font-[500]'>simepurushkarchirag84@gamil.com</h6>
            </div>
            <ul className='list-none pb-5 bg-[#f1f1f1] myAccountTabs'>
                <li className="w-full">
                    <NavLink exact={true}
                        activeClassname="isActive"
                        to="/my-account" className={({ isActive }) =>
                            isActive ? "active" : ""}>
                        <Button className="w-full !py-2 !px-5 !text-left !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                            <FaRegUser className="text-[17px]" /> My Profile
                        </Button>
                    </NavLink>
                </li>
                <li className="w-full">
                    <NavLink exact={true}
                        activeClassname="isActive"
                        to="/my-orders" className={({ isActive }) =>
                            isActive ? "active" : ""}>
                        <Button className="w-full !py-2  !px-5 !text-left !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                            <BsCart3 className="text-[17px]" /> My orders
                        </Button>
                    </NavLink>
                </li>
                <li className="w-full">
                    <NavLink exact={true}
                        activeClassname="isActive"
                        to="/my-list" className={({ isActive }) =>
                            isActive ? "active" : ""}>
                        <Button className="w-full !py-2  !px-5 !text-left !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                            <IoMdHeartEmpty className="text-[19px]" /> My List
                        </Button>
                    </NavLink>
                </li>
                <li className="w-full">
                    <NavLink exact={true}
                        activeClassname="isActive"
                        to="/logout" className={({ isActive }) =>
                            isActive ? "active" : ""}>
                        <Button className="w-full !py-2  !px-5 !text-left !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                            <LuLogOut className="text-[17px]" />Logout
                        </Button>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default AccountSidebar;