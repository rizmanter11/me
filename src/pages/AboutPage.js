import React from 'react';
import PrimaryButton from '../components/buttons/PrimaryButton';
import about_2 from '../assets/images/about-2.png';
import styled from 'styled-components';
import ThemeList from '../data/ThemeList';
import Resume from '../assets/files/RizManter.pdf'

const AboutPageStyles = styled.div`
	padding: 20rem 0 10rem 0;

	.top-section{
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}

	.left {
		flex: 3;
	}

	.right{
		flex: 2;
	}

	.about_subheading {
		font-size: 2.2rem;
		margin-bottom: 1rem;
		font-weight: 600;
		text-transform: capitalize;
		color: var(--mediumSlateGreen);
		span{
			background-color: ${({theme: {theme}}) => theme === ThemeList.light ? '#e1ede8' : '#1E1E1E'};
			color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkGreen_2)' : 'var(--lightGreen_1)'};
			padding: 0.1rem 0.5rem;
			border-radius: 8px;
		}
	}

	.about_heading{
		font-size: 3.6rem;
		margin-bottom: 3rem;
		color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkGreen_2)' : 'var(--lightGreen_1)'};
	}

	.about_info{
		margin-bottom: 4rem;
		p {
			max-width: 100%;
			font-size: 1.6rem;
			line-height: 1.4em;
			color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkGreen_1)' : 'var(--lightGreen_2)'};

			@media only screen and (max-width: 768px) {
				font-size: 1.4rem;
			}
		}
	}

	.right{

	}
`;

function AboutPage() {
  return (
    <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about_subheading">
                Hi again! I'm <span>Riz.</span>
              </p>
              <h3 className="about_heading">More About Me...</h3>
              <div className="about_info">
                <p>
                  Hello, as you've probably read a million times now my name is Riz Manter and I'm a Penultimate Year student at UNSW. 
                  I am an aspiring Software Developer with hands on experience in front and 
                  back-end development, supported by a solid foundation of theoretical knowledge. 
                  This passion has been cultivated from a young age where I had a love for ideas 
                  and problem solving. This has transferred into an avidity for technology, 
                  motivation to work and engage in teams to solve the worlds current and upcoming 
                  problems.
                  <br/> <br/>
                  I am a current Computer Science and Commerce student at UNSW graduating at the end 
                  of 2023. Most of my programming experience lies with C, Java, Python and Javascript. 
                  Although I have engaged with databases, networks, OO design and functional programming, 
                  I am always keen to step outside my comfort zone.
                </p>
              </div>
			  <a href={Resume} download>
              	<PrimaryButton>Download Resume</PrimaryButton>
			  </a>
            </div>
            <div className="right">
              <img src={about_2} alt="Another About Img"/>
            </div>
          </div>
        </div>
    </AboutPageStyles>
  )
}

export default AboutPage