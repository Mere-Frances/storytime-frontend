import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { IoCartOutline, IoPersonCircleOutline } from "react-icons/io5";
import useCustomizer from '../hooks/useCustomizer';
import { CartContext } from '../context/CartContext';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_WP_BASEURL;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const [isSticky, setIsSticky] = useState(false);
  const { mobileMenu } = useCustomizer();
  const [logoUrl, setLogoUrl] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const mobile = document.querySelector('.nav-links');
    if (isOpen && mobile) {
      mobile.style.backgroundColor = mobileMenu;
    } else {
      mobile.style.backgroundColor = 'transparent';
    }
  }, [isOpen, mobileMenu]);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 900) {
        if (window.scrollY > 100) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className="nav-content--container">
        <div className="primary-nav--container">
          <NavLink to="/" className="logo">
            <img src={logoUrl} alt="Website Logo" />
          </NavLink>

          <div className="nav-icons">
            <NavLink
              to="/login"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              <IoPersonCircleOutline />
            </NavLink>

            <div className="cart-icon-container">
              <NavLink
                to="/cart"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                <IoCartOutline />
                {totalQuantity > 0 && (
                  <div className="cart-badge">{totalQuantity}</div>
                )}
              </NavLink>
            </div>
          </div>
        </div>

        <div className={`secondary-nav--container ${isSticky ? 'sticky' : ''}`}>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`bar bar1 ${isOpen ? 'toggle' : ''}`}></div>
            <div className={`bar bar2 ${isOpen ? 'toggle' : ''}`}></div>
            <div className={`bar bar3 ${isOpen ? 'toggle' : ''}`}></div>
          </div>

          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ourwork"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Our Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donate"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Donate
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Navbar;
