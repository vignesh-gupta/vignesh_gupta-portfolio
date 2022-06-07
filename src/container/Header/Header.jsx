import React from 'react'

import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

import './Header.scss';


const scaleVarients={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}


const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x: [-100,0] , opacity:[0,1]}}
        transition={{duration:0.5}}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className=' badge-cmp app__flex'>
            <span>👋</span>
            <div style={{margin:20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Vignesh</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web-Developer</p>
            <p className='p-text'>Freelancer</p>
          </div>

        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity:[0,1]}}
        transition={{duration:0.5 , delayChildren:0.5}}
        className="app__header-img"
      >
          <img src={images.profile} alt="Profile" />

          <motion.img
            whileInView={{ scale:[0,1]}}
            transition={{duration:1 , ease:'easeInOut'}}
            className="overlay_circle"
            src={images.circle}
            alt="profile-circle"  
          />
      </motion.div>


      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className='app__header-circles'
      >
        {
          [images.spring , images.redux , images.graphql].map((circle,index) =>(
            <motion.div 
              animate={{ rotate: [35, -35] }}
              transition={{ repeat: Infinity, duration: 1 ,repeatType: "reverse"  }} 
              className='circle-cmp app__flex' key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default AppWrap(Header , 'home')