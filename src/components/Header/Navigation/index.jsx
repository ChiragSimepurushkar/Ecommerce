import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { RiMenu2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoRocketOutline } from "react-icons/io5";
import CategoryPanel from './CategoryPanel';
import "../Navigation/style.css"
const Navigation = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    }
    return (
        <>
            <nav >
                <div className="container flex items-center justify-end gap-8">
                    <div className="col_1 w-[20%]">
                        <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}><RiMenu2Line className='text-[18px]' />Shop By Categories
                            <FaAngleDown className='text-[14px] ml-auto font-bold' />
                        </Button>
                    </div>
                    <div className="col_2 w-[60%]">
                        <ul className='flex items-center gap-3 nav' >
                            <li className='list-none'>
                                <Link to="/" className='link transition text-[14px] !font-[500]'><Button className='link transition !font-[500]'>Home</Button></Link>
                            </li>
                            <li className='list-none relative'>
                                <Link to="/" className='link transition text-[14px] font-[500]'><Button className='link transition !font-[500] !py-4'>Fashion</Button></Link>
                                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className='list-none w-full relative'>
                                            <Link to="/" className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Men</Button>
                                                <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                                                    <ul>
                                                        <li className='list-none w-full'>
                                                            <Link to="/" className='w-full'>
                                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>T-shirt</Button>
                                                            </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to="/" className='w-full'>
                                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Jeans</Button>
                                                            </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to="/" className='w-full'>
                                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Footwear</Button>
                                                            </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to="/" className='w-full'>
                                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Watch</Button>
                                                            </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to="/" className='w-full'>
                                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Pants</Button>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Link to="/" className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Women</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Link to="/" className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Kids</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Link to="/" className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Girls</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Link to="/" className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]'>Boys</Button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className='link transition text-[14px] font-[500]'><Button className='link transition !font-[500] hover:!text-[#ff5252 !py-4]'>Electronics</Button></Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className='link transition text-[14px] font-[500]'><Button className='link transition !font-[500] hover:!text-[#ff5252] !py-4'>Bags</Button></Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className='link transition text-[14px] font-[500]'><Button className='link transition !font-[500] hover:!text-[#ff5252] !py-4'>Footwear</Button></Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className='link transition text-[14px] font-[500]'><Button className='link transition !font-[500] hover:!text-[#ff5252] !py-4'>Groceries</Button></Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className='link transition text-[14px] font-[500]'><Button className='link transition !font-[500] hover:!text-[#ff5252] !py-4'>Beauty</Button></Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className='link transition text-[14px] font-[500]'><Button className='link transition !font-[500] hover:!text-[#ff5252] !py-4'>Wellness</Button></Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className='link transition text-[14px] font-[500]'><Button className='link transition !font-[500] hover:!text-[#ff5252] !py-4'>Jewellery</Button></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col_3 w-[20%]">
                        <p className="text-[14px] flex items-center gap-3 mb-0 mt-0"><IoRocketOutline className='text-[18px]' />Free internatinal Delivery</p>
                    </div>
                </div>
            </nav>
            <CategoryPanel setIsOpenCatPanel={setIsOpenCatPanel} isOpenCatPanel={isOpenCatPanel} />
        </>
    )
}
export default Navigation;