import React, { useState } from 'react';
import ContentSection from '../components/ContentSection';
import Seo from '../components/Seo';

const Login = () => {

  return (
    <>
    <Seo
      title="Provider login - Storytime Foundation"
      description="Login to the provider portal."
    />

      <section className="content-section beige-section">
          <h1 className='center-style'>
            <span>l</span>
            <span>o</span>
            <span>g</span>
            <span> </span>
            <span>i</span>
            <span>n</span>
          </h1>
        <ContentSection includeSvg={false} />
        <div className="contact-form--container">
        <form>
        <div className='form-row'>
            <label className='form-field'>
            Username
            <input
                type="text"
                name="name"
                placeholder='Type here'
                required
            />
            </label>
            <label className='form-field'>
            Password
            <input
                type="text"
                name="subject"
                placeholder='Type here'
                required
            />
            </label>
        </div>

        <a className='primary-button' type="submit">Login</a>
      </form>
        </div>
      </section>

    </>
  );
};

export default Login;
