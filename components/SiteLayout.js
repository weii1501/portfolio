import React from 'react'
// import dynamic from 'next/dynamic'
import SiteHeader from '@/components/SiteHeader'

function SiteLayout (props) {
  return (
    <>
      <SiteHeader />
      <div className='mt-[80px]'>
        {props.children}
      </div>
    </>
  )
}

export default SiteLayout
