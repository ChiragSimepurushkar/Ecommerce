import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import { MyContext } from '../../App';
import { IoIosHeart } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import Button from '@mui/material/Button';
import { LuLogOut } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

const Header = () => {
    const context = useContext(MyContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <header className='bg-white'>
            <div className='top-strip py-2 border-t-[1px] border-gray-200 border-b-[1px]'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='col1 w-[50%]'>
                            <p className='text-[12px] font-[500]'>
                                Get up to 50% off new season styles, limited time only
                            </p>
                        </div>
                        <div className='col2 flex items-center justify-end'>
                            <ul className='flex items-center gap-3'>
                                <li className='list-none'>
                                    <Link to="/help-center" className='text-[13px] link font-[500] transition'>Help center</Link>
                                </li>
                                <li className='list-none'>
                                    <Link to="/order-tracking" className='text-[13px] link font-[500] transition'>Order Tracking</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header py-4 border-b-[1px] border-gray-200'>
                <div className='container flex items-center justify-content-between'>
                    <div className='col1 w-[25%]'>
                        <Link to={"/"}><img src="/logo.png" className="w-[200px]" /></Link>
                    </div>
                    <div className='col2 w-[40%]'>
                        <Search />
                    </div>
                    <div className='col3 w-[35%] flex items-center pl-7'>
                        <ul className='flex items-center justify-end gap-3 w-full'>
                            {
                                context.isLogin == false ?
                                    (<li className='list-none'>
                                        <Link to="/login" className='link transition text-[17px] font-[500]'>Login</Link> / <Link className='link transition text-[17px] font-[500]' to="/register">Register</Link>
                                    </li>)
                                    :
                                    (<>
                                        <Button className="!text-[#000] myAccountWrap flex items-center gap-3 cursor-pointer" onClick={handleClick}>
                                            <Button className='!w-[40px] !rounded-full !bg-[#f1f1f1] !min-w-[40px] !h-[40px]'>
                                                <FaRegUser className='text-[16px] text-[rgba(0,0,0,0.7)]' /></Button>
                                            <div className="info flex flex-col">
                                                <h4 className="leading-3 text-[14px] text-[rgba(0,0,0,0.7)] !font-[700] !mb-0 capitalize text-left justify-start">Chirag Simepurushkar</h4>
                                                <span className="text-[13px] text-[rgba(0,0,0,0.7)] !font-[400] capitalize text-left justify-start">chirag.ecommerce.dev@example.com</span>
                                            </div>
                                        </Button>
                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            slotProps={{
                                                paper: {
                                                    elevation: 0,
                                                    sx: {
                                                        overflow: 'visible',
                                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                        mt: 1.5,
                                                        '& .MuiAvatar-root': {
                                                            width: 32,
                                                            height: 32,
                                                            ml: -0.5,
                                                            mr: 1,
                                                        },
                                                        '&::before': {
                                                            content: '""',
                                                            display: 'block',
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 14,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: 'background.paper',
                                                            transform: 'translateY(-50%) rotate(45deg)',
                                                            zIndex: 0,
                                                        },
                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <Link to="/my-account" className='w-full block'>
                                                <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                    <FaRegUser className='text-[18px]' /> <span className='text-[14px]'>My Account</span>
                                                </MenuItem>
                                            </Link>
                                            <Link to="/my-orders" className='w-full block'>
                                            <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                <FaShoppingCart className='text-[18px]' /><span className='text-[14px]'> Orders</span>
                                            </MenuItem>
                                            </Link>
                                            <Link to="/my-list" className='w-full block'>
                                            <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                <IoIosHeart className='text-[18px]' /> <span className='text-[14px]'>My List</span>
                                            </MenuItem>
                                            </Link>
                                            <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                <LuLogOut className='text-[18px]' /><span className='text-[14px]'> Logout</span>
                                            </MenuItem>
                                        </Menu>
                                    </>

                                    )
                            }
                            <li>
                                <Tooltip title="compare">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <FaCodeCompare />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Wish List">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <  FaRegHeart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="cart">
                                    <IconButton aria-label="cart" onClick={context.toggleCartPanel(true)}>
                                        <StyledBadge badgeContent={4} color="secondary">
                                            < MdOutlineShoppingCart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Navigation />
        </header>
    )
}
export default Header;