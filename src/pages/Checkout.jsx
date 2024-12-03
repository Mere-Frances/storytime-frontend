import React from 'react';
import { NavLink } from 'react-router-dom';
import Seo from '../components/Seo';

const Checkout = () => {
  return (
    <>
        <Seo
          title="Home - Storytime Foundation"
          description="Welcome to the Storytime Foundation"
        />
        <section className='home-header'>
            <div className='home-header--content--container'>
                <h1>
                <span>t</span>
                <span>h</span>
                <span>a</span>
                <span>n</span>
                <span>k</span>
                <span> </span>
                <span>y</span>
                <span>o</span>
                <span>u</span></h1>
                <h3>Your purchase was successful</h3>
                <p>Your receipt has been emailed to you</p>

                <div className='button-container'>
                    <div className='primary-button'>
                        <NavLink
                            to='/ourwork'
                        >
                            Back Home
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Checkout
