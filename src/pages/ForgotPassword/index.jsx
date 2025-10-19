import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { MyContext } from '../../App';
const ForgotPassword = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);

    const context = useContext(MyContext)
    const history = useNavigate();
    return (
        <section className='section py-10 flex justify-center'>
            <div>
                <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10'>
                    <h3 className='text-center text-[18px] text-black'>Forgot Password</h3>
                    <form className='w-full !mt-5'>
                        <div className="form-group w-full !mb-5 relative">
                            <TextField
                                type={isShowPassword === true ? 'text' : 'password'}
                                id="password" label="New Password" name="name" variant="outlined" className='w-full' />
                            <Button onClick={() => setIsShowPassword(!isShowPassword)}
                                className='!absolute !rounded-full !text-[#000] top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px]'>
                                {
                                    isShowPassword === false ? <FaEye className='text-[20px] opacity-75' /> : <IoIosEyeOff className='!text-[20px] opacity-75' />
                                }
                            </Button>
                        </div>
                        <div className="form-group w-full !mb-5 relative">
                            <TextField
                                type={isShowPassword2 === true ? 'text' : 'password'}
                                id="confirm_password" label="Confirm Password" variant="outlined" className='w-full' name='password' />
                            <Button onClick={() => setIsShowPassword2(!isShowPassword2)}
                                className='!absolute !rounded-full !text-[#000] top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px]'>
                                {
                                    isShowPassword2 === false ? <FaEye className='text-[20px] opacity-75' /> : <IoIosEyeOff className='!text-[20px] opacity-75' />
                                }
                            </Button>
                        </div>

                        <div className="flex items-center w-full !mt-3 !mb-3">
                            <Button className="btn-org btn-lg w-full">Change Password</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ForgotPassword;