import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home/index.jsx'
import ProductListing from './pages/ProductListing/index.jsx'
import ProductDetails from './pages/ProductDetails/index.jsx'
import { createContext } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from './components/ProductZoom/index.jsx';
import ProductDetailsComponent from './components/ProductDetailsComponent/index.jsx';
import Login from './pages/Login/index.jsx';
import Register from './pages/Register/index.jsx';
import CartPage from './pages/Cart/index.jsx';
import Verify from './pages/Verify/index.jsx';

import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from './pages/ForgotPassword/index.jsx';
import Checkbox from '@mui/material/Checkbox';
import CheckOut from './pages/Checkout/index.jsx';
import MyAccount from './pages/MyAccount/index.jsx';
import MyList from './pages/MyList/index.jsx';
import Orders from './pages/Orders/index.jsx';

const MyContext = createContext();
function App() {

  const [openProductDetailsModel, setOpenProductDetailsModel] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const [fullWidth, setFullWidth] = React.useState(false);
  const [openCartPanel, setOpenCartPanel] = React.useState(false);
  const [isLogin,setIsLogin]=useState(true);
  const handleCloseProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };
  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };
  const openAlertBox = (status, msg) => {
    if (status === 'Success') {
      toast.success(msg);
    } else {
      toast.error(msg);
    }
  }
  const values = {
    setOpenProductDetailsModel,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin
  }

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route path={"/productListing"} exact={true} element={<ProductListing />} />
            <Route path={"/product/:id"} exact={true} element={<ProductDetails />} />
            <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/cart"} exact={true} element={<CartPage />} />
            <Route path={"/verify"} exact={true} element={<Verify />} />
            <Route path={"/forgot-password"} exact={true} element={<ForgotPassword />} />
            <Route path={"/checkout"} exact={true} element={<CheckOut />} />
            <Route path={"/my-account"} exact={true} element={<MyAccount />} />
            <Route path={"/my-list"} exact={true} element={<MyList />} />
            <Route path={"/my-orders"} exact={true} element={<Orders/>} />

          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>
      <Toaster />
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetailsModel}
        onClose={handleCloseProductDetailsModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='productDetailsModel'
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModelContainer relative">
            <Button onClick={handleCloseProductDetailsModel}
              className='!h-[40px] !text-[#000] !rounded-full !w-[40px] 
            !min-w-[40px] !absolute top-[15px] !bg-[#f1f1f1] right-[15px]'><IoCloseCircleOutline className='!text-[20px]' /></Button>
            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] py-8 px-8 pr-16 productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default App;
export { MyContext };
