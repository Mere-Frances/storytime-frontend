import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ContentSection from '../components/ContentSection';
import Carousel from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';

const Contact = () => {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    setEmailError('');

    if (!email) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setNewsletterSubmitted(true);
  };

  return (
    <>
    <Seo
      title="Contact us - Storytime Foundation"
      description="Reach out and contact us."
    />
      <PageHeader
        img_url='/header-bg-imgs/contact-header.jpg'
        surtitle=''
        title={
          <>
            <span>c</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
          </>
        }
        subtitle={
          <>
            Get in touch <br /> We would love to hear from you
          </>
        }
        includeBtn={false}
      />

      <section className="content-section beige-section">
        <ContentSection title="Contact form" includeSvg={false} />
        <div className="contact-form--container">
          <ContactForm />
        </div>
      </section>

      <section className="content-section blue-section">
        {!newsletterSubmitted ? (
          <ContentSection
            title={
              <>
                newsletter
              
              </>
            }
          />
        ) : null}
        <h3>SIGNUP TO OUR NEWSLETTER FOR THE LATEST UPDATES</h3>

        <div className="contact-form--container newsletter-form">
          {!newsletterSubmitted ? (
            <form onSubmit={handleNewsletterSubmit}>
              <label className="form-field">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Type here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              {emailError && <div className="error-message">{emailError}</div>}
              <a
                className="primary-button"
                href="#"
                onClick={handleNewsletterSubmit}
              >
                Send Message
              </a>
            </form>
          ) : (
            <div className="newsletter-message">
              <h2>Thank you</h2>
              <h3>You have successfully signed up to our newsletter</h3>
            </div>
          )}
        </div>
      </section>

      <section className="testimonial-section">
        <h2>Testimonials</h2>
        <Carousel />
      </section>
    </>
  );
};

export default Contact;
