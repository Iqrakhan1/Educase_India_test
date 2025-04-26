import React from 'react'

const InputBox = ({ name, type = 'text', placeholder, requireStar = "true" }) => {
    return (
        <div className="my-2 relative">
            <label className="text-sm  text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">{name}{requireStar && <span className='text-red-500'>*</span>} </label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 mt-2 text-sm"
            />
        </div>
    );
};

export default InputBox;
