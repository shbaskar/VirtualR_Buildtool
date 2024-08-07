import React from 'react'
import code from "../assets/code.jpg"
import { CheckCircle2 } from 'lucide-react'
import { checklistItems } from '../constants/data'
function WorkSection() {
    return (
        <div className='mt-20 '>
            <div className='text-center mb-8'>
                <div className='text-3xl sm:text-5xl lg:text-6xl tracking-wide'>Accelerate your <span className='bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text'>coding workflow</span></div>
            </div>
            <div className='flex flex-wrap justify-center'>
                <div className='p-2 w-full lg:w-1/2'>
                    <img src={code} alt="code image" />
                </div>
                <div className='pt-12 w-full lg:w-1/2'>
                    {checklistItems.map((item, index) => (
                        
                            <div key={index} className='flex mb-12'>
                                <div className='text-green-400 bg-neutral-900 h-10 
                                w-10 rounded-full mx-6 p-2 justify-center items-center'>
                                    <CheckCircle2 />
                                </div>
                                <div>
                                    <h5 className='mt-1 mb-1 text-xl'>{item.title}</h5>
                                    <p className='text-md text-neutral-500'>{item.description}</p>
                                </div>
                            </div>
                    
                    ))}
                </div>
            </div>

        </div>
    )
}

export default WorkSection
