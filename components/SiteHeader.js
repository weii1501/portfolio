'use client'
import React from 'react'
import useSections from '@/hooks/useSections'
import useScrollSpy from '@/hooks/useSpyScroll'

function SiteHeader ({ active, setActive }) {
  const sections = useSections()
  const activeId = useScrollSpy(
    sections.map(({ id }) => id),
    { rootMargin: '0% 0% -96% 0%' }
  )

  const nonActiveClass = `relative flex items-center justify-center px-[12px] py-[5px] text-[15px] font-thin rounded-[6px]
                        before:hover:duration-1000 before:duration-700 before:ease-in-out before:transform before:origin-left before:scale-x-0
                        before:hover:transition-transform before:hover:bg-[#f5f5f5] before:hover:scale-x-100 before:hover:scale-y-100
                        before:opacity-1 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[-1]
                        before:bg-transparent before:rounded-[6px]`

  const activeClass = `relative flex items-center justify-center px-[12px] py-[5px] text-[15px] font-thin rounded-[6px]
                        before:duration-500 before:ease-in-out
                        before:bg-[#f5f5f5] before:animate-custom-scale-x
                        before:opacity-1 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[-1]
                        before:rounded-[6px]`

  return (
    <header
      className='w-full h-auto fixed top-0 left-0 z-50 bg-white shadow-md animate-fade-down animate-ease-out'
    >
      <div className='w-full static h-auto bg-transparent'>
        <div className='flex items-center justify-end h-[80px] px-[40px]'>
          {/* <div className='w-auto h-auto'> */}
          {/*  <a href='/'> */}
          {/*    <img */}
          {/*      src='/logo.webp' */}
          {/*      alt='logo' */}
          {/*      height={92} */}
          {/*      width={37} */}
          {/*      decoding='async' */}
          {/*      loading='lazy' */}
          {/*      className='w-full h-full text-transparent' */}
          {/*    /> */}
          {/*  </a> */}
          {/* </div> */}

          <div className='h-auto p-0'>
            <div>
              <ul className='lg:flex hidden items-center justify-end gap-1'>
                {menuList.map((item, index) => (
                  <li className='w-auto' key={index}>
                    <div>
                      <a
                        href={item.path}
                        className={`#${activeId}` === item.path ? activeClass : nonActiveClass}
                      >
                        <img
                          src={item.icon}
                          alt='icon'
                          height={18}
                          width={18}
                          decoding='async'
                          loading='lazy'
                          className='w-[18px] h-[18px] text-transparent mr-[12px] font-thin'
                        />
                        <span className='font-medium'>
                          {item.text}
                        </span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <div className='md:block sm:block  fixed right-[20px] top-[13px] z-50 lg:hidden'>
                <button
                  className='w-[45px] h-[45px] relative rounded-[50%] p-0 bg-black border-0 ml-auto cursor-pointer'
                  onClick={() => setActive(!active)}
                >
                  <div className={active ? 'active' : ''}>
                    <span className='toggler-menu' />
                    <span className='toggler-menu' />
                    <span className='toggler-menu' />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader

const menuList = [
  {
    icon: '/icons/home.svg',
    text: 'Home',
    path: '#hero'
  },
  {
    icon: 'icons/human.svg',
    text: 'About',
    path: '#about'
  },
  // {
  //   icon: '/icons/service.svg',
  //   text: 'Service',
  //   path: '/service'
  // },
  // {
  //   icon: '/icons/portfolio.svg',
  //   text: 'Portfolio',
  //   path: '/portfolio'
  // },
  // {
  //   icon: 'icons/testimonial.svg',
  //   text: 'Testimonial',
  //   path: '/testimonial'
  // },
  // {
  //   icon: '/icons/blog.svg',
  //   text: 'Blog',
  //   path: '/blog'
  // },
  {
    icon: '/icons/contact.svg',
    text: 'Contact',
    path: '#contact'
  }
]
