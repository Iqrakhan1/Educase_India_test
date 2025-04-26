import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className='mt-[420px] px-5 pb-6 '>
            <div className=' w-[231px] '>
                <h1 className=' text-[28px] text-left text-[#1D2226] font-medium '>Welcome to PopX </h1>
                <p className='text-[#1D2226] opacity-60 font-normal text-[17.8px]'>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                </p>

            </div>
            <Link to="/signup">
                <button className='bg-[#6C25FF] w-full text-center text-white p-3 rounded-[6px] mt-7  font-medium cursor-pointer'>Create Account</button>
            </Link>
            <Link to="/login">
                <button className='bg-[#6C25FF4B] w-full text-center text-[#1D2226] p-3 rounded-[6px] mt-[10px]  font-medium cursor-pointer'>Already Registered? Login</button>
            </Link>
        </div >
    )
}

export default Home