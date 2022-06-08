import React, { useState } from 'react'
import './Navbar.scss';

import { images } from '../../constants';
import {HiMenuAlt4 , HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'

const Navbar = () => {

  const navLinks = ['home' , 'about' ,  'work' , 'skills' , 'testimonials' , 'contact' ]
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {navLinks.map((item)=>(
          <li className='app__flex p-text' key={`link-${item}`}>
            <a href={`#${item}`} > {item} </a>
            <div/>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={()=> setToggle(true)}/>

          { toggle && (
            <motion.div 
              whileInView={{x: [100,0]}}
              transition={{ duration:0.85, ease:"easeOut" }}
            >
              <HiX onClick={()=> setToggle(false)}/>

              <ul>
                {navLinks.map((item)=>(
                  <li key={item}>
                    <a href={`#${item}`}  onClick={()=> setToggle(false)}> {item} </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
          }
      </div>
    </nav>
  )
}

export default Navbar