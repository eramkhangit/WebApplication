import React from 'react'

export default function ProductCard({productName ,productIndo}) {


    return (
        <div>

            <div
                className='p-0 hover:bg-gray-400 duration-200 m-1 mx-auto bg-blue-400  h-[18rem] md:w-[15rem] md:h-[25rem] md:mb-2 rounded-xl shadow-md md:p-3'>

                <div
                    className=' w-[6rem] h-[6rem] rounded-full border-2 flex flex-col mx-auto mb-4 border-blue-900'>

                    <img className='rounded-full' alt="Image is not loaded" />

                </div>

                <div className='text-center mb-6'>
                    <p
                        className='text-3xl font-bold text-white '
                    >{productName}</p>
                    <p
                        className='text-lg md:text-xl p-3 text-center text-slate-800'
                    >{productIndo}</p>
                </div>

            </div>

        </div>
    )
}
