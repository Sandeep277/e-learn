import React from 'react'
import './Navbar.css'
import {AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-left">
                <p><span className='main-logo'>E-Learn</span></p>
            </div>
            <div className="nav-mid">
                <a href="#">Home</a>
                <a href="#">Features</a>
                <a href="#">How It Works</a>
                <a href="#">About</a>
                <a href="#">Testimonials</a>
                <a href="#">Blog</a>
            </div>
            <div className="nav-right">
                <button className='nab-btn'>Get the App</button>
            </div>
            <div className="menu">
                <AiOutlineMenu className='menu-icon'/>
            </div>
        </div>
    )
}

export default Navbar
