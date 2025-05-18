import React from 'react'
import Image from 'next/image'
import logo1 from '../../../public/contactme.png'
import Emailjs from '@/app/contact-us/Emailjs';


const Contactus = () => {
    return (
        <div className=""> {/* Set your desired height */}
          <Image
            src={logo1}
            alt="Contact"
            style={{
              objectFit:'cover',
            }}
            className='h-140 rounded-t-lg w-full object-center'            
          />
            <div className='py-12 px-2 md:px-8 lg:px-30 bg-white min-h-screen'>
              <Emailjs />
            </div>
      </div>
    );
  };

export default Contactus