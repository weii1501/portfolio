'use client'

import React from 'react'
import { TypingTexth3 } from '@/components/CustomText'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/utils/motion'
import SkillBar from '@/app/components/SkillBar'
import { infomation, skillList } from '@/constants'

import Modal from 'react-modal'
import Link from 'next/link'

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
    <section id='about' className='w-full h-auto pb-[170px] pt-[120px] overflow-hidden'>
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
          className='absolute bg-transparent flex lg:w-[45px] lg:h-[45px] md:w-[45px] md:h-[45px] w-[30px] h-[30px] z-50 lg:-right-[50px] lg:-top-[32px] md:-right-[50px] md:-top-[32px]  right-0 -top-[45px]'
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
        <div className='lg:w-[1070px] md:w-[700px] sm:w-[320px] w-[320px] h-[75vh] overflow-y-auto'>
          <div className='lg:px-[50px] md:px-[50px] px-[15px] relative w-full h-full float-left overflow-y-scroll'>
            <div className='w-full h-auto grid lg:grid-cols-2 grid-cols-1 gap-5'>
              <div className='w-full h-auto mt-[50px]'>
                <h3 className='text-[25px] mb-[35px] pb-[10px] border-b-2 border-dashed border-gray-300 max-w-max font-semibold'>
                  Personal Info
                </h3>
                <ul className='w-full grid lg:grid-cols-2 md:grid-cols-2 lg:gap-2 gap-5'>
                  {infomation.map((item, index) => (
                    <li className={`w-full col-span-${item.colspan}`} key={index}>
                      <span className='text-[16px] text-secondary opacity-80 capitalize'>
                        {`${item.title}: `}
                      </span>
                      <span className='text-[16px] text-primary font-medium'>
                        {item.value}
                      </span>
                    </li>
                  ))}
                  <li className='mt-[25px] w-full h-auto flex items-center justify-start lg:hidden'>
                    <a
                      href='/Frontend-VoDacLuc.pdf'
                      download='Frontend-VoDacLuc.pdf'
                      className='px-[35px] py-[8px] text-primary font-medium text-[16px] border-[2px] border-primary rounded-full transition-all duration-500 hover:bg-primary hover:text-bg-secondary hover:scale-105 hover:shadow-xl'
                    >
                      Download CV
                    </a>
                  </li>
                </ul>
              </div>

              <div className='w-full h-auto mt-[50px]'>
                <h3 className='text-[25px] mb-[35px] pb-[10px] border-b-2 border-dashed border-gray-300 max-w-max font-semibold'>
                  Experience
                </h3>
                <ul className='p-0 m-0'>
                  <li
                    className='relative pl-[60px] pr-[20px] mb-[50px]
                               after:absolute after:top-0 after:left-[25px] after:bottom-0 after:border-l-[1px] after:border-gray-300 h-auto'
                  >
                    <div
                      className='w-[50px] h-[50px] absolute left-0 right-0 flex
                                  items-center justify-center rounded-full text-white p-2
                                  border-[1px] border-[#ddd] bg-white z-10'
                    >
                      <img
                        src='/icons/vietnovel.webp'
                        alt='logo'
                        loading='lazy'
                        decoding='async'
                        className='w-full h-full object-contain'
                      />
                    </div>
                    <span className='text-[#333] text-[13px] px-[15px] py-[1px] mb-[12px] rounded-full font-semibold bg-[#eee] inline-block'>
                      2023
                    </span>
                    <h5 className=' mb-[10px] text-gray-700 text-[18px] font-semibold'>
                      {'Vietnovel Corporation - '}
                      <span className='opacity-80 font-semibold text-[15px] relative'>
                        Fullstack Developer
                      </span>
                    </h5>
                    <ul className='text-[13px] leading-4 text-secondary flex flex-col gap-2 list-disc pl-3 pb-1'>
                      <li>
                        Developed web applications using NextJS, Django
                      </li>
                      <li>
                        Optimized web applications performance
                      </li>
                      <li>
                        Joined the back-end team to create APIs
                      </li>
                      <li>
                        Optimized SEO for enhanced online presence
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className='w-full h-auto mt-[50px]'>
                <h3 className='text-[25px] mb-[35px] pb-[10px] border-b-2 border-dashed border-gray-300 max-w-max font-semibold'>
                  Projects
                </h3>
                <ul className='p-0 m-0'>
                  <li
                    className='relative pl-[60px] pr-[20px] mb-[50px]
                               after:absolute after:top-0 after:left-[25px] after:bottom-0 after:border-l-[1px] after:border-gray-300 h-auto'
                  >
                    <div
                      className='w-[50px] h-[50px] absolute left-0 right-0 flex
                                  items-center justify-center rounded-full text-white p-2
                                  border-[1px] border-[#ddd] bg-white z-10'
                    >
                      <img
                        src='/icons/tinhocorg_logo.svg'
                        alt='logo'
                        loading='lazy'
                        decoding='async'
                        className='w-full h-full object-contain'
                      />
                    </div>
                    <span className='text-[#333] text-[13px] px-[15px] py-[1px] mb-[12px] rounded-full font-semibold bg-[#eee] inline-block'>
                      2023
                    </span>
                    <Link
                      className=' mb-[10px] text-gray-700 text-[18px] font-semibold block'
                      href='https://tinhoc.org'
                      target='_blank' rel='noreferrer'
                    >
                      {'Office Tech Blog - '}
                      <span className='opacity-80 font-semibold text-[15px] relative'>
                        Fullstack Developer
                      </span>
                    </Link>
                    <ul className='text-[13px] leading-4 text-secondary flex flex-col gap-2 list-disc pl-3 pb-1'>
                      <li>
                        Translate designs and style guides provided by the UI/UX team into functional user interface, ensuring cross-browser compatibility and performance
                      </li>
                      <li>
                        Contributes to continual improvement by suggesting improvements to the user interface, or use of new technologies
                      </li>
                      <li>
                        Communicates continually with the project teams and Explains progress on the development effort
                      </li>
                      <li>
                        Write documentation
                      </li>
                    </ul>
                  </li>

                  <li
                    className='relative pl-[60px] pr-[20px] mb-[50px]
                               after:absolute after:top-0 after:left-[25px] after:bottom-0 after:border-l-[1px] after:border-gray-300 h-auto'
                  >
                    <div
                      className='w-[50px] h-[50px] absolute left-0 right-0 flex
                                  items-center justify-center rounded-full text-white overflow-hidden
                                  border-[1px] border-[#ddd] bg-white z-10'
                    >
                      <img
                        src='/icons/logo-nettruyen.jpeg'
                        alt='logo'
                        loading='lazy'
                        decoding='async'
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <span className='text-[#333] text-[13px] px-[15px] py-[1px] mb-[12px] rounded-full font-semibold bg-[#eee] inline-block'>
                      2023
                    </span>
                    <h5
                      className=' mb-[10px] text-gray-700 text-[18px] font-semibold block'
                    >
                      {'Nettruyen clone - '}
                      <span className='opacity-80 font-semibold text-[15px] relative'>
                        Frontend Developer
                      </span>
                    </h5>
                    <ul className='text-[13px] leading-4 text-secondary flex flex-col gap-2 list-disc pl-3 pb-1'>
                      <li>
                        Full responsibility for the project's Front-end. Utilized Next.js as the web server and crafted UI/UX with Tailwind CSS
                      </li>
                      <li>
                        Collaborated with the back-end team in various stages of API development
                      </li>
                      <li>
                        Creating a Python tool to download stories from the original website to our database.
                      </li>
                      <li>
                        Write documentation
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className='w-full h-auto mt-[50px]'>
                <h3 className='text-[25px] mb-[35px] pb-[10px] border-b-2 border-dashed border-gray-300 max-w-max font-semibold'>
                  Education
                </h3>
                <ul className='p-0 m-0'>
                  <li
                    className='relative pl-[60px] pr-[20px] mb-[50px]
                               after:absolute after:top-0 after:left-[25px] after:bottom-0 after:border-l-[1px] after:border-gray-300 h-auto'
                  >
                    <div
                      className='w-[50px] h-[50px] absolute left-0 right-0 flex
                                  items-center justify-center rounded-full text-white p-2
                                  border-[1px] border-[#ddd] bg-white z-10'
                    >
                      <img
                        src='/icons/Logo_UIT_updated.svg'
                        alt='logo'
                        loading='lazy'
                        decoding='async'
                        className='w-full h-full object-contain'
                      />
                    </div>
                    <span className='text-[#333] text-[13px] px-[15px] py-[1px] mb-[12px] rounded-full font-semibold bg-[#eee] inline-block'>
                      2019
                    </span>
                    <h5 className=' mb-[10px] text-gray-700 text-[18px] font-semibold'>
                      University of Information Technology
                    </h5>
                    <p className='text-[15px] leading-4 text-secondary'>
                      Information Assurance - GPA: 3.2/4.0
                    </p>
                  </li>
                </ul>
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
        className='container min-h-[100vh]'
      >
        <div className='w-full'>
          <TypingTexth3
            title='| About Me'
            textStyles='text-[45px] font-bold leading-3 text-primary'
          />
        </div>

        <div className='w-full h-auto flex pt-[60px] lg:flex-row flex-col-reverse'>
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1.5)}
            className='lg:w-[50%] h-auto w-full mt-[90px] lg:mt-0'
          >
            <h3 className='text-[22px] mb-[15px] text-primary'>
              {'Hi, I\'m '}
              <span className='font-semibold'>
                Vo Dac Luc
              </span>
            </h3>
            <div className='w-full h-auto mb-[55px]'>
              <p className='max-w-[90%] lg:text-[18px] md:text-[18px] text-[16px]  text-secondary font-thin'>
                My background includes developing responsive and interactive user interfaces. I am committed to keep up with the latest developments in web technologies. I also spend time learning new technologies and best practices to become a better engineer.
              </p>
            </div>
            <h3 className='text-[22px] mb-[15px] font-semibold text-primary'>
              What is my skill level?
            </h3>
            <div className='w-[100%] pt-[10px] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
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
          <div className='lg:w-[50%] w-full lg:pl-[120px]'>
            <div className='relative'>
              <motion.img
                variants={fadeIn('left', 'tween', 0.2, 1.5)}
                src='/cover.jpeg'
                alt='cover'
                loading='lazy'
                decoding='async'
                className='w-full h-full object-cover rounded-[10px] max-h-[600px]'
              />

              <motion.div
                variants={fadeIn('up', 'tween', 0.2, 1.5)}
                className='lg:w-[250px] lg:h-[250px] md:w-[250px] md:h-[250px] w-[150px] h-[150px] absolute -bottom-[50px] lg:-left-[50px] md:left-10 left-4 rounded-full bg-[#34495e] flex items-center justify-center'
              >
                <div className='text-center lg:text-[35px] md:text-[35px] text-[22px] text-white font-bold'>
                  <h3>
                    1+ Years
                  </h3>
                  <span className='lg:text-[19px] md:text-[19px] text-[13px] font-medium'>
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
