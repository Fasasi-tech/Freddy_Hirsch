'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../../public/freddyLogo.png'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn  } from "react-icons/fa";
import { PiAddressBookLight } from "react-icons/pi";
import { MdOutlinePhone, MdMailOutline } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa";
//bg-[#0C0A00]
const Footer = () => {
  return (
    <div className='px-2  py-4 md:py-12 bg-white '>
        {/* <div className=' px-2  lg:px-30 border border-b-gray-600 pb-16'>
          <h1 className='text-white text-lg md:text-3xl font-semibold'> Want to get free Weekly Marketing News, Resources & insights?</h1>
          <p className='text-gray-300 text-md mt-4'>Subscribe to our newsletter to get free Marketing resources and stay in the loop with the latest tips and strategies to supercharge your marketing efforts.</p>
          <form>
            <div className='flex items-center justify-start gap-2 md:gap-4 mt-8'>
              <input type='email' placeholder='Enter your email' className='bg-white text-gray-700 py-3  w-96 rounded-lg px-4 text-md outline-0'/>
              <button type='submit' className='bg-[#9FA738] text-white font-semibold py-3 px-6 rounded-lg cursor-pointer '>Subscribe Now</button>       
            </div>
          </form>  
        </div> */}
        <div className=' px-2 sm:px-2 flex lg:px-30 lg:flex-row flex-col items-center justify-between gap-x-8 w-full pb-16'>
          <div className='lg:w-[30%] w-full'>
            <Image 
              src={logo}
                alt='logo'
                width={120}
                height={10}
            />
            <div>
              <p className='text-black text-md'>We are Africa's leading indigenous producer and distributor of spice, extracts, flavours, and ingredient. We proudly serve thousands of customers across retail, food processing and healthcare industries.</p>
            </div>
              <div className='flex  items-center justify-start gap-2 mt-4'>
                  <div className=' p-2 rounded-full shadow-xl'>
                      <FaTwitter className='text-xl text-black' />
                  </div>
                  <div className=' p-2 rounded-full shadow-xl'>
                      <FaFacebook className='text-xl text-black' />
                  </div>
                  <div className=' p-2 rounded-full shadow-xl'>
                      <FaInstagram className='text-xl text-black' />
                  </div>
                  <div className=' p-2 rounded-full shadow-xl'>
                      <FaLinkedinIn className='text-xl text-black'/>
                  </div>
              </div>
            </div>
            <div className='text-black flex flex-col lg:flex-row sm:items-start lg:items-center justify-between gap-x-2 mt-12 lg:w-[60%] sm:w-full'>
              <div className='flex  items-start lg:items-center justify-between gap-8 '>
                <div className='w-full'>
                  <h3 className='font-bold mb-4'>Page Links</h3>
                  <p className='mb-2'>Home</p>
                  <p className='mb-2'>Our Solutions</p>
                  <p className='mb-2'>About Us</p>
                </div>
                <div className='w-full'>
                  <h3 className='font-bold mb-4'>Quick Links</h3>
                  <p className='mb-2'>Contact us</p>
                  <p className='mb-2'>Media</p>
                  <p className='mb-2'>News</p>
                  <p className='mb-2'>Media</p>
                </div>
              </div>
              <div className='lg:w-[56%] sm:w-full'>
                <h3 className='font-bold mb-4'>Contact Us</h3>
                <div className='flex items-center justify-start gap-2 mb-4'>
                  <div className='p-2 rounded-full bg-[#9FA738]'>
                    <PiAddressBookLight className='text-lg text-black' />
                  </div>
                  <p>33 Mobolaji Johnson Road, Alausa, Ikeja, Lagos, Nigeria.</p>
                </div> 
                <div className='flex items-center justify-start gap-2 mb-4'>
                  <div className='p-2 rounded-full bg-[#9FA738]'>
                    <MdOutlinePhone className='text-lg text-black'/>
                  </div>
                  <p>+234-1453-2699</p>
                </div>
                <div className='flex items-center justify-start gap-2 mb-4'>
                  <div className='p-2 rounded-full bg-[#9FA738]'>
                    < MdMailOutline />
                  </div>
                  <p>Reception.Nigeria@Freddyhirsch.co.za</p>
                </div>                 
              </div>             
            </div>
          </div>
          <div className=' lg:px-30 lg:flex items-center justify-between gap-x-8 w-full pb-16'>
            <p className='text-black mt-12'>Copyright © 2025 | <span className='text-[#9FA738] font-bold'>FREDDY HIRSCH</span>. All rights reserved.</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-4 right-4 bg-[#9FA738] text-black p-3  shadow-md hover:bg-[#86912e] transition-all z-50"
              aria-label="Scroll to top"
            >
              <FaAngleUp className='text-xl'/>
            </button>
          </div>      
    </div>
  )
}

export default Footer