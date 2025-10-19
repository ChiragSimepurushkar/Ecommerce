import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LuBaggageClaim } from "react-icons/lu";
const CheckOut = () => {
    return (
        < section className='py-10' >
            <div className='container flex gap-5'>
                <div className="leftCol w-[70%]">
                    <div className="card bg-white shadow-md p-5 rounded-md w-full">
                        <h1>Billing Details</h1>
                        <form className='w-full !mt-5'>
                            <div className="flex items-center gap-5 pb-5">
                                <div className='col w-[50%]'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        className='w-full'
                                        label="Full Name"
                                        size="small"
                                    />
                                </div>
                                <div className='col w-[50%]'>
                                    <TextField
                                        required
                                        type="email"
                                        id="outlined-required"
                                        className='w-full'
                                        label="Email ID"
                                        size="small"
                                    />
                                </div>
                            </div>
                            <h6 className='text-[14px] font-[500] !mb-3'>Street Address</h6>
                            <div className="flex items-center gap-5 pb-5">
                                <div className='col w-[100%]'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        className='w-full'
                                        label="House number and Street name"
                                        size="small"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-5 pb-5">
                                <div className='col w-[100%]'>
                                    <TextField
                                        id="outlined-required"
                                        className='w-full'
                                        label="Apatment,suite, unit, etc. (optional)"
                                        size="small"
                                    />
                                </div>
                            </div>
                            <h6 className='text-[14px] font-[500] !mb-3'>Town/City</h6>
                            <div className="flex items-center gap-5 pb-5">
                                <div className='col w-[100%]'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        className='w-full'
                                        label="City"
                                        size="small"
                                    />
                                </div>
                            </div>
                            <h6 className='text-[14px] font-[500] !mb-3'>State/Country</h6>
                            <div className="flex items-center gap-5 pb-5">
                                <div className='col w-[100%]'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        className='w-full'
                                        label="State"
                                        size="small"
                                    />
                                </div>
                            </div>
                            <h6 className='text-[14px] font-[500] !mb-3'>Pincode/ZIP</h6>
                            <div className="flex items-center gap-5 pb-5">
                                <div className='col w-[100%]'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        className='w-full'
                                        label="ZIP Code"
                                        size="small"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-5 pb-5">
                                <div className='col w-[50%]'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        className='w-full'
                                        label="Phone Number"
                                        size="small"
                                    />
                                </div>
                                <div className='col w-[50%]'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        className='w-full'
                                        label="Email Address"
                                        size="small"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="rightCol w-[30%]">
                    <div className="card shadow-md bg-white p-5 rounded-md">
                        <h2 className="mb-4">Your Order</h2>
                        <div className="flex items-center justify-between py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
                            <span className="text-[14px] font-[600]">Product</span>
                            <span className="text-[14px] font-[600]">Subtotal</span>
                        </div>
                        <div className="!mb-5 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2">
                        <div className="flex items-center justify-between py-2">
                            <div className="part1 flex items-center gap-3">
                                <div className="cursor-pointer img w-[50px] h[50px] object-cover overflow-hidden rounded-md group">
                                    <img
                                        src="https://serviceapi.spicezgold.com/download/1742447109721_dezire-crafts-blue-backpacks-15-l-dc-bags-334-product-images-rv95uppwtj-3-202309290238.jpg"
                                        className='w-full transition-all group-hover:scale-105' />
                                </div>
                                <div className="info">
                                    <h4 className="text-[14px]">A-Line Kurti With Sh...</h4>
                                    <span className="text-[13px]">Qty : 1</span>
                                </div>
                                
                            </div>
                            <span className="text-[14px] font-[500]">₹1,300.00</span>
                        </div>
                         <div className="flex items-center justify-between py-2">
                            <div className="part1 flex items-center gap-3">
                                <div className="cursor-pointer img w-[50px] h[50px] object-cover overflow-hidden rounded-md group">
                                    <img
                                        src="https://serviceapi.spicezgold.com/download/1742447109721_dezire-crafts-blue-backpacks-15-l-dc-bags-334-product-images-rv95uppwtj-3-202309290238.jpg"
                                        className='w-full transition-all group-hover:scale-105' />
                                </div>
                                <div className="info">
                                    <h4 className="text-[14px]">A-Line Kurti With Sh...</h4>
                                    <span className="text-[13px]">Qty : 1</span>
                                </div>
                                
                            </div>
                            <span className="text-[14px] font-[500]">₹1,300.00</span>
                        </div>
                         <div className="flex items-center justify-between py-2">
                            <div className="part1 flex items-center gap-3">
                                <div className="cursor-pointer img w-[50px] h[50px] object-cover overflow-hidden rounded-md group">
                                    <img
                                        src="https://serviceapi.spicezgold.com/download/1742447109721_dezire-crafts-blue-backpacks-15-l-dc-bags-334-product-images-rv95uppwtj-3-202309290238.jpg"
                                        className='w-full transition-all group-hover:scale-105' />
                                </div>
                                <div className="info">
                                    <h4 className="text-[14px]">A-Line Kurti With Sh...</h4>
                                    <span className="text-[13px]">Qty : 1</span>
                                </div>
                                
                            </div>
                            <span className="text-[14px] font-[500]">₹1,300.00</span>
                        </div>
                         <div className="flex items-center justify-between py-2">
                            <div className="part1 flex items-center gap-3">
                                <div className="cursor-pointer img w-[50px] h[50px] object-cover overflow-hidden rounded-md group">
                                    <img
                                        src="https://serviceapi.spicezgold.com/download/1742447109721_dezire-crafts-blue-backpacks-15-l-dc-bags-334-product-images-rv95uppwtj-3-202309290238.jpg"
                                        className='w-full transition-all group-hover:scale-105' />
                                </div>
                                <div className="info">
                                    <h4 className="text-[14px]">A-Line Kurti With Sh...</h4>
                                    <span className="text-[13px]">Qty : 1</span>
                                </div>
                                
                            </div>
                            <span className="text-[14px] font-[500]">₹1,300.00</span>
                        </div>
                         <div className="flex items-center justify-between py-2">
                            <div className="part1 flex items-center gap-3">
                                <div className="cursor-pointer img w-[50px] h[50px] object-cover overflow-hidden rounded-md group">
                                    <img
                                        src="https://serviceapi.spicezgold.com/download/1742447109721_dezire-crafts-blue-backpacks-15-l-dc-bags-334-product-images-rv95uppwtj-3-202309290238.jpg"
                                        className='w-full transition-all group-hover:scale-105' />
                                </div>
                                <div className="info">
                                    <h4 className="text-[14px]">A-Line Kurti With Sh...</h4>
                                    <span className="text-[13px]">Qty : 1</span>
                                </div>
                                
                            </div>
                            <span className="text-[14px] font-[500]">₹1,300.00</span>
                        </div>
                        </div>
                        <Button className='btn-org btn-lg w-full flex gap-3 items-center'>
                            <LuBaggageClaim className='text-[20px]'/>
                            Checkout</Button>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default CheckOut;