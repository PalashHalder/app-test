import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
        <div className='container'>
            <div className='main'>
                <div className='logo'>
                    <img src='./images/logo.png' alt='logo'/>
                </div>
                <div className='nav-item'>
                    <ul className='nav_ul'>
                        <li className='nav_list'><a className='nav_link' href='#'>Home<i className='fa-solid fa-angle-down'></i></a></li>
                        <li className='nav_list'><a className='nav_link' href='#'>About<i className='fa-solid fa-angle-down'></i></a></li>
                        <li className='nav_list'><a className='nav_link' href='#'>Service<i className='fa-solid fa-angle-down'></i></a></li>
                        <li className='nav_list'><a className='nav_link' href='#'>Portfolio<i className='fa-solid fa-angle-down'></i></a></li>
                        <li className='nav_list'><a className='nav_link' href='#'>Price<i className='fa-solid fa-angle-down'></i></a></li>
                        <li className='nav_list'><a className='nav_link' href='#'>Blog<i className='fa-solid fa-angle-down'></i></a></li>
                    </ul>
                </div>
                <div className='nav_contact'>
                    <a className='nav_contact_link' href='#'>Contact Us</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar