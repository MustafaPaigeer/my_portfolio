import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me </h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
        <img src={images.email} alt='email' />
        <a href='mailto:hello@mustafap.com' className='p-text'>hello@mustafap.com</a>
        </div>
        <div className='app__footer-card'>
        <img src={images.mobile} alt='mobile' />
        <a href='tel:+1 (236) 886-9744' className='p-text'>+1 (236) 886-9744</a>
        </div>
      </div>

      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' placeholder='Your Name' name='name' value={name} onChange={hangleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' placeholder='Your Email' name='email' value={email} onChange={hangleChangeInput} />
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            name={message}
            onChange={handleChangeInput}
          />
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)