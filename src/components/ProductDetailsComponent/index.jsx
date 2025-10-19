import Button from '@mui/material/Button';
import React, { useState } from 'react';
import QtyBox from '../QtyBox';
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import Rating from '@mui/material/Rating';
const ProductDetailsComponent = () => {
        const [productActionIndex, setProductActionIndex] = useState(null);
    return (
        <>
            <h1 className='text-[24px] font-[600] !mb-2'>Chikankari Women Kurta</h1>
            <div className="flex items-center gap-3">
                <span className='text-gray-400 text-[13px]'>Brands :
                    <span className='font-[500] opacity-75 text-black'>House of Chikankari
                    </span></span>
                <Rating name="size-small" defaultValue={2} size="small" readOnly />
                <span className='text-[13px] cursor-pointer '>Review (4)</span>
            </div>
            <div className="flex items-center gap-4 !mt-4">
                <span className='oldPrice line-through text-gray-500 font-[500] text-[20px]'>$58.00</span>
                <span className='price text-[#ff5252] text-[20px] font-[600]'>$48.00</span>
                <span className='text-[14px]'>Available In Stock: <span className='font-bold text-[14px] text-green-600'>147 Items</span></span>
            </div>
            <p className='!mt-3 pr-10 !mb-5'>
                o fix the issue where the thumbnail opacity isn't updating when the main slider is swiped or navigated, you need to synchronize your React state (slideIndex) with the Swiper's internal state using the onSlideChange eve
            </p>
            <div className="flex gap-3 items-center">
                <span className='text-[16px]'>Size: </span>
                <div className="flex items-center gap-1 actions">
                    <Button className={`${productActionIndex === 0 ? '!bg-[#ff5252] !text-white' : ''}`} onClick={() => setProductActionIndex(0)}>S</Button>
                    <Button className={`${productActionIndex === 1 ? '!bg-[#ff5252] !text-white' : ''}`} onClick={() => setProductActionIndex(1)}>M</Button>
                    <Button className={`${productActionIndex === 2 ? '!bg-[#ff5252] !text-white' : ''}`} onClick={() => setProductActionIndex(2)}>L</Button>
                    <Button className={`${productActionIndex === 3 ? '!bg-[#ff5252] !text-white' : ''}`} onClick={() => setProductActionIndex(3)}>XL</Button>
                </div>
            </div>
            <p className='text-[14px]  !mt-5 !mb-2 text-[#000]'>Free Shipping (Est. Delivery Time 2-3 Days)</p>
            <div className='flex items-center gap-4 py-4'>
                <div className="qtyBoxWrapper w-[70px]">
                    <QtyBox />
                </div>
                <Button className='btn-org flex gap-2'><FaShoppingCart className='text-[22px]' />Add to Cart</Button>
            </div>
            <div className="flex items-center gap-4 !mt-4">
                <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'>
                    <IoMdHeartEmpty className='text-[18px]' />Add to Wishlist</span>
                <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'>
                    <IoIosGitCompare className='text-[18px]' />Add to Compare</span>
            </div>
        </>
    );
}

export default ProductDetailsComponent;