'use client'

import React from 'react'
import { TypingTexth3 } from '@/components/CustomText'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/utils/motion'
import SkillBar from '@/app/components/SkillBar'
import { skillList } from '@/constants'

function AboutSection (props) {
  return (
    <section className='w-full h-auto pb-[170px] pt-[120px]'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.5 }}
        className='container'
      >
        <div className='w-full'>
          <TypingTexth3
            title='| About Me'
            textStyles='text-[45px] font-bold leading-3 text-primary'
          />
        </div>

        <div className='w-full h-auto flex pt-[60px]'>
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className='w-[50%] h-auto'
          >
            <h3 className='text-[22px] mb-[15px] text-primary'>
              {'Hi, I\'m '}
              <span className='font-semibold'>
                Vo Dac Luc
              </span>
            </h3>
            <div className='w-full h-auto mb-[55px]'>
              <p className='max-w-[90%] text-[18px] text-secondary font-medium'>
                My background includes developing responsive and interactive user interfaces. I am committed to keep up with the latest developments in web technologies. I also spend time learning new technologies and best practices to become a better engineer.
              </p>
            </div>
            <h3 className='text-[22px] mb-[15px] font-semibold text-primary'>
              What is my skill level?
            </h3>
            <div className='w-[100%] pt-[10px] grid grid-cols-2 gap-5'>
              {skillList.map((item, index) => (
                <SkillBar
                  key={index}
                  title={item.title}
                  percentage={item.percentage}
                />
              ))}
            </div>
            <div className='w-full h-auto mt-[48px]'>
              <button
                type='button'
                className='px-[35px] py-[8px] text-primary font-semibold text-[18px] border-[2px] border-primary rounded-md transition-all duration-500 hover:bg-primary hover:text-bg-secondary hover:scale-105 hover:shadow-xl'
              >
                See More
              </button>
            </div>
          </motion.div>
          <div className='w-[50%] pl-[120px]'>
            <div className='relative'>
              <motion.img
                variants={fadeIn('left', 'tween', 0.2, 1)}
                src='/cover.jpeg'
                alt='cover'
                loading='lazy'
                decoding='async'
                className='w-full h-full object-cover rounded-[10px]'
              />

              <motion.div
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className='w-[250px] h-[250px] absolute -bottom-[50px] -left-[50px] z-10 rounded-full bg-[#34495e] flex items-center justify-center'
              >
                <div className='text-center text-[35px] text-white font-bold'>
                  <h3>
                    1+ Years
                  </h3>
                  <span className='text-[19px] font-medium'>
                    Of Experiance
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  )
}

export default AboutSection
