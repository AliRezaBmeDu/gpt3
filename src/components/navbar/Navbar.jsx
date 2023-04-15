import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg';


import './navbar.css'

//BEM --> Block Element Modifier

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links_logo">
              <img src={logo} alt="logo" />
            </div>
            <div className='gp3__navbar-links_container'>
                <p><a href="#home">Home</a></p>
                <p><a href="#wgpt3">What is GPT?</a></p>
                <p><a href="#possibility">Open AI</a></p>
                <p><a href="#features">Case Studies</a></p>
                <p><a href="#blog">Libraries</a></p>
            </div>
            <div className="gpt3__navbar-sign">
            <p>Sign in</p>
            <button type='button'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar