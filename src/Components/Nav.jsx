// import React from 'react'
import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";

export default function Nav() {

    // __________ Manage Menu According to screen size
    const [toggle , setToggle ] = useState(false) 

    return (
        <nav className='rounded-0 '>

            <div className='p-2 h-14 max-w-[1240px] bg-indigo-200 flex items-center justify-between mx-auto'>

                {/* Logo */}
                <div
                    className=' p-1 text-2xl font-bold text-indigo-900'>
                    <MdOutlineWeb />
                </div>

                {/* Toggle Menu */}
                { 
                toggle ? <IoClose onClick={ () => setToggle(!toggle)} className=' text-black text-2xl '/> : <IoMenu onClick={ () => {
                    setToggle(!toggle)
                }
            } className='block text-black text-2xl md:hidden'/>}


                {/* Large Screen  */}
                <div
                    className=' hidden  md:flex  font-semibold cursor-pointer'>
                    <a href='#' className='mx-[10px] '>Home</a>
                    <a href='#' className='mx-[10px] '>About</a>
                    <a href='#' className='mx-[10px] '>Contact Us</a>
                </div>

                <button className='hidden md:block cursor-pointer'>
                    LogIn/SignIn
                </button>


                {/* Responsive Menu (Small Screen ) */}
                <div
                    className={`transition-transform z-[1000] pt-4 rounded-lg absolute   top-[56px] text-center w-full h-[20rem] bg-black text-white cursor-pointer flex flex-col md:hidden font-semibold ${ toggle ? 'left-[0]' : 'left-[-100%]' }`}>
                    <a href='#'
                        className='p-2 border-b-[2px] border-gray-50'>Home</a>
                    <a href='#'
                        className=' p-2 border-b-[2px] border-gray-50'>Courses</a>
                    <a href='#'
                        className='p-2 border-b-[2px] border-gray-50'>Contact Us</a>

                    <button className='relative top-[4rem] bg-blue-300 w-[8rem] text-center mx-auto rounded-lg text-black '>
                        LogIn/SignIn
                    </button>

                </div>

            </div>

        </nav>
    )
}
