import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from "react-icons/go";
import Rating from '@mui/material/Rating';
import { IoCloseCircleOutline } from "react-icons/io5";
const CartItems = (props) => {
    const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
    const openSize = Boolean(sizeAnchorEl);
    const [selectedSize, setSelectedSize] = useState(props.size);

        const [qtyAnchorEl, setQtyAnchorEl] = useState(null);
    const openQty = Boolean(qtyAnchorEl);
    const [selectedQty, setSelectedQty] = useState(props.qty);

    const handleClickSize = (event) => {
        setSizeAnchorEl(event.currentTarget);
    };
    const handleCloseSize = (value) => {
        setSizeAnchorEl(null);
        if (value) {
            setSelectedSize(value);
        }
    };

        const handleClickQty = (event) => {
        setQtyAnchorEl(event.currentTarget);
    };
    const handleCloseQty = (value) => {
        setQtyAnchorEl(null);
        if (value) {
            setSelectedQty(value);
        }
    };

    return (
        <div className="cartItem w-full p-3 flex items-center gap-4 pb-5  border-b border-[rgba(0,0,0,0.1)]">
            <div className="img w-[15%] rounded-md overflow-hidden">
                <Link to="/product/4664" className='group'>
                    <img src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                        className='w-full group-hover:scale-105 transition-all' />
                </Link>
            </div>
            <div className="info w-[85%] relative">
                <IoCloseCircleOutline className='cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all' />
                <span className="text-[13px]">Sangria</span>
                <h3 className="text-[15px]">
                    <Link className="link">A-Line Kurti With Sharara & Dupatta</Link>
                </h3>
                <Rating name="size-small" defaultValue={2} size="small" readOnly />

                <div className="flex items-center gap-4 !mt-2">
                    <div className='relative'>
                        <span onClick={handleClickSize}
                            className="flex cursor-pointer rounded-md py-1 px-2 font-[600] text-[11px] bg-[#f1f1f1] items-center justify-center">
                            Size: {selectedSize} <GoTriangleDown />
                        </span>
                        <Menu
                            id="size-menu"
                            anchorEl={sizeAnchorEl}
                            open={openSize}
                            onClose={handleCloseSize}
                            slotProps={{
                                list: {
                                    'aria-labelledby': 'basic-button',
                                },
                            }}
                        >
                            <MenuItem onClick={() => handleCloseSize('S')}>S</MenuItem>
                            <MenuItem onClick={() => handleCloseSize('M')}>M</MenuItem>
                            <MenuItem onClick={() => handleCloseSize('L')}>L</MenuItem>
                            <MenuItem onClick={() => handleCloseSize('XL')}>XL</MenuItem>
                            <MenuItem onClick={() => handleCloseSize('XL')}>XXL</MenuItem>
                        </Menu>
                    </div>
                    <div className='relative'>
                        <span className="flex cursor-pointer rounded-md py-1 px-2 font-[600] text-[11px]
                         bg-[#f1f1f1] items-center justify-center"onClick={handleClickQty}>
                            Qty: {selectedQty} <GoTriangleDown/>
                        </span>
                        <Menu
                            id="size-menu"
                            anchorEl={qtyAnchorEl}
                            open={openQty}
                            onClose={handleCloseQty}
                            slotProps={{
                                list: {
                                    'aria-labelledby': 'basic-button',
                                },
                            }}
                        >
                            <MenuItem onClick={() => handleCloseQty(1)}>1</MenuItem>
                            <MenuItem onClick={() => handleCloseQty(2)}>2</MenuItem>
                            <MenuItem onClick={() => handleCloseQty(3)}>3</MenuItem>
                            <MenuItem onClick={() => handleCloseQty(4)}>4</MenuItem>
                            <MenuItem onClick={() => handleCloseQty(5)}>5</MenuItem>
                            <MenuItem onClick={() => handleCloseQty(6)}>6</MenuItem>
                            <MenuItem onClick={() => handleCloseQty(7)}>7</MenuItem>
                            <MenuItem onClick={() => handleCloseQty(8)}>8</MenuItem>
                            <MenuItem onClick={() => handleCloseQty(9)}>9</MenuItem>
                            <MenuItem onClick={() => handleCloseQty(10)}>10</MenuItem>
                            <MenuItem onClick={() => handleCloseQty(11)}>11</MenuItem>
                        </Menu>
                    </div>
                </div>
                <div className="flex items-center gap-4 !mt-2">
                    <span className='price text-[14px] font-[600]'>$58.00</span>
                    <span className='oldPrice line-through text-gray-500 font-[500] text-[14px]'>$58.00</span>
                    <span className='price text-[#ff5252] text-[14px] font-[600]'>55% OFF</span>

                </div>
            </div>
        </div>
    );
}

export default CartItems;