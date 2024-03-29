import React from 'react'

export default function Cards({image="Not Loaded" ,digit="Not loaded" ,courses="Not loaded" }) {
    console.log(digit,courses);
    return (
        <div>
            <div
                className='p-1 w-[20rem] m-1 mx-auto bg-blue-900 h-[15rem] md:h-[19rem] md:w-[16rem] md:mb-2 rounded-xl shadow-md md:p-3'>
                <div
                    className='border-2 border-white w-[66px] h-[60px] rounded-full flex flex-col mx-auto mb-4'>

                    <img 
                    className='w-[66px] h-[60px] rounded-full' src={image}  />

                </div>

                <div className='text-center mt-6'>
                    <p
                        className=' text-3xl font-bold text-white '
                    >{digit}</p>
                    <p
                        className='text-lg font-bold md:text-xl p-3 text-center text-white'
                    >{courses}</p>
                </div>

            </div>
        </div>
    )
}
