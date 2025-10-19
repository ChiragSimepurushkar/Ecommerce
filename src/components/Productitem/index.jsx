import React, { useContext } from 'react';
import '../Productitem/style.css';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";
import { CiShare1 } from "react-icons/ci";
import Tooltip from '@mui/material/Tooltip';
import { MyContext } from '../../App';
const Productitem = () => {
    const context =useContext(MyContext);
    return (
        <div className="Productitem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
            <div className="group imgWrapper w-[100%] overflow-hidden rounded-md relative">
                <Link to="/">
               <div className="img  h-[250px] overflow-hidden ">
                 <img src="https://serviceapi.spicezgold.com/download/1742447109721_dezire-crafts-blue-backpacks-15-l-dc-bags-334-product-images-rv95uppwtj-0-202309290238.webp" 
                className='w-full' />
                <img src="https://serviceapi.spicezgold.com/download/1742447109721_dezire-crafts-blue-backpacks-15-l-dc-bags-334-product-images-rv95uppwtj-3-202309290238.jpg"
                className='opacity-0 top-0 left-0 w-full absolute group-hover:opacity-100 transition-all duration-700 group-hover:scale-105' />
               </div>
                </Link>
                <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-[#ff5252] text-white rounded-lg p-1 text-[12px] font-[500]'>10%</span>
                
                <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px]
                 transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
                      <Tooltip title="Like" placement="left-start">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black 
                    hover:!bg-[#ff5252] hover:!text-white group'>
                        <IoIosHeartEmpty className='text-[18px] !text-black group-hover:text-white'/>
                        </Button>
                        </Tooltip>
                          <Tooltip title="Comapre" placement="left-start">
                         <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black 
                    hover:!bg-[#ff5252] hover:!text-white group'>
                        <IoIosGitCompare className='text-[18px] !text-black group-hover:text-white'/>
                        </Button>
                        </Tooltip>
                          <Tooltip title="Zoom" placement="left-start">
                         <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black 
                    hover:!bg-[#ff5252] hover:!text-white group' onClick={()=>context.setOpenProductDetailsModel(true)}>
                        <MdZoomOutMap className='text-[18px] !text-black group-hover:text-white'/>
                        </Button>
                        </Tooltip>
                          <Tooltip title="Share" placement="left-start">
                         <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black 
                    hover:!bg-[#ff5252] hover:!text-white group'>
                        <CiShare1 className='text-[18px] !text-black group-hover:text-white'/>
                        </Button>
                        </Tooltip>
                </div>
            </div>
            <div className="info p-3 py-5 pb-6 px-8 w-[75%]">
                <h6 className='text-[13px] !font-[400]'><Link to="/" className='link transition-all'>Soylent Green</Link></h6>
                <h3 className='mb-1 text-[13px] title mt-1 font-[500] text-[#000]'><Link to="/" className='link transition-all'>
                Siril Georgette Pink Color Saree with Blouse pieces</Link></h3>
                <Rating name="size-small" defaultValue={2} size="small" readOnly/>
                <div className="flex items-center gap-4">
                    <span className='oldPrice line-through text-gray-500 font-[500] text-[15px]'>$58.00</span>
                    <span className='price text-[#ff5252] text-[15px] font-[600]'>$58.00</span>
                </div>
            </div>
        </div>
    );
}

export default Productitem;