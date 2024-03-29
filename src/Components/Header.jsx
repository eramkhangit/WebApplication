import React from 'react'

export default function Header() {
    return (
        <header className='w-full h-auto'>
            <div id='home' className=' flex justify-center items-center '>
            <div
                className=' mt-[18rem] w-[300px] md:w[600px] text-center absolute p-2 text-white flex flex-col '>

                <h1 className=' font-bold text-2xl  md:text-3xl'>Web Application</h1>
                <h4 className='font-bold text-1xl mt-2'>Eram Khan</h4>
                <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam animi numquam et doloribus aut adipisci!</p>
            </div>
            </div>
            <img
                className='h-[25rem] w-[100%] md:w-full md:h-[30rem]'

                src="https://t3.ftcdn.net/jpg/04/23/62/24/360_F_423622471_o5gD3I9zNCoOd6GkQs26fJH4t7rTOmA3.jpg" alt="Image doesn't loaded" />

        </header>
    )
}
