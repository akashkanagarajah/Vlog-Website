import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>

        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <small>Kanagarajah.Vlogs <i class="fa-solid fa-video" style={{ color: '#74C0FC' }} ></i> © 2024 </small>
            </Link>
          </div>
          
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/kanagarajah.vlogs/?igsh=MWk4NXpseTBqdTQ2MQ%3D%3D&utm_source=qr'
              target='_blank'
              aria-label='Instagram'

            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://x.com/akash_21_'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link linkedIn'
              to='https://www.linkedin.com/in/akash-kanagarajah-617498178/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link linkedIn'
              to='https://github.com/akashkanagarajah'
              target='_blank'
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </Link>

            <Link
              class='social-icon-link linkedIn'
              to='https://vsco.co/axashrajah/gallery'
              target='_blank'
              aria-label='Vsco'
            >
              <i class='fab fa-vsco' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;