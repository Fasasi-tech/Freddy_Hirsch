'use client'
import React, { useRef }  from 'react'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Logofx from '../../../public/Image_fx.png'
import Hero1 from '../../../public/hero1.png'
import Hero2 from '../../../public/hero2.png'
import Hero3 from '../../../public/Image_fx 4.png'
import meal1 from '../../../public/Image_fx14.jpg'
import meal2 from '../../../public/Image_fx (15).jpg'
import meal3 from '../../../public/Image_fx (17).jpg'
import meal4 from '../../../public/Image_fx (19).jpg'
import meal5 from '../../../public/Image_fx (20).jpg'
import meal6 from '../../../public/Image_fx (18).jpg'
import Navbar from '../Navbar/Navbar'
import { rokkitt } from '@/app/Fonts'
import Link from 'next/link'
import Image1 from '../../../public/image1.png'
import Image2 from '../../../public/image2.png'
import Image3 from '../../../public/image(3).png'
import Image4 from '../../../public/image4.png'
import Image5 from '../../../public/image5.png'
import Image6 from '../../../public/image6.png'
import { FaChevronCircleRight, FaChevronCircleLeft, FaQuoteLeft } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";

const images =[Logofx, Hero1, Hero2, Hero3 ]
const LandingPage = () => {
   const [[page, direction], setPage] = useState([0, 1]);

    const scrollRef = useRef(null);
    const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
      behavior: "smooth",
    });
  };


       useEffect(() => {
    const interval = setInterval(() => {
      setPage(([prevPage]) => [prevPage + 1, 1]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const imageIndex = (page + images.length) % images.length;

  const variants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction < 0 ? 100 : -100,
    }),
  };

 

const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        },
      },
    });
  }, [controls]);


  const testimonials = [
  {
    name: "Amanda Willy",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    name: "Amanda Willy",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    name: "Amanda Willy",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    name: "Amanda Willy",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    name: "Amanda Willy",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    name: "Amanda Willy",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
];

const repeated = [...testimonials, ...testimonials];

  return (
    <>
      <div  className="relative h-screen w-full overflow-hidden">
         <AnimatePresence custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={images[imageIndex]}
            alt={`Slide ${imageIndex}`}
            fill
            priority
            className="object-cover z-0"
          />
        </motion.div>
      </AnimatePresence>
        <div className="relative z-20">
          <Navbar />
          <section className="flex flex-col items-center justify-center  text-white mt-36">
            <div className='min-w-[580px] max-w-[580px]'>
                <h1 className={`text-7xl font-extrabold ${rokkitt.className}`}>African Heritage.</h1>
                <h1 className={`text-7xl font-extrabold ${rokkitt.className}`}>Global Innovation.</h1>
                <p className={`mt-4 text-4xl   ${rokkitt.className} text-center`}>Customized Ingredient Solutions for West African food Leader</p>
            </div>
            <div className='mt-4 flex items-center justify-between gap-6'>
                <Link href="" className='w-[245px] h-[66px] bg-[#9FA738] text-white flex items-center justify-center font-bold rounded-md'>
                  Discover Our Solutions
                </Link>
                <Link href="" className='w-[245px] h-[66px] bg-red-600 text-white flex items-center justify-center font-bold rounded-md'>
                  Request a Free Sample
                </Link>
            </div>
            
          
        </section>
        </div>
    </div>
    <div className='bg-white h-[695px] px-2 md:px-8 lg:px-30 py-24 w-full' >
     
      <div className='flex  items-center justify-between w-full'>
        <motion.div
          initial={{ x: -200, opacity: 0 }} // from top to bottom
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          viewport={{ once: true }} // only animates the first time it comes into view
          className=' max-w-[940px] h-[480]   rounded-2xl'>
          <h1
           
            className={`text-7xl ${rokkitt.className} font-bold`}
          >
            Combining Tradition with Innovation
          </h1>
          <p className={`text-3xl mt-4 ${rokkitt.className}`}>
            At <span className={`text-[#9FA738] ${rokkitt.className} font-bold`}>Freddy Hersch Nigeria,</span> our journey began with a simple
            but powerful mission - to blend the rich, diverse culinary heritage of Africa with cutting
            with cutting-edge global innovation. Founded to serve the evolving needs
            of the West African food industry, we have grown into a trusted B2B partner for large-scale manufacturers, Quick Service Restaurants (QSRs), 
            noodle producers, and food companies across the region.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }} // from top to bottom
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeIn' }}
          viewport={{ once: true }} // only animates the first time it comes into view
        className=''>
          <Image 
            src={Image3}
            width={500}
            height={500}
            alt='image'
             priority
          />
        </motion.div>
      </div>
    </div>
    <div className=' h-[695px] px-2 md:px-8 lg:px-30 bg-[#123c63]  relative w-full'>
      <h1 className={`text-6xl ${rokkitt.className} flex items-center justify-center font-bold  text-white pt-12`}>Our Solutions</h1>
        <button
          onClick={() => scroll("left")}
          className="absolute left-24 top-1/2 text-[#9FA738] -translate-y-1/2 z-10 p-2 rounded-full cursor-pointer"
        >
          <FaChevronCircleLeft className='text-4xl'/>
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-24 top-1/2 -translate-y-1/2 z-10 text-[#9FA738] p-2 rounded-full cursor-pointer"
        >
          <FaChevronCircleRight className='text-4xl'/>
        </button>
      <div  ref={scrollRef} className='mt-8 flex items-center overflow-x-auto space-x-12 scroll-smooth no-scrollbar justify-around gap-2 '>
        <div className='px-6 h-[25rem] backdrop-blur-md bg-white/10  rounded-2xl shadow-lg  py-6 min-w-[22rem] border border-white/20'>
          <Image 
            src={Image5}
            width={300}
            height={300}
            alt='image5'
          />
          <p className={`mt-4 text-white text-4xl font-medium text-center ${rokkitt.className}`}>Culinary</p>
        </div>
        <div className='px-6 h-[25rem] backdrop-blur-md bg-white/10  rounded-2xl shadow-lg  py-6 min-w-[22rem] border border-white/20'>
          <Image 
            src={Image4}
            width={300}
            height={300}
            alt='image4'
          />
          <p className={`mt-4 text-white text-4xl font-medium text-center ${rokkitt.className}`}>Snacks</p>
        </div>
        <div className='px-6 h-[25rem] backdrop-blur-md bg-white/10  rounded-2xl shadow-lg  py-6 min-w-[22rem] border border-white/20'>
          <Image 
            src={Image6}
            width={300}
            height={300}
            alt='image6'
          />
          <p className={`mt-4 text-white text-4xl font-medium text-center ${rokkitt.className}`}>Sweets</p>
        </div>
        <div className='px-6 h-[25rem] backdrop-blur-md bg-white/10  rounded-2xl shadow-lg  py-6 min-w-[22rem] border border-white/20'>
          <Image 
            src={Image2}
            width={300}
            height={300}
            alt='image2'
          />
          <p className={`mt-4 text-white text-4xl font-medium text-center ${rokkitt.className}`}>Textures & Stabilizers</p>
        </div>
        <div className='px-6 h-[25rem] backdrop-blur-md bg-white/10  rounded-2xl shadow-lg  py-6 min-w-[22rem] border border-white/20'>
          <Image 
            src={Image1}
            width={300}
            height={300}
            alt='image5'
          />
          <p className={`mt-4 text-white text-4xl font-medium text-center ${rokkitt.className}`}>Meat</p>
        </div> 
      </div>
    </div>
    <div className=' h-[695px] px-2 md:px-8 lg:px-30 overflow-hidden bg-[#123c63] w-full'>
      <h1 className={`text-6xl ${rokkitt.className} pb-16 flex items-center justify-center font-bold  text-white pt-12`}>Testimonials</h1>
        <motion.div 
          //  className="flex gap-x-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        className='flex items-center  justify-center gap-x-6'>
                {repeated.map((testimonial, index) => (
          <div
            key={index}
            className="min-h-[386px] min-w-[50rem] max-w-[50rem] backdrop-blur-md bg-white/10 rounded-2xl shadow-lg border border-white/20 overflow-hidden"
          >
            <FaQuoteLeft className="text-4xl text-white font-bold ml-8 mt-16" />
            <div className="flex items-center justify-start mt-4 ml-8 max-w-72 gap-x-2">
              {[...Array(5)].map((_, i) => (
                <RiStarSFill key={i} className="text-3xl text-yellow-500 mt-4" />
              ))}
            </div>
            <p className={`${rokkitt.className} text-xl text-white ml-8 mt-4`}>
              {testimonial.text}
            </p>
            <p className={`${rokkitt.className} text-[#9EA615] font-medium ml-8 mt-12`}>
              {testimonial.name}
            </p>
          </div>
        ))}
        </motion.div>
    </div>
    <div className='h-[810px] px-2 md:px-8 lg:px-30 overflow-hidden bg-[#123c63] w-full'>
        <h1 className={`text-6xl ${rokkitt.className} pb-2 flex items-center justify-center font-bold  text-white pt-12`}>What is New ?</h1>
        <p className={`text-xl ${rokkitt.className} pb-2 flex items-center justify-center font-bold  text-white pt-2`}>Stay updated on the latest trends, insights, and innovations in the food industry.</p>
        <div>
          <div className='mt-8 flex items-center overflow-x-auto space-x-12 scroll-smooth no-scrollbar justify-around gap-2 '>
            <motion.div
              initial={{ y: 200, opacity: 0 }} // from top to bottom
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeIn' }}
              viewport={{ once: true }}
            className='px-6 h-[25rem] backdrop-blur-md bg-white/10  rounded-2xl shadow-lg  py-6 min-w-[22rem] border border-white/20'>
              <div>
                <p className={`mt-4 text-[#9FA738] text-sm font-bold  ${rokkitt.className}`}>
                  May 20, 2025
                </p>
                <h3 className={`mt-4 text-white font-medium text-2xl pb-8 ${rokkitt.className}`}>Exploring the Future of African Flavours</h3>
              </div>
              <Image 
                src={meal1}
                width={400}
                height={400}
                alt='meal'
              />
           
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0 }} // from top to bottom
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeIn' }}
              viewport={{ once: true }}
              className='px-6 h-[25rem] backdrop-blur-md bg-white/10  rounded-2xl shadow-lg  py-6 min-w-[22rem] border border-white/20'>
              <div>
                <p className={`mt-4 text-[#9FA738] text-sm font-bold  ${rokkitt.className}`}>
                  May 20, 2025
                </p>
                <h3 className={`mt-4 text-white font-medium text-2xl pb-8 ${rokkitt.className}`}>New Advanced Food Stabilization</h3>
              </div>
              <Image 
                src={meal2}
                width={400}
                height={400}
                alt='meals'
              />
           
            </motion.div>
            <motion.div
                initial={{ y: 200, opacity: 0 }} // from top to bottom
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, ease: 'easeIn' }}
                viewport={{ once: true }}
                className='px-6 h-[25rem] backdrop-blur-md bg-white/10  rounded-2xl shadow-lg  py-6 min-w-[22rem] border border-white/20'>
              <div>
                <p className={`mt-4 text-[#9FA738] text-sm font-bold  ${rokkitt.className}`}>
                  May 20, 2025
                </p>
                <h3 className={`mt-4 text-white font-medium text-2xl pb-8 ${rokkitt.className}`}>5 Emerging Food Tech Startups in 2025</h3>
              </div>
              <Image 
                src={meal3}
                width={400}
                height={400}
                alt='meal'
              />
           
            </motion.div>
          </div>
        </div>
        <motion.div
           whileHover={{ scale: 1.05 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        className='flex items-center justify-center mt-8 '>
          <p className='px-12 py-4 text-white font-semibold bg-[#9FA738] rounded-xl cursor-pointer max-w-64 text-center '>Read More</p>
        </motion.div>
        
    </div>
     <div className='h-[810px] px-2 md:px-8 lg:px-30 overflow-hidden bg-[#123c63] w-full'>
        <h1 className={`text-6xl ${rokkitt.className} pb-2 flex items-center justify-center font-bold  text-white pt-12`}>Delicious Recipes</h1>
        <p className={`text-xl ${rokkitt.className} pb-2 flex items-center justify-center font-bold  text-white pt-2`}>Find culinary inspirations withour collections of recipes featuring &nbsp;<span className={`text-[#9FA738] ${rokkitt.className} font-bold`}>Freddy Hirsch</span> &nbsp; ingredients</p>
        <div>
          <div className='mt-8 flex items-center overflow-x-auto space-x-12 scroll-smooth no-scrollbar justify-around gap-2 ' >
            <motion.div
              initial={{ y: 200, opacity: 0 }} // from top to bottom
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeIn' }}
              viewport={{ once: true }}
            className='px-6 h-[22rem] backdrop-blur-md bg-white/10  rounded-2xl shadow-lg  py-6 min-w-[22rem] border border-white/20'>
              <Image 
                src={meal6}
                width={400}
                height={400}
                alt='meal'
              />
              <div>
                <h3 className={`mt-4 text-white text-center font-medium text-2xl pb-8 ${rokkitt.className}`}>Jollof Rice</h3>
              </div>
           
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0 }} // from top to bottom
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeIn' }}
              viewport={{ once: true }}
              className='px-6 h-[22rem] backdrop-blur-md bg-white/10  rounded-2xl shadow-lg  py-6 min-w-[22rem] border border-white/20'>
              
              <Image 
                src={meal4}
                width={400}
                height={400}
                alt='meals'
              />
              <div>
                <h3 className={`mt-4 text-white font-medium text-2xl pb-8 text-center ${rokkitt.className}`}>Suya Spiced Chicken Skewers</h3>
              </div>
            </motion.div>
            <motion.div
                initial={{ y: 200, opacity: 0 }} // from top to bottom
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, ease: 'easeIn' }}
                viewport={{ once: true }}
                className='px-6 h-[22rem] backdrop-blur-md bg-white/10  rounded-2xl shadow-lg  py-6 min-w-[22rem] border border-white/20'>
              <div>
              </div>
              <Image 
                src={meal5}
                width={400}
                height={400}
                alt='meal'
              />
              <h3 className={`mt-4 text-white font-medium text-2xl text-center pb-8 ${rokkitt.className}`}>Mango-Passion Fruit Sorbet</h3>
           
            </motion.div>
          </div>
        </div>
        <motion.div
           whileHover={{ scale: 1.05 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        className='flex items-center justify-center mt-8 '>
          <p className='px-12 py-4 text-white font-semibold bg-[#9FA738] rounded-xl cursor-pointer max-w-64 text-center '>Read More</p>
        </motion.div>
        
    </div>
   </>
  )
}

export default LandingPage