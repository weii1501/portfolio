'use client'

import React from 'react'
// import dynamic from 'next/dynamic'
import SiteHeader from '@/components/SiteHeader'
import SiteSideBar from '@/components/SiteSideBar'

function SiteLayout (props) {
  const [active, setActive] = React.useState(false)

  return (
    <>
      <SiteHeader
        active={active}
        setActive={setActive}
      />
      <SiteSideBar
        active={active}
        setActive={setActive}
      />
      <div className='mt-[80px]'>
        {props.children}
      </div>
    </>
  )
}

export default SiteLayout
