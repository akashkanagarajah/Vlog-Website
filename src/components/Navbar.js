import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  // This line declares a state variable click with an initial value of false. 
  // The setClick function is used to update the state variable click.

  const handleClick = () => setClick(!click);
  // This function toggles the value of click between true and false. 
  // If click is false, calling this function will set it to true and vice versa.
  
  const closeMobileMenu = () =>setClick(false);
  //This function sets the click state to false, typically used to close a mobile menu.

  const [button,setButton] = useState(true)
  // Function to show or hide the button based on window width

  const showButton = () => {
    if(window.innerWidth <= 960) {
      // If the window width is less than or equal to 960px, hide the button
      setButton(false)
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  //Ensures that the button doesn't reload in an incorrect state when refreshing page 

    window.addEventListener('resize',showButton);
     // Add an event listener to call showButton function when the window is resized
    
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className='navbar-logo'onClick={closeMobileMenu}>
                  Kanagarajah.Vlogs <i class="fa-solid fa-video" style={{ color: '#74C0FC' }}></i>
                  {/* This is the Kanagarajah vlogs with web icon seen on the website above*/}
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  {/* This is the hamburger menu below*/}
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/videos' className='nav-links' onClick={closeMobileMenu}>
                      Videos
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/photos' className='nav-links' onClick={closeMobileMenu}>
                      Photos
                    </Link>
                  </li>

                  <li>
                    <Link
                      to='/about-me'
                      className='nav-links-mobile'
                      onClick={closeMobileMenu}
                    >
                    About Me
                  </Link>
                  </li>

                </ul>
                {button && <Button buttonStyle='btn--outline'>About me</Button>}
                {/* This is where the ABOUT ME button is added
                Look at Button.js and button.css to edit button*/}
            </div>
        </nav>
    </>
  );
}

export default Navbar