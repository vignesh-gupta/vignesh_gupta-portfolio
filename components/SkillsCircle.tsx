import Image from 'next/image'
import React from 'react'

const SkillsCircle = () => {
  return (
    <div className='w-20 h-20 p-2 flex justify-center items-center rounded-full bg-secondary'>
      <Image src="/hero.png" alt="Vignesh Gupta" width={50} height={50} />
    </div>
  )
}

export default SkillsCircle