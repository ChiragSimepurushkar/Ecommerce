import React, { useContext } from 'react';
import { FaShippingFast } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { FaGifts } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoCloseCircleOutline } from "react-icons/io5";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

import Drawer from '@mui/material/Drawer';
import { MyContext } from '../../App.jsx';
import CartPanel from '../CartPanel/index.jsx';
import { createContext } from 'react'

const Footer = () => {
   const context = useContext(MyContext); 
    return (
        <>
            <footer className='py-6 bg-[#f8f8f8] border-1 border-[rgba(0,0,0,0.1)]'>
                <div className="container">
                    <div className="flex items-center justify-center py-8 gap-10 pb-8">
                        <div className="col flex items-center justify-center flex-col group w-[15%]">
                            <FaShippingFast className='group-hover:-translate-y-1 text-[50px] transition-all duration-300 group-hover:text-[#ff5252]' />
                            <h3 className='text-[16px] font-[600] mt-3'>Free Shipping</h3>
                            <p className='text-[12px] font-[500]'>For all Orders Over $100</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col group w-[15%]">
                            <FaBoxesPacking className='group-hover:-translate-y-1 text-[50px] transition-all duration-300 group-hover:text-[#ff5252]' />
                            <h3 className='text-[16px] font-[600] mt-3'>30 Days Returns</h3>
                            <p className='text-[12px] font-[500]'>For an Exchange product</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col group w-[15%]">
                            <GiWallet className='group-hover:-translate-y-1 text-[50px] transition-all duration-300 group-hover:text-[#ff5252]' />
                            <h3 className='text-[16px] font-[600] mt-3'>Secure Payment</h3>
                            <p className='text-[12px] font-[500]'>Payment Card Accepted</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col group w-[15%]">
                            <FaGifts className='group-hover:-translate-y-1 text-[50px] transition-all duration-300 group-hover:text-[#ff5252]' />
                            <h3 className='text-[16px] font-[600] mt-3'>Special Gifts</h3>
                            <p className='text-[12px] font-[500]'>For all Orders Over $100</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col group w-[15%]">
                            <MdSupportAgent className='group-hover:-translate-y-1 text-[50px] transition-all duration-300 group-hover:text-[#ff5252]' />
                            <h3 className='text-[16px] font-[600] mt-3'>Support 24/7</h3>
                            <p className='text-[12px] font-[500]'>FContact us Anytime</p>
                        </div>
                    </div>
                    <br></br>
                    <hr />
                    <div className="footer flex py-8">
                        <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
                            <h2 className='text-[18px] font-[600] !mb-4'>Contact Us</h2>
                            <p className='text-[13px] font-[400] pb-4'>Classushop - Mega Super Store<br></br> 580-Union Trade Center France</p>
                            <Link className='link text-[13px]' to="mailto:simepurushkarchirag84@gmail.com">sales@yourcomapny.com</Link>
                            <span className='text-[22px] font-[600] block w-full !mt-3 !mb-5 text-[#ff5252]'>(+91) 9359025745</span>
                            <div className="flex items-center gap-2">
                                <IoMdChatbubbles className='text-[40px] text-[#ff5252]' />
                                <span className='text-[16px] font-[600]'>Online Chat <br></br>Get Expert Help</span>
                            </div>
                        </div>
                        <div className="part2 w-[40%] flex pl-10">
                            <div className="part2_col1 w-[50%]">
                                <h2 className='text-[18px] font-[600] !mb-4'>Products</h2>
                                <ul className='list'>
                                    <li className='list-none text-[14px] w-full !mb-2'>
                                        <Link to="/" className='link'>Price Drop</Link>
                                    </li>
                                    <li className='list-none text-[14px] w-full !mb-2'>
                                        <Link to="/" className='link'>New Products</Link>
                                    </li>
                                    <li className='list-none text-[14px] w-full !mb-2'>
                                        <Link to="/" className='link'>Best Sales</Link>
                                    </li>
                                    <li className='list-none text-[14px] w-full !mb-2'>
                                        <Link to="/" className='link'>Contact Us</Link>
                                    </li>
                                    <li className='list-none text-[14px] w-full !mb-2'>
                                        <Link to="/" className='link'>SiteMap</Link>
                                    </li>
                                    <li className='list-none text-[14px] w-full !mb-2'>
                                        <Link to="/" className='link'>Stores</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="part2_col1 w-[50%] pl-10">
                                <h2 className='text-[18px] font-[600] !mb-4'>Comapny</h2>
                                <ul className='list'>
                                    <li className='list-none text-[14px] w-full !mb-2'>
                                        <Link to="/" className='link'>Delivery</Link>
                                    </li>
                                    <li className='list-none text-[14px] w-full !mb-2'>
                                        <Link to="/" className='link'>Legal Notice</Link>
                                    </li>
                                    <li className='list-none text-[14px] w-full !mb-2'>
                                        <Link to="/" className='link'>Teams And Conditions of Use</Link>
                                    </li>
                                    <li className='list-none text-[14px] w-full !mb-2'>
                                        <Link to="/" className='link'>About Us</Link>
                                    </li>
                                    <li className='list-none text-[14px] w-full !mb-2'>
                                        <Link to="/" className='link'>Secure Payment</Link>
                                    </li>
                                    <li className='list-none text-[14px] w-full !mb-2'>
                                        <Link to="/" className='link'>Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="part3 w-[35%] pl-8 flex-col pr-8">
                            <h2 className='text-[18px] font-[600] !mb-4'>Subscribe to newsletter</h2>
                            <p className='text-[13px]'>Subcribe to our latest newsletter to get news about special discounts</p>
                            <form className='!mt-5'>
                                <input type="text" className='!mb-4 w-full h-[45px] focus:border-[rgba(0,0,0,0.3)] border outline-none pl-4 pr-4 rounded-sm' placeholder='Your Email Address' />
                                <Button className='btn-org'>SUBSCRIBE</Button>
                                <FormControlLabel control={<Checkbox />} label="I agree the terms and conditions and the privacy policy " />
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            <div className=" bg-white bottomStrip py-3 border-t border-[rgba(0,0,0,0.1)]">
                <div className="container flex items-center justify-between">
                    <ul className='flex items-center gap-2'>
                        <li className='list-none'>
                            <Link to="/" target="_blank"
                                className='h-[35px] w-[35px] rounded-full 
                            border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'>
                                <FaLinkedin className='text-[20px] group-hover:bg-[#ff5252] group-hover:text-white' />
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link to="/" target="_blank"
                                className='h-[35px] w-[35px] rounded-full 
                            border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'>
                                <SiGmail className='text-[20px] group-hover:bg-[#ff5252] group-hover:text-white' />
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link to="/" target="_blank"
                                className='h-[35px] w-[35px] rounded-full 
                            border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'>
                                <FaSquareInstagram className='text-[20px] group-hover:bg-[#ff5252] group-hover:text-white' />
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link to="/" target="_blank"
                                className='h-[35px] w-[35px] rounded-full 
                            border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'>
                                <IoLogoYoutube className='text-[20px] group-hover:bg-[#ff5252] group-hover:text-white' />
                            </Link>
                        </li>
                    </ul>
                    <p className='mb-0 text-[13px] text-center'>&copy;
                        2025- Ecommerce Software by Chirag Simepurushkar
                    </p>
                    <div className="flex items-center">
                        <img src="https://ecommerce-frontend-view.netlify.app/carte_bleue.png" />
                        <img src="https://ecommerce-frontend-view.netlify.app/visa.png" />
                        <img src="https://ecommerce-frontend-view.netlify.app/master_card.png" />
                        <img src="https://ecommerce-frontend-view.netlify.app/american_express.png" />
                        <img src="https://ecommerce-frontend-view.netlify.app/paypal.png" />
                    </div>
                </div>
            </div>


            {/* Cart Panel */}
            <Drawer open={context.openCartPanel}
                onClose={context.toggleCartPanel(false)}
                anchor={"right"}
                className='cartPanel'>
                <div className="border-b overflow-hidden border-[rgba(0,0,0,0.1)] cartPanel w-[400px] flex items-center justify-between py-3 px-4 gap-3">
                    <h4>Shopping Cart (1)</h4>
                    <IoCloseCircleOutline className='text-[20px] cursor-pointer'
                        onClick={context.toggleCartPanel(false)} />
                </div>
                <CartPanel />
            </Drawer>
        </>
    );
}

export default Footer;