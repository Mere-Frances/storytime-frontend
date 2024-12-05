import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';

import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";

const baseUrl = import.meta.env.VITE_WP_BASEURL;

const Footer = () => {
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const fetchNavLogo = async () => {
      try {
        const response = await axios.get(`${baseUrl}wp-json/custom/v1/nav-logo`);
        if (response.status === 200) {
          const data = response.data;
          setLogoUrl(data[0]);
        } else {
        }
      } catch (error) {
      }
    };

    fetchNavLogo();
  }, []);


  return (
    <footer>
      <div className='footer-content--container'>

        <div className='footer-main-content'>
          <NavLink to='/' className='logo'>
            <img src={logoUrl} alt="Website Logo" />
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
        <img src='/sponsors/baytrust-small.png' alt='Bay Trust'/>
        <img src='/sponsors/foundationnorth-small.png' alt='Foundation North'/>
        <img src='/sponsors/lotto-small.png' alt='Lotto'/>
        <img src='/sponsors/ratafoundation-small.png' alt='Rata Foundation'/>
        <img src='/sponsors/teraupuawai-small.png' alt='Te Rau Puawai'/>
        <img src='/sponsors/tindallfoundation-small.png' alt='Tindall Foundation'/>
        <img src='/sponsors/rotoruatrust-small.png' alt='Rotorua Trust' />
      </div>
    </footer>
  )
}

export default Footer
