import Image from 'next/image'
import React from 'react'

const SkillsCircle = ({name , icon} : {name: string , icon: string}) => {
  return (
    <div className='w-20 h-20 p-2 flex justify-center items-center rounded-full bg-secondary'>
      <Image loading='lazy' src={icon} alt={name} width={50} height={50} className='rounded-full object-contain' />
    </div>
  )
}

export default SkillsCircle