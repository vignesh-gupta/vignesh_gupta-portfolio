import React , {useState } from 'react'
import { BsEnvelopeOpen , BsPhone } from 'react-icons/bs';

import { AppWrap , MotionWrap } from '../../wrapper';
import {client } from '../../client';
import {images} from '../../constants'
import './Footer.scss';


const Footer = () => {
  const [formData, setFormData] = useState({name:'' , email:'' , message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name , email , message } = formData;

  const handleChangeInput = (e) => {
    const {name , value} = e.target;
    
    setFormData({...formData , [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type : 'contact',
      name , email , message
    }

    client.create(contact)
    .then(()=>{
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }

  return (
    <>
      <h2 className='head-text'>Take a Coffee & <br /> <span>Chat with me</span></h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          {/* <img src={images.email} alt="email" /> */}
          <BsEnvelopeOpen />
          <a href='mailto:vighneshgupta32@gmail.com' className='p-text'>vighneshgupta32@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          {/* <img src={images.mobile} alt="mobile" /> */}
          <BsPhone />
          <a href='tel:+919987057317' className='p-text'>+91 99870 57317</a>
        </div>
      </div>

      {!isFormSubmitted ? 
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' value={name} onChange={handleChangeInput} name='name' />
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Your Email' value={email} onChange={handleChangeInput} name='email' />
        </div>
        <div className='app__flex'>
          <textarea 
            className='p-text'
            placeholder='Your Message'
            value={message}
            name='message'
            onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit} >{loading? 'Sending...' : 'Send Message'}</button>
      </div>
        :
        <div>
          <h3 className='head-text'> Thank You for getting in touch! </h3>
        </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer , 'app__footer'),
  'contact',
  'app__whitebg'
)