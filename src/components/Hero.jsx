import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
function Hero() {
    return (
        <>
            <div className="flex flex-col items-center mt-6 lg:mt-20">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    VirtualR build tools
                    <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                        {" "}
                        for developers
                    </span>
                </h1>
                <p className='mt-10 text-lg text-neutral-500 text-center max-w-3xl'>Empower your creativity and bring your VR app ideas to life with our
                    intuitive development tools. Get started today and turn your imagination
                    into immersive reality!
                </p>
                <div className='flex justify-center my-4'>
                    <a className='py-3 px-4 mx-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md' href="">start for free</a>
                    <a className='py-3 px-4 mx-3 rounded-md border' href="">Documentation</a>
                </div>
            </div>
            <div className='flex justify-center my-4'>
                <video
                    autoPlay
                    loop
                    muted
                    className='border border-orange-700 shadow-orange-400 mx-2 my-4 w-1/2 rounded-lg'
                >
                    <source src={video1} type='video/mp4' />
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    className='border border-orange-700 shadow-orange-400 mx-2 my-4 w-1/2 rounded-lg'
                >
                    <source src={video2} type='video/mp4' />
                </video>
            </div>
        </>
    )
}

export default Hero
