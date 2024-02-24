'use client'

import React from 'react'
import { TypingTexth3 } from '@/components/CustomText'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/utils/motion'
import SkillBar from '@/app/components/SkillBar'
import { infomation, skillList } from '@/constants'

import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 100
  }
}

// Modal.setAppElement('#yourAppElement')

function AboutSection (props) {
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal () {
    setIsOpen(true)
  }

  function afterOpenModal () {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00'
  }

  function closeModal () {
    setIsOpen(false)
  }

  return (
    <section id='about' className='w-full h-auto pb-[170px] pt-[120px]'>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
        overlayClassName='custom-overlay'
        className='custom-modal'
      >
        <button
          onClick={closeModal}
          type='button'
          className='absolute bg-transparent flex w-[45px] h-[45px] z-50 -right-[50px] -top-[32px]'
        >
          <img
            src='/icons/cancel.svg'
            alt='cancel'
            className='w-12 h-12 cursor-pointer absolute filter invert transition duration-300'
            width={45}
            height={45}
            loading='lazy'
            decoding='async'
            style={{
              color: 'transparent'
            }}
          />
        </button>
        <div className='w-[1070px] h-[75vh] overflow-y-auto'>
          <div className='px-[50px] relative w-full h-full float-left overflow-y-scroll'>
            <div className='w-full h-auto grid grid-cols-2 gap-5'>
              <div className='w-full h-auto mt-[50px]'>
                <h3 className='text-[25px] mb-[35px] pb-[10px] border-b-2 border-dashed border-gray-300 max-w-max font-semibold'>
                  Personal Info
                </h3>
                <ul className='w-full grid grid-cols-2 gap-2'>
                  {infomation.map((item, index) => (
                    <li className='w-full ' key={index}>
                      <span className='text-[16px] text-secondary opacity-80 capitalize'>
                        {`${item.title}: `}
                      </span>
                      <span className='text-[16px] text-primary font-medium'>
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='w-full h-auto mt-[50px]'>
                <h3 className='text-[25px] mb-[35px] pb-[10px] border-b-2 border-dashed border-gray-300 max-w-max font-semibold'>
                  Education
                </h3>

              </div>
            </div>
          </div>
        </div>
      </Modal>
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
            variants={fadeIn('right', 'tween', 0.2, 1.5)}
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
                onClick={openModal}
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
                variants={fadeIn('left', 'tween', 0.2, 1.5)}
                src='/cover.jpeg'
                alt='cover'
                loading='lazy'
                decoding='async'
                className='w-full h-full object-cover rounded-[10px]'
              />

              <motion.div
                variants={fadeIn('up', 'tween', 0.2, 1.5)}
                className='w-[250px] h-[250px] absolute -bottom-[50px] -left-[50px] rounded-full bg-[#34495e] flex items-center justify-center'
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
