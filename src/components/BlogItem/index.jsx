import React from 'react';
import { IoTimeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
const BlogItem = () => {
    return ( 
        <div className="blogItem group">
            <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
                <img className='w-full transition-all group-hover:scale-105 group-hover:rotate-1 'alt="blog image" src="https://serviceapi.spicezgold.com/download/1750304462017_1000005912.jpg"/>
                 <span className='flex items-center p-1 text-[12px] font-[500] gap-2 rounded-md bg-[#ff5252] justify-center text-white absolute bottom-[15px] right-[15px] z-50'>
                    <IoTimeOutline className='text-[16px]'/> 5 APRIL, 2023
                 </span>
            </div>
            <div className="info py-4">
                  <h2 className='text-[15px] font-[600] text-black'>
                    <Link to="/" className='link'>Nullam ullamcotper ornare molestien</Link>
                  </h2>
                  <p className='text-[13px] !mb-4 font-[400] text-[rgba(0,0,0,0.8)]'>Using these ensures that the placeholder text looks natural.....</p>
           <Link className='link font-[500] text-[14px] flex items-center gap-1'>Read More<FaLongArrowAltRight/></Link>
            </div>
        </div>
     );
}
 
export default BlogItem;