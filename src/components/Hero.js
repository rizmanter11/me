import React from 'react';
import Typed from 'react-typed';
import styled from 'styled-components';
import ThemeList from '../data/ThemeList';
import DownButton from './buttons/DownButton';
import ParagraphText from './paragraphs/ParagraphText';
import { IoIosArrowDropdown } from 'react-icons/io';
import HeroTitle from './titles/HeroTitle';
import heroPic from '../assets/images/hero.png'

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

    .typed{
        font-size: 2rem;
        line-height: 1.4em;
        margin-bottom: 1.5rem;
        max-width: 500px;
        color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkBlue_1)' : 'var(--lightBlue_2)'};

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
                    <HeroTitle className="hero_title">Hi! I'm Riz.</HeroTitle>
                    <div className='typed'>
                        <Typed className="typed-text" strings={['// I study computer science and commerce.']} 
                        typeSpeed={120} backSpeed={140} onComplete={(self) => self.cursor.remove()} />
                        <div className='secLine'>
                            <Typed strings={['// I am a ']} typeSpeed={120} backSpeed={140} 
                            startDelay={7000} showCursor={false}/>
                            <Typed className="iam" strings={['coder.', 'tech enthusiast.', 'studio ghibli connoisseur', 'rice alternative :)']} 
                            typeSpeed={120} backSpeed={140} startDelay={8500} loop/>
                        </div>
                    </div>
                    <DownButton><IoIosArrowDropdown/></DownButton>
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