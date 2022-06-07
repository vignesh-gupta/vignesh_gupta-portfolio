import React from 'react'

import {BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn , FaGithub} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div><a href='https://twitter.com/VighneshGupta9' target="_blank" rel='noreferrer'> <BsTwitter /></a></div>
        <div><a target="_blank" rel='noreferrer' href='https://linkedin.com/in/vigneshgupta'><FaLinkedinIn /></a></div>
        <div><a target="_blank" rel='noreferrer' href='https://github.com/dud3-droid'><FaGithub /></a></div>
    </div>
  )
}

export default SocialMedia