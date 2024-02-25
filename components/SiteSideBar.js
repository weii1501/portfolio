import React from 'react'
import useSections from '@/hooks/useSections'
import useScrollSpy from '@/hooks/useSpyScroll'
import Link from "next/link";

function SiteSideBar ({ active }) {
  const sections = useSections()
  const activeId = useScrollSpy(
    sections.map(({ id }) => id),
    { rootMargin: '0% 0% -96% 0%' }
  )

  const nonActiveClass = `relative flex items-center justify-start px-[12px] py-[5px] text-[15px] font-thin rounded-[6px]
                        before:hover:duration-1000 before:duration-700 before:ease-in-out before:transform before:origin-left before:scale-x-0
                        before:hover:transition-transform before:hover:bg-[#f5f5f5] before:hover:scale-x-100 before:hover:scale-y-100
                        before:opacity-1 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[-1]
                        before:bg-transparent before:rounded-[6px]`

  const activeClass = `relative flex items-center justify-start  px-[12px] py-[5px] text-[15px] font-thin rounded-[6px]
                        before:duration-500 before:ease-in-out
                        before:bg-[#f5f5f5] before:animate-custom-scale-x
                        before:opacity-1 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[-1]
                        before:rounded-[6px]`

  return (
    <div
      className={`w-[320px] fixed z-50 bg-white top-0 left-0 bottom-0 shadow-md transition-all lg:hidden 
                duration-500 ease-in-out ${active ? 'translate-x-0' : '-translate-x-[100%]'}`}
    >
      <div className='relative h-full'>
        <div className='w-full h-[80px] border-b-[1px] border-[#222]' />

        <div className='h-auto p-0'>
          <div>
            <ul className='flex flex-col pt-[35px] px-[20px] gap-3'>
              {menuList.map((item, index) => (
                <li className='w-full text-left' key={index}>
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
          </div>
        </div>

        <div className='absolute bottom-0 right-0 left-0 border-t-[1px] border-[#cbd3d9]'>
          <div className='p-[20px] w-full h-auto flex items-center '>
            <div className='relative w-[50px] h-[50px] rounded-full inline-block'>
              <div
                className='absolute top-0 right-0 left-0 bottom-0 border-[1px] border-[#34495e] rounded-full '
                style={{
                  backgroundImage: 'url(/avatar.jpeg)',
                  backgroundSize: 'cover'
                }}
              />
            </div>

            <div className='pl-[13px] h-full'>
              <h3 className='text-[16px] font-medium leading-3 pt-2 pb-1'>
                Vo Dac Luc
              </h3>
              <Link
                href='mailto:vodacluc2001@gmail.com'
                className='text-secondary text-[14px] font-thin leading-3 hover:text-primary transition-all duration-500 ease-in-out'
              >
                vodacluc2001@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteSideBar

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
    path: '/contact'
  }
]
