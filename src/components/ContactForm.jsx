
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_sh6fbt8',
        'template_1f9s68o',
        formData,
        'FPIOAsWpN-6IzB3tt'
      )
      .then(
        (response) => {
          toast.success('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <>
      <Toaster position="top-center" />
      <form>
        <div className='form-row'>
            <label className='form-field'>
            Name
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Type here'
                required
            />
            </label>
            <label className='form-field'>
            Subject
            <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder='Type here'
                required
            />
            </label>
        </div>
        <label className='form-field'>
        Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Type here'
            required
          />
        </label>
        <label className='form-field'>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Type here'
            required
          ></textarea>
        </label>
        <div className="newsletter-container">
            <label className="container">
                <input type="checkbox" defaultChecked />
                <div className="checkmark"></div>
            </label>
            <p>Sign me up for email newsletter and updates</p>
        </div>
        <a onClick={handleSubmit} className='primary-button' type="submit">Send Message</a>
      </form>
    </>
  );
};

export default ContactForm;

