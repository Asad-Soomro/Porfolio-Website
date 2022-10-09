import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-left'>
      <div className='max-w-[1240px] w-full h-full p-2 flex justify-left items-center'>
        <div className='p-4'>
          <h2 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Soomro</span>
          </h2>
          <h1 className='py-2 text-gray-700'>A Deep Learning Engineer.</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%]'>
          Who is motivated to learn and develop new services using <strong> deep learning </strong>
           Furthermore, I am a software fanatic since I enjoy developing programmes for my own projects, such as this website.
          Contact me for <strong> Your Solution! </strong>

          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
