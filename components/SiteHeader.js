import React from 'react'

function SiteHeader (props) {
  const handleScroll = (e) => {
    console.log(e)
  }

  return (
    <header
      className='w-full h-auto fixed top-0 left-0 z-50 bg-white shadow-md animate-fade-down animate-ease-out'
    >
      <div className='w-full static h-auto bg-transparent'>
        <div className='flex items-center justify-end h-[80px] px-[40px]'>
          {/*<div className='w-auto h-auto'>*/}
          {/*  <a href='/'>*/}
          {/*    <img*/}
          {/*      src='/logo.webp'*/}
          {/*      alt='logo'*/}
          {/*      height={92}*/}
          {/*      width={37}*/}
          {/*      decoding='async'*/}
          {/*      loading='lazy'*/}
          {/*      className='w-full h-full text-transparent'*/}
          {/*    />*/}
          {/*  </a>*/}
          {/*</div>*/}

          <div className='h-auto p-0'>
            <div>
              <ul className='flex items-center justify-end'>
                {menuList.map((item, index) => (
                  <li className='w-auto' key={index}>
                    <div>
                      <a
                        href={item.path}
                        className='relative flex items-center justify-center px-[12px] py-[5px] text-[15px] font-thin rounded-[6px]
                                  before:transition-all before:duration-600 before:ease-in-out before:transform before:origin-left before:scale-x-0
                                  before:hover:transition-transform before:hover:bg-[#f5f5f5] before:hover:scale-x-100 before:hover:scale-y-100 before:opacity-1
                                  before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[-1] before:bg-transparent before:rounded-[6px]'
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
    path: '/'
  },
  {
    icon: 'icons/human.svg',
    text: 'About',
    path: '/about'
  },
  {
    icon: '/icons/service.svg',
    text: 'Service',
    path: '/service'
  },
  {
    icon: '/icons/portfolio.svg',
    text: 'Portfolio',
    path: '/portfolio'
  },
  {
    icon: 'icons/testimonial.svg',
    text: 'Testimonial',
    path: '/testimonial'
  },
  {
    icon: '/icons/blog.svg',
    text: 'Blog',
    path: '/blog'
  },
  {
    icon: '/icons/contact.svg',
    text: 'Contact',
    path: '/contact'
  }
]
