'use client'

import React from 'react'
import { TypingText } from '@/components/CustomText'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'
import { FiFacebook, FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa6'

function HeroSection (props) {
  return (
    <section className='w-full min-h-[100vh] relative flex items-center justify-center text-center bg-bg-secondary'>
      <div className='py-[100px] px-[20px]'>
        <div className='mx-auto w-[245px] h-[245px] mb-[15px]'>
          <img
            src='/avatar.jpeg'
            alt='brand'
            loading='lazy'
            decoding='async'
            className='w-full h-full object-cover rounded-full'
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.5 }}
          className='relative opacity-1 visible left-0 transition-all'
        >
          <h5 className='text-[#666] font-medium text-[20px]'>
            Hello, I'm Vo Dac Luc
          </h5>
          <TypingText title='| Web Developer' textStyles='text-[44px] text-primary my-[24px] font-bold' />
          <p className='text-[17px] mb-[32px] text-secondary font-medium'>
            I have more than 1-year experience in Modern Front-End Web Development <br /> and 4 months of Django-related technologies.
          </p>
        </motion.div>

        <div className='w-full m-auto'>
          <ul className='w-full flex items-center justify-center'>
            <li className='w-auto px-4 relative after:absolute after:w-[1px] after:h-full after:bg-[#e5e5e5] after:top-0 after:right-0'>
              <a
                target='_blank'
                href='https://www.facebook.com/luc.vo.771/'
                className='relative ' rel='noreferrer'
              >
                <FiFacebook
                  size={22}
                  className='transition-all duration-500 hover:-translate-y-[5px] text-[#888888] hover:text-[#000]'
                />
              </a>
            </li>

            <li className='w-auto px-4 relative after:absolute after:w-[1px] after:h-full after:bg-[#e5e5e5] after:top-0 after:right-0'>
              <a
                target='_blank'
                href='https://www.instagram.com/devdayne/'
                className='relative ' rel='noreferrer'
              >
                <FaInstagram
                  size={22}
                  className='transition-all duration-500 hover:-translate-y-[5px] text-[#888888] hover:text-[#000]'
                />
              </a>
            </li>

            {/* <li className='w-auto px-4 relative after:absolute after:w-[1px] after:h-full after:bg-[#e5e5e5] after:top-0 after:right-0'> */}
            {/*  <a */}
            {/*    href='#' */}
            {/*    className='relative ' */}
            {/*  > */}
            {/*    <FiTwitter */}
            {/*      size={22} */}
            {/*      className='transition-all duration-500 hover:-translate-y-[5px] text-[#888888] hover:text-[#000]' */}
            {/*    /> */}
            {/*  </a> */}
            {/* </li> */}

            <li className='w-auto px-4 relative after:absolute after:w-[1px] after:h-full after:bg-[#e5e5e5] after:top-0 after:right-0'>
              <a
                target='_blank'
                href='https://github.com/weii1501'
                className='relative ' rel='noreferrer'
              >
                <FiGithub
                  size={22}
                  className='transition-all duration-500 hover:-translate-y-[5px] text-[#888888] hover:text-[#000]'
                />
              </a>
            </li>

            <li className='w-auto px-4'>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/l%E1%BB%B1c-v%C3%B5-%C4%91%E1%BA%AFc-a09aaa290/'
                className='relative ' rel='noreferrer'
              >
                <FiLinkedin
                  size={22}
                  className='transition-all duration-500 hover:-translate-y-[5px] text-[#888888] hover:text-[#000]'
                />
              </a>
            </li>
          </ul>
        </div>

        <div className='mt-[25px] w-full h-auto flex items-center justify-center'>
          <a
            href='/Frontend-VoDacLuc.pdf'
            download='Frontend-VoDacLuc.pdf'
            className='px-[35px] py-[8px] text-primary font-semibold text-[18px] border-[2px] border-primary rounded-full transition-all duration-500 hover:bg-primary hover:text-bg-secondary hover:scale-105 hover:shadow-xl'
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
