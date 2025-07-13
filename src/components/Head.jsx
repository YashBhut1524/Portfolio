import React from 'react'
import { Hero, Navbar } from '../page'
import { Button } from '.'

const Head = () => {
    return (
        <div className="relative max-w-7xl mx-auto">
            <Navbar />
            <Hero />
            <div className="absolute bottom-20 left-0 right-0 w-full flex justify-center items-center">
                <a href="#about" className="w-fit">
                <Button name="Let's work together" isBeam containerClass="sm:w-fit sm:min-w-50 bg-[#2c2c2c] text-white rounded-md px-10 cursor-pointer" />
                </a>
            </div>
        </div>
    )
}

export default Head