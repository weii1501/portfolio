'use client'

import React from 'react'
import { TypingTexth3 } from '@/components/CustomText'
import { motion } from 'framer-motion'
import ContactCard from '@/app/components/ContactCard'

export default function ContactSection () {
  return (
    <motion.section
      id='contact'
      className='w-full h-auto float-left bg-[#f5f8fc] py-[120px]'
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className='container'>
        <div className='w-full h-auto float-left '>
          <TypingTexth3
            title='| Contact'
            textStyles='text-[45px] font-bold leading-3 text-primary'
          />
        </div>

        <div className='w-full h-auto float-left pt-[60px] mb-[30px]'>
          <ul className='w-full h-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-17 md:gap-5'>
            {cardVariants.map((item, index) => (
              <ContactCard
                key={index}
                title={item.title}
                icon={item.icon}
                text={item.text}
                element={item.element}
                index={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}

const cardVariants = [
  {
    title: 'Phone',
    icon: '/icons/phone.webp',
    text: '+84 33 270 6851',
    element: 'Link'
  },
  {
    title: 'Email',
    icon: '/icons/email.webp',
    text: 'vodacluc2001@gmail.com',
    element: 'Link'
  },
  {
    title: 'Location',
    icon: '/icons/location.webp',
    text: 'Ho Chi Minh City, Vietnam',
    element: 'p'
  }
]
