import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Productitem from '../../components/Productitem';
import Button from '@mui/material/Button';
import { IoGrid } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import ProductitemListView from '../../components/ProductitemListView';
import Pagination from '@mui/material/Pagination';

const ProductListing = () => {
    const [isItemView, setIsItemView] = useState('grid');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <section className='py-5 pb-0'>
            <div className="container">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link className="link transition" underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                        className='link transition'
                    >
                        Fashion
                    </Link>
                </Breadcrumbs>
            </div>
            <div className="bg-white p-2 !mt-4">
                <div className="container flex gap-3">
                    <div className="sidebarWrapper h-full w-[20%] bg-white">
                        <Sidebar />
                    </div>
                    <div className="rightContent w-[80%] py-3">
                        <div className="bg-[#f1f1f1] p-2 w-full
                        !mb-4 rounded-md flex items-center justify-between">
                            <div className="col1 flex items-center itemViewAction">
                                <Button
                                    className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${isItemView === 'list' && 'active'}`}
                                    onClick={() => setIsItemView('list')}>
                                    <IoGrid className='text-[rgba(0,0,0,0.7)] text-[20px]' /></Button>
                                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]  ${isItemView === 'grid' && 'active'}`}
                                    onClick={() => setIsItemView('grid')}>
                                    <BsFillGrid3X3GapFill className='text-[rgba(0,0,0,0.7)] text-[20px]' /></Button>
                                <span className='text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]'>There are 27 products.</span>
                            </div>
                            <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                                <span className='text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]'>Sort By : </span>
                                <Button
                                    id="demo-positioned-button"
                                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    className='!bg-white !text-[#000] !text-[12px] !capitalize !border !border-[#000]'
                                >
                                    Sales, highest to lowest
                                </Button>
                                <Menu
                                    id="demo-positioned-menu"
                                    aria-labelledby="demo-positioned-button"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                >
                                    <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] !capitalize'>Sales, highest to lowest</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] !capitalize'>Relevance</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] !capitalize'>Name, A to Z</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] !capitalize'>Name, Z to A</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] !capitalize'>Price low to high</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] !capitalize'>Price high to low</MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <div className={`grid ${isItemView === 'grid' ? 'grid-cols-4 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-1'} gap-4`}>
                            {
                                isItemView === 'grid' ?
                                    (
                                        <>
                                            <Productitem />
                                            <Productitem />
                                            <Productitem />
                                            <Productitem />
                                            <Productitem />
                                            <Productitem />
                                            <Productitem />
                                            <Productitem />
                                            <Productitem />
                                            <Productitem />
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <ProductitemListView />
                                            <ProductitemListView />
                                            <ProductitemListView />
                                            <ProductitemListView />
                                            <ProductitemListView />
                                            <ProductitemListView />
                                            <ProductitemListView />
                                            <ProductitemListView />
                                            <ProductitemListView />
                                            <ProductitemListView />
                                        </>
                                    )
                            }
                        </div>
                        <div className="flex items-center justify-center !mt-10">
                            <Pagination count={10} showFirstButton showLastButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductListing;