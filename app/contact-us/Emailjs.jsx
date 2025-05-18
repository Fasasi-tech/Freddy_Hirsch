'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { robotoSlab } from '../Fonts';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn  } from "react-icons/fa";
import { toast } from 'react-toastify';

const Emailjs = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
    
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_SERVICEKEY,
            process.env.NEXT_PUBLIC_TEMPLATEKEY,
            form.current,
            process.env.NEXT_PUBLIC_TEMPLATEKEY3
          )
          .then(
            (result) => {
                toast.success('Message sent successfully!');
              form.current.reset();
            },
            (error) => {
                toast.error('Message sent successfully!');('Failed to send message, please try again.');
            }
          ).finally(() => {
            setLoading(false);
          });
      };


  return (
    <>
        <div className='flex flex-col items-center justify-center w-full min-h-screen'>
            <div className='w-[80%]'>
            <h2 className= 'text-3xl font-semibold' >Have Some Questions?</h2>
            <p className='mt-4 text-gray-600'>Please enter the email address where you wish to receive our answer.</p>
            
                <form ref={form} onSubmit={sendEmail}>
                    <div className='mt-8'>
                        <p className='text-sm text-gray-600 pb-2'>
                            Name
                        </p>
                        <input type="text" name="user_name" className='border border-gray-300 w-full p-4 outline-0' required />
                    </div>
                    <div className='mt-4'>
                        <p className='text-sm text-gray-600 pb-2'>
                            Email
                        </p>
                        <input type="email" name="user_email"  className='border border-gray-300 w-full p-4 outline-0' required />
                    </div>
                    <div className='mt-4'>
                        <p className='text-sm text-gray-600 pb-2'>
                        Subject
                        </p>
                        <input type="text" name="subject" className='border border-gray-300 w-full p-4 outline-0' required />
                    </div>
                    <div className='mt-4'>
                        <p className='text-sm text-gray-600 pb-2'>
                        Message
                        </p>
                        <textarea name="message" className='border border-gray-300 w-full h-48 p-4 outline-0' required />
                    </div>
                    <button type="submit" disabled={loading}
                        className={`bg-[#9FA738] text-white font-semibold px-16 py-2 mt-4 rounded-xl cursor-pointer ${
                            loading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}> 
                         {loading ? (
                                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                'Submit'
                            )}
                    </button>
                </form>
                <div>
                    <p className='flex items-center justify-center font-medium'>Follow us on our social platforms</p>
                    <div className='flex items-center justify-center gap-2 md:gap-8 lg:gap-12 mt-8'>
                        <div className=' p-2 rounded-full shadow-xl'>
                            <FaTwitter className='text-2xl ' />
                        </div>
                        <div className=' p-2 rounded-full shadow-xl'>
                            <FaFacebook className='text-2xl' />
                        </div>
                        <div className=' p-2 rounded-full shadow-xl'>
                            <FaInstagram className='text-2xl' />
                        </div>
                        <div className=' p-2 rounded-full shadow-xl'>
                            <FaLinkedinIn className='text-2xl'/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Emailjs