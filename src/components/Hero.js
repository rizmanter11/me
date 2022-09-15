import React from 'react';
import Typed from 'react-typed';
import styled from 'styled-components';
import ThemeList from '../data/ThemeList';
import DownButton from './buttons/DownButton';
import { IoIosArrowDropdown } from 'react-icons/io';
import heroPic from '../assets/images/hero.png'
import { Link } from 'react-scroll';

const HeroStyles = styled.header`
    min-height: 100vh;
    padding-top: calc(var(--header-height) + 10px); // height of header
    display: flex;
    align-items: center;
    justify-content: center;

    .hero_wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 1rem;
    }

    .hero_info{
        flex: 3;
    }

    .hero_img{
        flex: 4;
        img{
            object-fit: contain;
        }
    }

    .hero_title{
        margin-bottom: 1.5rem;
        max-width: 400px;
        font-size: 6rem;
        color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkGreen_2)' : 'var(--lightGreen_1)'};
        font-weight: 900;
        text-transform: capitalize;
        @media only screen and (max-width: 768px) {
            font-size: 4rem;
        }
    }

    @media only screen and (max-width: 768px){
        .hero_wrapper {
            flex-direction: column-reverse;
            gap: 0.5rem;
        }

        .hero_img {
            display: flex;
            justify-content: flex-end;
            img{
                max-width: 400px;
                margin-top: auto;
            }
        }
    }

    .iam{
        padding-left: 5px;
    }

    .gradient_name{
        background: ${({theme: {theme}}) => theme === ThemeList.light ? '-webkit-linear-gradient(#00b09b, #96c93d)' : '-webkit-linear-gradient(#80ff72, #7EE8FA)'};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .typed{
        font-size: 2rem;
        line-height: 1.4em;
        margin-bottom: 1.5rem;
        max-width: 500px;
        color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkGreen_1)' : 'var(--lightGreen_2)'};

        @media only screen and (max-width: 768px) {
            font-size: 1.8rem;
        }
    }
`;

function Hero() {
  return (
    <HeroStyles id="hero">
        <div className="container">
            <div className="hero_wrapper">
                <div className="hero_info">
                    <h1 className="hero_title">Hi! I'm <span className="gradient_name">Riz.</span></h1>
                    <div className='typed'>
                        <Typed className="typed-text" strings={['// I study computer science and commerce.']} 
                        typeSpeed={120} backSpeed={140} onComplete={(self) => self.cursor.remove()} />
                        <div className='secLine'>
                            <Typed strings={['// I am a ']} typeSpeed={120} backSpeed={140} 
                            startDelay={7000} showCursor={false}/>
                            <Typed className="iam" strings={['coder.', 'tech enthusiast.', 'software team lead.', 'studio ghibli connoisseur', 'rice alternative :)']} 
                            typeSpeed={120} backSpeed={140} startDelay={8500} loop/>
                        </div>
                    </div>
                    <DownButton>
                        <Link to="about" smooth>
                            <IoIosArrowDropdown/>
                        </Link>
                    </DownButton>
                </div>
                <div className="hero_img">
                    <img src={heroPic} alt="Hero Pic"/> 
                </div>
            </div>
            
        </div>
    </HeroStyles>
  )
}

export default Hero