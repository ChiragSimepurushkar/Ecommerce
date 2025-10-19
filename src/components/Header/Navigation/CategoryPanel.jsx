import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoClose } from "react-icons/io5";
import "../Navigation/style.css"
import CategoryCollapse from '../../CategoryCollapse';
const CategoryPanel = (props) => {

    const toggleDrawer = (newOpen) => () => {
        props.setIsOpenCatPanel(newOpen);
    };
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
            <h3 className='p-3 text-[15px] font-[500] flex items-center justify-between'>Shop By Category < IoClose className='cursor-pointer text-[20px]' /></h3>
            <CategoryCollapse/>
        </Box>
    );
    return (
        <div>
            <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default CategoryPanel;