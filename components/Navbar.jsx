import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import CompanyLogo from "../public/assets/CompanyLogo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image
              src={CompanyLogo}
              alt='/'
              width='50'
              height='57'
              className='cursor-pointer'
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase p-2 cursor-pointer rounded-lg hover:bg-black/20 ease-in duration-300'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase p-2 cursor-pointer rounded-lg hover:bg-black/20 ease-in duration-300'>
              <Link href='/about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase p-2 cursor-pointer rounded-lg hover:bg-black/20 ease-in duration-300'>
              <Link href='/skills'>Skills</Link>
            </li>
            {/* <li className='ml-10 text-sm uppercase p-2 cursor-pointer rounded-lg hover:bg-black/20 ease-in duration-300'>
              <Link href='/projects'>Projects</Link>
            </li> */}
            <li className='ml-10 text-sm uppercase p-2 cursor-pointer rounded-lg hover:bg-black/20 ease-in duration-300'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='ml-10 text-sm uppercase p-2 cursor-pointer rounded-lg hover:bg-black/20 ease-in duration-300'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden cursor-pointer p-2 rounded-lg hover:bg-black/20 ease-in duration-300'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image
                    src={CompanyLogo}
                    width='50'
                    height='57'
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='p-2 cursor-pointer rounded-lg hover:bg-black/20'

              >
                <AiOutlineClose fontSize={22}/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm p-2 cursor-pointer rounded-lg hover:bg-black/20 ease-in duration-300'>
                  Home
                </li>
              </Link>
              <Link href='/about'>
                <li  onClick={() => setNav(false)} className='py-4 text-sm p-2 cursor-pointer rounded-lg hover:bg-black/20 ease-in duration-300'>
                  About
                </li>
              </Link>
              <Link href='/skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm p-2 cursor-pointer rounded-lg hover:bg-black/20 ease-in duration-300'>
                  Skills
                </li>
              </Link>

              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm p-2 cursor-pointer rounded-lg hover:bg-black/20 ease-in duration-300'>
                  Resume
                </li>
              </Link>
              <Link href='/contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm p-2 cursor-pointer rounded-lg hover:bg-black/20 ease-in duration-300'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/asadsoomro00/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='p-2 cursor-pointer rounded-lg hover:bg-black/20 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/Asad-Soomro'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='p-2 cursor-pointer rounded-lg hover:bg-black/20 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='p-2 cursor-pointer rounded-lg hover:bg-black/20 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='p-2 cursor-pointer rounded-lg hover:bg-black/20 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
