import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { pricingOptions } from '../constants/data'

function Pricing() {
    return (
        <div className='mt-20'>
            <div className='text-center my-8 text-3xl sm:text-5xl lg:text-6xl tracking-wide'>
                Pricing
            </div>
            <div className='flex flex-wrap'>
                {pricingOptions.map((item, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                        <div className='p-10 border border-neutral-700 rounded-xl'>
                            <p className='text-4xl mb-8'>
                                {item.title}
                                {item.title === "Pro" &&
                                    (
                                        <span className='bg-gradient-to-r from-orange-500 to-red-400 
                                text-transparent bg-clip-text text-xl mb-4 ml-2'>(Most Popular)</span>
                                    )}
                            </p>

                            <p className='mb-8'>
                                <span className='text-5xl mr-2 mt-6'>{item.price}</span>
                                <span className='text-neutral-400 tracking-tight'>{" "}/Month</span>
                            </p>
                            <ul>
                                {item.features.map((pro, index) => (
                                    <li key={index}  className='flex items-center mt-8'>
                                        <CheckCircle2 />
                                        <span className='ml-2'>{pro}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href='#' className='inline-flex justify-center items-center text-center mt-20 w-full 
                            h-12 p-5 tracking-tight text-xl hover:bg-orange-900 border border-orange-900
                            rounded-lg transition duration-200'>Subscribe</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Pricing
