import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../Sidebar/style.css'
import Rating from '@mui/material/Rating';

import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from 'react-collapse';
import { FaAngleUp } from "react-icons/fa6";
import Button from '@mui/material/Button';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
const Sidebar = () => {
    const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
    const [isOpenAvailabilityFilter, setIsOpenAvailabilityFilter] = useState(true);
    const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);

    return (
        <aside className='sidebar py-5'>
            <div className="box">
                <h3 className='mb-3 pr-5 text-[16px] font-[600] flex items-center'>
                    Shop by Category
                    <Button className='!text-[#000] !w-[30px] !ml-auto !h-[30px] !min-w-[30px] !rounded-full'
                        onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
                        {
                            isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />
                        }
                    </Button></h3>
                <Collapse isOpened={isOpenCategoryFilter}>
                    <div className="scroll px-3 relative -left-[13px] ">
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Fashion" className='w-full' />
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Wellness" className='w-full' />
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Beauty" className='w-full' />
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Groceries" className='w-full' />
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Footwear" className='w-full' />
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Bags" className='w-full' />
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Electronics" className='w-full' />
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Jewellery" className='w-full' />

                    </div>
                </Collapse>
            </div>

            <div className="box !mt-3">
                <h3 className='mb-3 pr-5 text-[16px] font-[600] flex items-center'>
                    Availability
                    <Button className='!text-[#000] !w-[30px] !ml-auto !h-[30px] !min-w-[30px] !rounded-full'
                        onClick={() => setIsOpenAvailabilityFilter(!isOpenAvailabilityFilter)}>
                        {
                            isOpenAvailabilityFilter === true ? <FaAngleUp /> : <FaAngleDown />
                        }
                    </Button></h3>
                <Collapse isOpened={isOpenAvailabilityFilter}>
                    <div className="scroll px-3 relative -left-[13px] ">
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Available     (17)" className='w-full' />
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="In Stock      (10)" className='w-full' />
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Not Available (12)" className='w-full' />

                    </div>
                </Collapse>
            </div>

            <div className="box !mt-3">
                <h3 className='mb-3 pr-5 text-[16px] font-[600] flex items-center'>
                    Sizes
                    <Button className='!text-[#000] !w-[30px] !ml-auto !h-[30px] !min-w-[30px] !rounded-full'
                        onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}>
                        {
                            isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />
                        }
                    </Button></h3>
                <Collapse isOpened={isOpenSizeFilter}>
                    <div className="scroll px-3 relative -left-[13px] ">
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Small     (10)" className='w-full' />
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Medium    (6)" className='w-full' />
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Large     (9)" className='w-full' />
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="XL        (4)" className='w-full' />
                        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="XXL       (6)" className='w-full' />

                    </div>
                </Collapse>
            </div>

            <div className="box !mt-4 ">
                <h3 className='mb-3 pr-5 text-[16px] font-[600] flex items-center'>
                    Filter By Price
                </h3>
                <RangeSlider className='!mt-4'/>
                <div className="flex pt-4 pb-2 priceRange">
                    <span className='text-[13px]'>
                        From: <strong className="text-dark">Rs: {1000}</strong>
                    </span>
                    <span className="ml-auto text-[13px]">
                        From: <strong className="text-dark">Rs: {120000}</strong>
                    </span>
                </div>
            </div>

            <div className="box !mt-4 ">
                <h3 className='!mb-3 pr-5 text-[16px] font-[600] flex items-center'>
                    Filter By Ratings
                </h3>
            <div className="w-full">
                    <Rating name="size-small" defaultValue={5} size="small" readOnly/>
            </div>
                   <div className="w-full">
                    <Rating name="size-small" defaultValue={4} size="small" readOnly/>
            </div>
               <div className="w-full">
                    <Rating name="size-small" defaultValue={3} size="small" readOnly/>
            </div>
               <div className="w-full">
                    <Rating name="size-small" defaultValue={2} size="small" readOnly/>
            </div>
               <div className="w-full">
                    <Rating name="size-small" defaultValue={1} size="small" readOnly/>
            </div>
            </div>
        </aside>
    );
}

export default Sidebar;