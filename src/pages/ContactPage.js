import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../components/buttons/PrimaryButton';
import FormField from '../components/FormField';
import ThemeList from '../data/ThemeList';

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
  return (
    <ContactPageStyles id="contact">
      <div className="container">
        <div className="contact_wrapper">
          <div className="contact_info">
            <h3>Get In Touch</h3>
            <p>I'm always open to feedback and meeting new people</p>
          </div>
          <form className="contact_form">
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
            >
              Submit
            </PrimaryButton>
          </form>
        </div>
      </div>
    </ContactPageStyles>
  );
}

export default ContactPage;