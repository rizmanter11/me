import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import AboutImg from '../assets/images/about.png';
import ThemeList from '../data/ThemeList';
import PrimaryButton from './buttons/PrimaryButton';

const AboutStyles = styled.div`
    padding: 10rem 0;

    .about_wrapper{
		display: flex;
		align-items: center;
		justify-content: center;
    }

	p {
        font-size: 1.6rem;
        line-height: 1.4em;
        color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkGreen_1)' : 'var(--lightGreen_2)'};

        @media only screen and (max-width: 768px) {
            font-size: 1.4rem;
        }
    }

	.about_subtitle{
		margin-bottom: 1rem;
		font-weight: 600;
		text-transform: capitalize;
		color: var(--mediumSlateGreen);
	}

	.about_info{
		padding-left: 5rem;
	}

	.about_title{
		font-size: 4rem;
		font-weight: 800;
		color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkGreen_2)' : 'var(--lightGreen_1)'};
		text-transform: capitalize;
		margin-bottom: 2rem;
		max-width: 300px;

		@media only screen and (max-width: 768px){
			font-size: 3rem;
		}
	}

	.about_desc{
		margin-bottom: 2rem;
		max-width: 400px;
	}

	@media only screen and (max-width: 768px){
		.about_wrapper{
			flex-direction: column;
		}
		.about_img{
			max-width: 400px;
		}
	}

`;

function About() {
  return (
    <AboutStyles id="about">
      <div className="container">
        <div className="about_wrapper">
          <div className="about_img">
            <img src={AboutImg} alt="Me doing some fun stuff :)" loading="lazy"/>
          </div>
          <div className="about_info">
            <p className='about_subtitle'>Let me introduce myself</p>
            <h3 className="about_title">About Me!</h3>
            <p className='about_desc'>Hello, my name is Riz Manter and I'm a Final Year student at UNSW.
              I am an aspiring Graduate Software Engineer with hands on experience in front and back-end development.
              I love hiking, especially with friends and can be seen watching Studio Ghibli movies occasionally.
            </p>
            <PrimaryButton buttonType={NavLink} to="/about">Read More</PrimaryButton>
          </div>
        </div>
      </div>
    </AboutStyles>
  )
}

export default About