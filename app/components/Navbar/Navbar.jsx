'use client'
import React from 'react'
import logo from '../../../public/freddyLogo.png'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion';

const Navbar = () => {
  return (

    <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
         className=' z-50 px-2 md:px-8 lg:px-30 flex flex-col'>
        <div className='flex items-center justify-between'>
            <div >
                <Image
                    src={logo}
                    alt='logo'
                    width={120}
                    height={18}
                />
            </div>
            <div className='w-[800px] h-[72px] bg-white flex items-center justify-around rounded-3xl'>
                <ul className="flex items-center text-lg text-[#123C63]   justify-around w-full">
                    <li className='flex items-center justify-center h-full flex-1 hover:text-[#9FA738] border-r-2 border-r-[#123C63]'>
                        <Link href=""  className="text-center w-full font-bold">Home</Link>
                    </li>
                    <li className='flex items-center justify-center h-full flex-1 hover:text-[#9FA738] border-r-2 border-r-[#123C63] '>
                        <Link href=""  className="text-center w-full font-bold">About Us</Link>
                    </li>
                    <li className='flex items-center justify-center h-full flex-1 hover:text-[#9FA738] border-r-2 border-r-[#123C63]'>
                        <Link href=""  className="text-center w-full font-bold">Our Solutions</Link>
                    </li>
                    <li className='flex items-center justify-center h-full flex-1 hover:text-[#9FA738] border-r-2 border-r-[#123C63]'>
                        <Link href=""  className="text-center w-full font-bold">News</Link>
                    </li>
                    <li className='flex items-center justify-center h-full flex-1 hover:text-[#9FA738] '>
                        <Link href=""  className="text-center w-full font-bold">Careers</Link>
                    </li>
                    
                </ul>
            </div>
            <div className='w-[141px] h-[72px] bg-[#9EA615] hover:bg-[#123C63]  flex items-center justify-around  text-white font-bold  rounded-xl cursor-pointer'>
           
                <Link className='' href="/contact-us  ">Contact Us</Link>
                   
            </div>
        </div>
    
    </motion.div>

  )
}

export default Navbar