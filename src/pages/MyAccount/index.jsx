import Button from '@mui/material/Button';
import React from 'react';
import TextField from '@mui/material/TextField';
import AccountSidebar from '../../components/AccountSidebar';

const MyAccount = () => {
    return (
        <section className='py-10 w-full'>
            <div className="container flex gap-5">
                <div className="coll w-[20%]">
                    <AccountSidebar/>
                </div>
                <div className="col2 w-[50%]">
                    <div className="card bg-white p-5 shadow-md rounded-md">
                        <h2 className="pb-3">My Profile</h2>
                        <hr className='text-[rgba(0,0,0,0.2)]' />
                        <form className='!mt-5 '>
                            <div className="flex items-center gap-5">
                                <div className="w-[50%]">
                                    <TextField size="small" className='!w-full'
                                        label="Full Name" variant="outlined" />
                                </div>
                                <div className="w-[50%]">
                                    <TextField size="small" className='!w-full'
                                        label="Email" variant="outlined" />
                                </div>
                            </div>
                            <div className="flex !mt-4 items-center gap-5">
                                <div className="w-[50%]">
                                    <TextField size="small" className='!w-full'
                                        label="Phone Number" variant="outlined" />
                                </div>
                            </div>
                            <br></br>
                            <div className="flex items-center gap-4">
                                <Button className='btn-org btn-lg w-[100px] '>Save</Button>
                                <Button className='btn-org btn-border btn-lg w-[100px] '>Cancel</Button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyAccount;