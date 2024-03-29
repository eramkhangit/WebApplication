import React from 'react'
import ProductCard from './ProductCard'

export default function ProductSection() {

    const product1 ={
        productName : 'Product One',
        productInfo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa quo modi nesciunt voluptates officia!'
    }
    const product2 ={
        productName : 'Product Two',
        productInfo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa quo modi nesciunt voluptates officia!'
    }
    const product3 ={
        productName : 'Product Three',
        productInfo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa quo modi nesciunt '
    }
    const product4 ={
        productName : 'Product Four',
        productInfo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa quo modi nesciunt voluptates officia!'
    }
    const product5 ={
        productName : 'Product Five',
        productInfo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa quo modi nesciunt voluptates officia!'
    }

    return (
        <div>
            <div id='courses' className=' h-auto  flex-wrap flex-col items-center text-center'>
                <div
                    className='w-full h-auto flex flex-wrap flex-col items-center'>

                    <p className='text-indigo-800 font-bold text-2xl text-center md:text-4xl '>
                        Our Product Section</p>

                    <div className='w-36 h-1 border-b-4 border-yellow-400 rounded-2xl mt-3 mb-12 md:mt-4 md:w-[12rem]'
                    ></div>

                </div>

            </div>

            <div
                className=' mx-auto flex flex-col justify-evenly md:flex-wrap md:flex-row '>

                <ProductCard productName={product1.productName} productIndo={product1.productInfo}  />

                <ProductCard   productName={product2.productName} productIndo={product2.productInfo} />

                <ProductCard   productName={product3.productName} productIndo={product3.productInfo} />

                <ProductCard   productName={product4.productName} productIndo={product4.productInfo} />

                <ProductCard   productName={product5.productName} productIndo={product5.productInfo}/>

            </div>
        </div>
    )
}
