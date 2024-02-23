import React from 'react'

function SkillBar ({ title, percentage }) {
  return (
    <div className='w-full h-auto'>
      <span className='text-[16px] font-semibold text-primary mb-[10px] inline'>
        {title}
      </span>
      <div className='w-full min-w-full relative h-[16px] border border-gray-500 p-[2px]'>
        <div className='h-full bg-[#34495e] overflow-hidden ' style={{ width: percentage }} />
      </div>
    </div>
  )
}

export default SkillBar
