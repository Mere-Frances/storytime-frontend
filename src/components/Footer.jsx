import React from 'react'
import { NavLink } from 'react-router-dom'

import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className='footer-content--container'>

        <div className='footer-main-content'>
          <NavLink to='/' className='logo'>
            Wordpress
          </NavLink>
          <p>Storytime Foundation provides free books, education, and resources to 
          New Zealand’s most vulnerable whānau in partnership with Tamariki Ora/Pēpi 
          Ora and Family Start providers, Ministry of Education, and Department of 
          Corrections. To date, we have delivered over 305,000 books to over 78,000 
          whānau with newborn and young children.</p>
        </div>

        <ul className={`nav-links 'active' : ''`}>
          <h4>
              <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
              Home
              </NavLink>
          </h4>
          <h4>
              <NavLink
              to='/ourwork'
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
              Our work
              </NavLink>
          </h4>
          <h4>
              <NavLink
              to='/resources'
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
              Resources
              </NavLink>
          </h4>
          <h4>
              <NavLink
              to='/shop'
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
              Shop
              </NavLink>
          </h4>
          <h4>
              <NavLink
              to='/donate'
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
              Donate
              </NavLink>
          </h4>
          <h4>
              <NavLink
              to='/contact'
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
              Contact
              </NavLink>
          </h4>
        </ul>

        <div className='footer-social-icons'>
          <a href='https://www.facebook.com/storytimefoundationtrust/' className='social-icon--container'><IoLogoFacebook /></a>
          <a className='social-icon--container'><IoLogoInstagram href='https://www.instagram.com/storytimefoundation/'/></a>
        </div>

      </div>

      <span></span>
      <h4>© 2024 Storytime Foundation</h4>

      <div className='footer-sponsors'>
        <img src='/sponsors/baytrust-small.png'/>
        <img src='/sponsors/foundationnorth-small.png'/>
        <img src='/sponsors/lotto-small.png'/>
        <img src='/sponsors/ratafoundation-small.png'/>
        <img src='/sponsors/teraupuawai-small.png'/>
        <img src='/sponsors/tindallfoundation-small.png'/>
        <img src='/sponsors/rotoruatrust-small.png'/>
      </div>
    </footer>
  )
}

export default Footer
