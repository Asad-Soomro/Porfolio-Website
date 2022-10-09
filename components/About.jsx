import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/me.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I am a certified professional data scientist building Deep Learning applications or models. 
          I’m passionate about learning new technologies and understand there is more than one way to accomplish a task. 
          I am proficient in building Deep Learning models using Pytorch, Tensor, and Keras. 
          Moreover, being a quick learner helps me to pick up new tech stacks as needed. 
          I believe that a great developer is not using one specific language but chooses the best tool for the job.
          Moreover, in my leasure time i love to make web/mobile app. Like this website i built my website!
          </p>
          {/* <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link> */}
        </div>
        <div className='hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
