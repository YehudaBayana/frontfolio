import React from 'react';
import './Hamburger.css';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

function Hamburger() {
  function openNav() {
    document.getElementById('fullNav').style.height = '100%';
  }

  function closeNav() {
    document.getElementById('fullNav').style.height = '0%';
  }
  return (
    <>
      <div id='fullNav' className='overlay'>
        <span className='closebtn' onClick={() => closeNav()}>
          &times;
        </span>
        <div className='overlay-content'>
          <a
            href='https://tech-career-alternative.firebaseapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='/frontfolio/images/tech-career-logo.png'
              width='200px'
              alt=''
            />
          </a>
          <a
            href='https://mail.google.com/mail/u/0/#all?compose=VpCqJWHtMZtRzqgPsvKBNVsHctcxQXrXnKCcLZBwgXCTnhwJLWFtxglXHWkqmfGtmmXxHNb'
            target='_blank'
            rel='noreferrer'
          >
            <Button background='#4D774E' color='white' margin='30px 0'>
              bayanayuda@gmail.com
            </Button>
          </a>
          <Link to='/home' onClick={() => closeNav()}>
            HOME
          </Link>
          <Link to='/skills' onClick={() => closeNav()}>
            SKILLS
          </Link>
          <Link to='/portfolio' onClick={() => closeNav()}>
            PORTFOLIO
          </Link>
          <Link to='/contact' onClick={() => closeNav()}>
            CONTACT
          </Link>
        </div>
      </div>
      <span
        style={{ fontSize: '30px', cursor: 'pointer', color: '#f1b24a' }}
        onClick={() => openNav()}
      >
        &#9776;
      </span>
    </>
  );
}

export default Hamburger;
