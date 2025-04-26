import React from 'react'
import { Link } from 'react-router-dom'
import InputBox from './InputBox'


const SignUp = () => {
    return (
        <div className='px-5 pb-6 '>
            <div className=' w-[231px] my-7'>
                <h1 className=' text-[28px] text-left text-[#1D2226] font-medium '>Create your PopX account </h1>


            </div>
            <div className='mb-26'>

                <InputBox name="Full Name" type="text" placeholder="Enter your full name" />
                <InputBox name="Phone number" type='number' placeholder="Enter your phone number" />
                <InputBox name="Email address" type='email' placeholder="Enter your email " />
                <InputBox name="Password" type='password' placeholder="Enter password" />
                <InputBox name="Company name" type='text' placeholder="Enter company name" />
                <p>Are you an Agency?<span className='text-red-500'>*</span></p>
                <label className="mr-4">
                    <input type="radio" name="agency" className="mr-2" defaultChecked="true" /> Yes
                </label>
                <label>
                    <input type="radio" name="agency" className="mr-2" /> No
                </label>
            </div>
            <Link to="/account">
                <button className='bg-[#6C25FF] w-full text-center text-white p-3 rounded-[6px] mt-16  font-medium cursor-pointer'>Create Account</button>
            </Link>

        </div >
    )
}

export default SignUp