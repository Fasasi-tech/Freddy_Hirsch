// 'use client'
// import React, {useState} from 'react'
// import logo from '../../../public/freddyLogo.png'
// import Image from 'next/image'
// import Link from 'next/link'
// import { BiMenuAltRight } from "react-icons/bi";
// import { IoClose } from "react-icons/io5";

// import { motion, AnimatePresence  } from 'framer-motion';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false)
//     const toggleSidebar = () => setIsOpen(!isOpen);
//     const closeSidebar = () => setIsOpen(false);
//   return (

//     <motion.div
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//          className=' z-50 px-2 md:px-8 lg:px-30 flex flex-col'>
//         <div className='flex items-center justify-between'>
//             <div >
//                 <Link href='/'>
//                     <Image
//                     src={logo}
//                     alt='logo'
//                     width={120}
//                     height={18}
//                     />
//                 </Link>
                
//             </div>
//             <div className='hidden w-[40rem] h-[3.5rem] bg-white md:flex items-center justify-around rounded-xl'>
//                 <ul className="flex items-center text-md text-[#123C63]   justify-around w-full">
//                     <li className='flex items-center justify-center h-full flex-1 hover:text-[#9FA738] border-r-2 border-r-[#123C63]'>
//                         <Link href="/"  className="text-center w-full ">Home</Link>
//                     </li>
//                     <li className='flex items-center justify-center h-full flex-1 hover:text-[#9FA738] border-r-2 border-r-[#123C63] '>
//                         <Link href="/"  className="text-center w-full ">About Us</Link>
//                     </li>
//                     <li className='flex items-center justify-center h-full flex-1 hover:text-[#9FA738] border-r-2 border-r-[#123C63]'>
//                         <Link href="/"  className="text-center w-full ">Our Solutions</Link>
//                     </li>
//                     <li className='flex items-center justify-center h-full flex-1 hover:text-[#9FA738] border-r-2 border-r-[#123C63]'>
//                         <Link href="/"  className="text-center w-full ">News</Link>
//                     </li>
//                     <li className='flex items-center justify-center h-full flex-1 hover:text-[#9FA738] '>
//                         <Link href="/"  className="text-center w-full ">Careers</Link>
//                     </li>
                    
//                 </ul>
//             </div>
//             <div className='hidden w-[8.8rem] h-[3.5rem] bg-[#9EA615] hover:bg-[#123C63]  md:flex items-center justify-around  text-white rounded-xl cursor-pointer'>
           
//                 <Link className='' href="/  ">Contact Us</Link>
                   
//             </div>
//              <div className="md:hidden">
//           <button onClick={toggleSidebar}>
//              <BiMenuAltRight className='text-white text-2xl' />
//           </button>
//         </div>

//         </div>

//       <AnimatePresence>
//         {isOpen && (
//           <div className='fixed inset-0 z-50 flex justify-end'>
//             {/* Overlay */}
//             <div className='absolute inset-0 bg-black bg-opacity-50' onClick={closeSidebar}></div>

//             {/* Sidebar */}
//             <motion.div
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ duration: 0.3 }}
//               className='relative w-[100vw] h-screen bg-gradient-to-b from-[#94182A] to-[#2E070D] shadow-lg p-4 flex flex-col space-y-6'
//             >
//               <div className='flex justify-between items-center mb-6 mx-8'>
//                 <Image src={logo} alt='logo' width={100} height={18} />
//                 <button onClick={closeSidebar}>
//                   <IoClose  className='text-2xl text-white' />
//                 </button>
//               </div>
//               <ul className="space-y-4 text-lg flex-col text-white mt-24 mx-8 ">
//                 <li>
//                     <Link href='/' onClick={closeSidebar} className='block border-b pt-4 border-b-gray-400'>
//                     Home
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href='/' onClick={closeSidebar} className='block border-b pt-4 border-b-gray-400'>
//                     About Us
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href='/' onClick={closeSidebar} className='block border-b pt-4 border-b-gray-400'>
//                     Our Solutions
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href='/' onClick={closeSidebar} className='block border-b pt-4 border-b-gray-400'>
//                     News
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href='/' onClick={closeSidebar} className='block border-b pt-4 border-b-gray-400'>
//                     Careers
//                     </Link>
//                 </li>
//                 <li className='mt-16 '>
//                     <Link href='/contact-us'onClick={closeSidebar} className='block text-center border py-2 border-gray-400 rounded-3xl'>
//                         Contact Us
//                     </Link>
//                 </li>
//                 </ul>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </motion.div>



//   )
// }

// export default Navbar

'use client'
import React, { useState, useEffect } from 'react'
import logo from '../../../public/freddyLogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  // Disable scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='z-50 px-2 md:px-8 lg:px-30 flex flex-col'
    >
      <div className='flex items-center justify-between'>
        <div >
          <Link href='/'>
            <Image
              src={logo}
              alt='logo'
              width={120}
              height={18}
              
            />
          </Link>
        </div>
        <div className='hidden w-[40rem] h-[3.5rem] bg-white md:flex items-center justify-around rounded-xl'>
          <ul className="flex items-center text-md text-[#123C63] justify-around w-full">
            <li className='flex items-center justify-center h-full flex-1 hover:text-[#9FA738] border-r-2 border-r-[#123C63]'>
              <Link href="/" className="text-center w-full ">Home</Link>
            </li>
            <li className='flex items-center justify-center h-full flex-1 hover:text-[#9FA738] border-r-2 border-r-[#123C63] '>
              <Link href="/" className="text-center w-full ">About Us</Link>
            </li>
            <li className='flex items-center justify-center h-full flex-1 hover:text-[#9FA738] border-r-2 border-r-[#123C63]'>
              <Link href="/" className="text-center w-full ">Our Solutions</Link>
            </li>
            <li className='flex items-center justify-center h-full flex-1 hover:text-[#9FA738] border-r-2 border-r-[#123C63]'>
              <Link href="/" className="text-center w-full ">News</Link>
            </li>
            <li className='flex items-center justify-center h-full flex-1 hover:text-[#9FA738] '>
              <Link href="/" className="text-center w-full ">Careers</Link>
            </li>
          </ul>
        </div>
        <div className='hidden w-[8.8rem] h-[3.5rem] bg-[#9EA615] hover:bg-[#123C63]  md:flex items-center justify-around  text-white rounded-xl cursor-pointer'>
          <Link className='' href="/  ">Contact Us</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleSidebar}>
            <BiMenuAltRight className='text-white text-4xl' />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className='fixed inset-0 z-50 flex justify-end'>
            {/* Overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-50' onClick={closeSidebar}></div>

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className='relative w-[100vw] h-screen bg-gradient-to-b from-[#94182A] to-[#2E070D] shadow-lg p-4 flex flex-col space-y-6'
            >
              <div className='flex justify-between items-center mb-6 mx-8'>
                <Image src={logo} alt='logo' width={100} height={18} />
                <button onClick={closeSidebar}>
                  <IoClose className='text-2xl text-white' />
                </button>
              </div>
              <ul className="space-y-4 text-lg flex-col text-white mt-24 mx-8 ">
                <li>
                  <Link href='/' onClick={closeSidebar} className='block border-b pt-4 border-b-gray-400'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='/' onClick={closeSidebar} className='block border-b pt-4 border-b-gray-400'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href='/' onClick={closeSidebar} className='block border-b pt-4 border-b-gray-400'>
                    Our Solutions
                  </Link>
                </li>
                <li>
                  <Link href='/' onClick={closeSidebar} className='block border-b pt-4 border-b-gray-400'>
                    News
                  </Link>
                </li>
                <li>
                  <Link href='/' onClick={closeSidebar} className='block border-b pt-4 border-b-gray-400'>
                    Careers
                  </Link>
                </li>
                <li className='mt-16 '>
                  <Link href='/contact-us' onClick={closeSidebar} className='block text-center border py-2 border-gray-400 rounded-3xl'>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar
