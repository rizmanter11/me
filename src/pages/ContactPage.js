import React, { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import PrimaryButton from '../components/buttons/PrimaryButton';
import FormField from '../components/FormField';
import ThemeList from '../data/ThemeList';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPageStyles = styled.div`
  padding: 10rem 0;
  .contact_wrapper {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.4em;
    color: ${({ theme: { theme } }) => theme === ThemeList.light ? 'var(--darkGreen_1)' : 'var(--lightGreen_2)'};
    @media only screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  h3 {
    font-size: 4rem;
    font-weight: 800;
    color: ${({ theme: { theme } }) =>
      theme === ThemeList.light ? 'var(--darkGreen_2)' : 'var(--lightGreen_1)'};
    @media only screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }

  .toastmessage_s{
    background: ${({ theme: { theme } }) => theme === ThemeList.light ? '#e1ede8' : '#1E1E1E'};
    color: ${({ theme: { theme } }) => theme === ThemeList.light ? 'black' : 'white'};
    font-size: 15px;
  }

  .toastmessage_e{
    background: ${({ theme: { theme } }) => theme === ThemeList.light ? '#e1ede8' : '#1E1E1E'};
    color: ${({ theme: { theme } }) => theme === ThemeList.light ? 'black' : 'white'};
    font-size: 15px;
  }

  .Toastify__close-button {
    color: ${({ theme: { theme } }) => theme === ThemeList.light ? 'black' : 'white'};
  }

  .contact_info {
    margin-bottom: 4rem;
  }
  .contact_form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 3rem;
    .contact_field--fullWidth {
      grid-column: span 2;
    }
    .contact_submit {
      width: max-content;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 768px) {
    .contact_form {
      grid-template-columns: 1fr;
      row-gap: 2rem;
      .contact_field--fullWidth {
        grid-column: span 1;
      }
    }
  }
`;

function ContactPage() {
  useEffect(() => {
		document.title = "Contact | Riz Manter"
	}, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const email_reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email_data = e.target[1].value;

    if(!email_reg.test(email_data)){
      toast.error('Please enter a valid email!', {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toastmessage_e'
      });
      return;
    }


    emailjs.sendForm('service_cml0548', 'template_8crlwi8', form.current, 'nc8njLJJo5L5Lq7Yf')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();

          toast.success('Success! Email Sent', {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toastmessage_s'
          });

      }, (error) => {
          console.log(error.text);

          toast.error('Error sending email!', {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toastmessage_e'
          });
      });
  };

  return (
    <ContactPageStyles id="contact">
      <div className="container">
        <div className="contact_wrapper">
          <div className="contact_info">
            <h3>Get In Touch</h3>
            <p>I'm always open to feedback and meeting new people</p>
          </div>
          <form id="form" ref={form} className="contact_form" onSubmit={sendEmail}>
            <FormField
              className="contact_field--fullWidth"
              type="text"
              label="name"
              name="name"
              id="name"
              required
            />
            <FormField
              type="email"
              label="Email"
              name="email"
              id="email"
              required
            />
            <FormField
              type="text"
              label="Subject"
              name="subject"
              id="subject"
              required
            />
            <FormField
              className="contact_field--fullWidth"
              label="Message"
              name="message"
              id="message"
              rows="6"
            />
            <PrimaryButton
              type="submit"
              buttonType="button"
              className="contact_submit"
              value="Send"
            >
              Submit
            </PrimaryButton>
            <ToastContainer />
          </form>
        </div>
      </div>
    </ContactPageStyles>
  );
}

export default ContactPage;