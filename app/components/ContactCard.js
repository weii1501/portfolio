'use client'

import React from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

export default function ContactCard ({
  title,
  icon,
  index,
  text,
  element

}) {
  return (
    <motion.li
      variants={fadeIn('right', 'spring', index * 0.2, 1.5)}
      className='w-full h-auto rounded-lg shadow-sm overflow-hidden mb-[20px] bg-white'
    >
      <div className='flex items-start bg-white px-[35px] pt-[33px] pb-[41px]'>
        <div className='w-[55px] h-[55px] bg-[#34495e] rounded-full flex items-center justify-center'>
          <img
            src={icon}
            alt='phone'
            height={25}
            width={25}
            decoding='async'
            loading='lazy'
            className='w-[25px] h-[25px]'
            style={{
              filter: 'invert(1)',
              color: 'transparent'
            }}
          />
        </div>

        <div className='pl-[15px] '>
          <h3 className='text-[20px] font-medium mb-[5px] text-primary'>
            Phone
          </h3>
          <ul className='text-[16px] text-secondary'>
            <li>
              <Content title={title} text={text} />
            </li>
          </ul>
        </div>
      </div>
    </motion.li>
  )
}

const Content = ({ title, text }) => {
  if (title === 'Email') {
    return (
      <Link
        href={`mailto:${text}`}
        className=''
      >
        {text}
      </Link>
    )
  }

  if (title === 'Phone') {
    return (
      <Link
        href={`tel:${text}`}
        className=''
      >
        {text}
      </Link>
    )
  }

  return (
    <p className='text-[16px] text-secondary'>
      Ho Chi Minh City, Vietnam
    </p>
  )
}
