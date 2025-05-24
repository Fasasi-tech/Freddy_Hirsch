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
import solutions from '../../../public/Oursolutions.png'
import Navbar from '../Navbar/Navbar'
import { rokkitt } from '@/app/Fonts'
import testimonial from '../../../public/Testimonials.png'
import recipe from '../../../public/recipedoodle.png'
import Link from 'next/link'
import Image1 from '../../../public/image1.png'
import Image2 from '../../../public/image2.png'
import Image3 from '../../../public/image(3).png'
import Image4 from '../../../public/image4.png'
import Image5 from '../../../public/image5.png'
import Image6 from '../../../public/image6.png'
import { FaChevronCircleRight, FaChevronCircleLeft, FaQuoteLeft } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import halal from '../../../public/halal.png'
import fssc from '../../../public/fssc.png'

const images =[Logofx, Hero1, Hero3 ]
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
          <section className="flex flex-col items-center justify-center  text-white mt-20  lg:mt-28">
            <div className='w-full text-center md:min-w-[36.25rem] md:max-w-[36.25rem]'>
                <h1 className={`text-3xl md:text-2xl lg:text-7xl font-bold lg:font-extrabold ${rokkitt.className}`}>African Heritage.</h1>
                <h1 className={`text-3xl md:text-2xl lg:text-7xl font-bold lg:font-extrabold ${rokkitt.className}`}>Global Innovation.</h1>
                <p className={`mt-4 text-xl   ${rokkitt.className} text-center`}>Customized Ingredient Solutions for West African food Leader</p>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0 space-y-4">
              <Link
                href=""
                className="w-[14rem] h-[3rem] bg-[#9FA738] hover:bg-[#003A62] text-white flex items-center justify-center font-bold rounded-md"
              >
                Discover Our Solutions
              </Link>
              <Link
                href=""
                className="w-[14rem] h-[3rem] bg-red-600 hover:bg-[#003A62] text-white flex items-center justify-center font-bold rounded-md"
              >
                Request a Free Sample
              </Link>
            </div>
            
          
        </section>
        </div>
    </div>
    <div className='bg-white h-auto lg:h-[43.43rem] px-2 md:px-8 lg:px-30 py-24 w-full' >
     
      <div className='flex flex-col lg:flex-row z-10 justify-between w-full gap-10'>
        <motion.div
          initial={{ x: -200, opacity: 0 }} // from top to bottom
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          viewport={{ once: true }} // only animates the first time it comes into view
          className=' w-full lg:w-1/2'>
          <h1
           
            className={`text-3xl lg:text-5xl ${rokkitt.className} font-bold`}
          >
            Combining Tradition with Innovation
          </h1>
          <p className={`text-lg lg:text-2xl mt-4 ${rokkitt.className}`}>
            At <span className={`text-[#9FA738] ${rokkitt.className} font-bold`}>Freddy Hersch Nigeria,</span> our journey began with a simple
            but powerful mission - to blend the rich, diverse culinary heritage of Africa with cutting
            with cutting-edge global innovation. Founded to serve the evolving needs
            of the West African food industry, we have grown into a trusted B2B partner for large-scale manufacturers, Quick Service Restaurants (QSRs), 
            noodle producers, and food companies across the region.
          </p>
          <p className='text-[#9FA738] mt-4 cursor-pointer'>Learn More</p>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }} // from top to bottom
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeIn' }}
          viewport={{ once: true }} // only animates the first time it comes into view
        className='w-full lg:w-1/2 h-[30rem]  relative'>
          <Image 
            src={Image3}
             fill
            className="object-contain"
            alt='image'
             priority
          />
        </motion.div>
      </div>
    </div>
   
 <div className='relative w-full bg-[#123c63] px-2 sm:px-4 md:px-6 lg:px-32 py-4 pb-16 lg:py-16 h-auto'>
  {/* Background Image */}
  <Image 
    src={testimonial}
    alt='solutions'
    fill
    className="object-cover z-10"
  />

  {/* Title */}
  <h1 className={`relative z-30 text-3xl sm:text-4xl lg:text-5xl ${rokkitt.className} font-bold text-white text-center pt-4`}>
    Our Solutions
  </h1>

  {/* Scroll buttons */}
  <button
    onClick={() => scroll("left")}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#9FA738] z-30 p-2 rounded-full cursor-pointer"
  >
    <FaChevronCircleLeft className='text-3xl sm:text-4xl'/>
  </button>

  <button
    onClick={() => scroll("right")}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#9FA738] z-30 p-2 rounded-full cursor-pointer"
  >
    <FaChevronCircleRight className='text-3xl sm:text-4xl'/>
  </button>

  {/* Scrollable Cards */}
  <div
    ref={scrollRef}
    className='mt-10 flex flex-nowrap overflow-x-auto scroll-smooth no-scrollbar gap-6 relative z-20'
  >
    {[
      { src: Image5, label: "Culinary" },
      { src: Image4, label: "Snacks" },
      { src: Image6, label: "Sweets" },
      { src: Image2, label: "Textures & Stabilizers" },
      { src: Image1, label: "Meat" },
    ].map(({ src, label }, idx) => (
      <div
        key={idx}
        className='min-w-full sm:min-w-full md:min-w-full lg:min-w-[18rem] max-w-sm backdrop-blur-md bg-white/10 rounded-2xl shadow-lg pt-6 pb-2 border border-white/20'
      >
        <Image src={src} width={400} height={400} alt={label.toLowerCase()} className='w-full lg:w-full h-auto object-contain' />
        <p className={`mt-2 text-white text-xl sm:text-2xl font-medium text-center ${rokkitt.className}`}>
          {label}
        </p>
      </div>
    ))}
  </div>
</div>

    <div className='relative lg:h-[45rem] h-[34rem] px-2 md:px-8 lg:px-30 overflow-hidden bg-[#123c63] w-full sm:pt-4 lg:pt-20'>
       <Image 
          src={testimonial}
          alt='solution'
          fill
          className="object-cover z-0"

         />
     
      <h1 className={`text-3xl sm:text-4xl lg:text-5xl ${rokkitt.className} pb-8 flex items-center justify-center font-bold  text-white`}>Testimonials</h1>
       
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
            className="min-h-[24rem] min-w-[40rem] max-w-[40rem] backdrop-blur-md bg-white/10 rounded-2xl shadow-lg border border-white/20 overflow-hidden"
          >
            <FaQuoteLeft className="text-xl lg:text-4xl text-white font-bold ml-4 lg:ml-8 mt-2 lg:mt-8" />
            <div className="flex items-center justify-start mt-2 lg:mt-4 ml-2  lg:ml-8 max-w-32 lg:max-w-56 gap-x-2">
              {[...Array(5)].map((_, i) => (
                <RiStarSFill key={i} className="text-3xl text-yellow-500 mt-4" />
              ))}
            </div>
            <p className={`${rokkitt.className} text-xl text-white ml-4 lg:ml-8 mt-4`}>
              {testimonial.text}
            </p>
            <p className={`${rokkitt.className} text-[#9EA615] font-medium ml-4 lg:ml-8 mt-12`}>
              {testimonial.name}
            </p>
          </div>
        ))}
        </motion.div>
    </div>
    <div className=' relative px-2 sm:px-4 md:px-8 lg:px-30 overflow-hidden bg-[linear-gradient(180deg,_#BA1E34_0%,_#540E17_64%,_#540E17_100%)] w-full pt-20 pb-16'>
      <Image 
          src={recipe}
          alt='recipe'
          fill
          className="object-cover z-0"

         />
         <div>
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl ${rokkitt.className} pb-2 flex items-center justify-center font-bold  text-white`}>What is New ?</h1>
        <p className={`text-lg lg:text-xl ${rokkitt.className} pb-2 flex items-center justify-center  text-white pt-2`}>Stay updated on the latest trends, insights, and innovations in the food industry.</p>
        </div>
        <div>
          <div className="mt-8 flex flex-col lg:flex-row items-center gap-4 lg:overflow-x-auto scroll-smooth no-scrollbar justify-center"
>
            <motion.div
              initial={{ y: 200, opacity: 0 }} // from top to bottom
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeIn' }}
              viewport={{ once: true }}
           className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[20rem] h-[22rem] backdrop-blur-md bg-white/10 rounded-2xl shadow-lg py-6 border border-white/20 flex flex-col items-center text-center flex-shrink-0"
>

              <div className='max-w-72 '>
                <p className={`mt-4 text-white text-sm font-bold  ${rokkitt.className}`}>
                  May 20, 2025
                </p>
                <h3 className={`mt-4 text-white font-medium text-xl pb-4 ${rokkitt.className}`}>Exploring the Future of African Flavours</h3>
              </div>
              <Image 
                src={meal1}
                width={300}
                height={300}
                alt='meal'
              />
           
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0 }} // from top to bottom
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeIn' }}
              viewport={{ once: true }}
              className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[20rem] h-[22rem] backdrop-blur-md bg-white/10 rounded-2xl shadow-lg py-6 border border-white/20 flex flex-col items-center text-center flex-shrink-0"

>
              <div className='max-w-72 '>
                <p className={`mt-4 text-white text-sm font-bold  ${rokkitt.className}`}>
                  May 20, 2025
                </p>
                <h3 className={`mt-4 text-white font-medium text-xl pb-4 ${rokkitt.className} text-center`}>New Advanced Food Stabilization</h3>
              </div>
              <Image 
                src={meal2}
                width={300}
                height={300}
                alt='meals'
              />
           
            </motion.div>
            <motion.div
                initial={{ y: 200, opacity: 0 }} // from top to bottom
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, ease: 'easeIn' }}
                viewport={{ once: true }}
              className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[20rem] h-[22rem] backdrop-blur-md bg-white/10 rounded-2xl shadow-lg py-6 border border-white/20 flex flex-col items-center text-center flex-shrink-0"

>
              <div className='max-w-72'>
                <p className={`mt-4 text-white text-sm font-bold  ${rokkitt.className}`}>
                  May 20, 2025
                </p>
                <h3 className={`mt-4 text-white font-medium text-xl pb-4 ${rokkitt.className}`}>5 Emerging Food Tech Startups in 2025</h3>
              </div>
              <Image 
                src={meal3}
                width={300}
                height={300}
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
        className='flex items-center justify-center mt-12'>
          <p className='px-12 py-4 text-white font-semibold bg-[#9FA738] rounded-xl cursor-pointer max-w-64 text-center '>Read More</p>
        </motion.div>
        
    </div>
     <div className=' px-2 pt-20 pb-16 md:px-8 lg:px-30 relative overflow-hidden bg-gradient-to-b from-[#94182A] to-[#2E070D] w-full'>
          
          <Image 
          src={testimonial}
          alt='recipe'
          fill
          className="object-cover z-0"

         />
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl ${rokkitt.className} pb-2 flex items-center justify-center font-bold  text-white pt-12`}>Delicious Recipes</h1>
        <p className={`text-lg lg:text-xl ${rokkitt.className} pb-2 flex text-center items-center justify-center font-bold  text-white pt-2`}>Find culinary inspirations withour collections of recipes featuring Freddy Hirsch ingredients</p>
        <div>
          <div className='mt-8 flex flex-col lg:flex-row items-center gap-4 lg:overflow-x-auto scroll-smooth no-scrollbar justify-center' >
            <motion.div
              initial={{ y: 200, opacity: 0 }} // from top to bottom
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeIn' }}
              viewport={{ once: true }}
              className='px-6 h-[18rem] backdrop-blur-md bg-white/10  rounded-2xl shadow-lg  py-6 min-w-[20rem] max-w-[20rem] border border-white/20'>
              <Image 
                src={meal6}
                width={300}
                height={300}
                alt='meal'
              />
              <div>
                <h3 className={`mt-4 text-white text-center font-medium text-2xl pb-2 ${rokkitt.className}`}>Jollof Rice</h3>
              </div>
           
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0 }} // from top to bottom
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeIn' }}
              viewport={{ once: true }}
              className='px-6 h-[18rem] backdrop-blur-md bg-white/10  rounded-2xl shadow-lg  py-6 min-w-[20rem] max-w-[20rem] border border-white/20'>
              
              <Image 
                src={meal4}
                width={300}
                height={300}
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
                className='px-6 h-[18rem] backdrop-blur-md bg-white/10  rounded-2xl shadow-lg  py-6 min-w-[20rem] max-w-[20rem] border border-white/20'>
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
          <p className='px-12 py-4 text-white font-semibold bg-[#9FA738] rounded-xl cursor-pointer max-w-64 text-center '>View All Recipes</p>
        </motion.div>
        
    </div>
    <div className='bg-white h-[300px] px-2 md:px-8 lg:px-30 relative overflow-hidden w-full'>
      <h1 className={`text-3xl sm:text-4xl lg:text-5xl ${rokkitt.className} pb-2 flex items-center justify-center font-bold pt-12`}>Certifications</h1>
      <div className='flex items-center justify-start gap-x-6'>
        <div>
          <Image 
            src={halal}
            width={100}
            height={100}
            alt='halal'
          />
        </div>
        <div>
            <Image 
            src={fssc}
            width={200}
            height={200}
            alt='fssc'
          />
        </div>
      </div>
    </div>
    <div className='bg-[#003A62] h-[320px] px-2 md:px-8 lg:px-30 relative overflow-hidden w-full '>
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl ${rokkitt.className} text-white pb-2 flex items-center justify-center font-bold pt-12`}>Newsletter</h1>
         <div className=' px-2  lg:px-30 pb-16 flex flex-col items-center justify-center'>
          <h1 className='text-white text-sm lg:text-lg md:text-xl text-center'> Stay updated by subscribing to the newsletter</h1>
          <form>
            <div className=' flex lg:flex-row flex-col  items-start justify-start gap-2 md:gap-4 mt-8 '>
              <input type='email' placeholder='Enter your email' className=' border-2 text-white border-gray-500  py-3  w-96  px-4 text-md outline-0'/>
              <button type='submit' className='bg-[#9FA738] text-white font-semibold py-3 px-6 rounded-lg cursor-pointer '>Subscribe Now</button>       
            </div>
          </form>  
        </div>
    </div>
   </>
  )
}

export default LandingPage