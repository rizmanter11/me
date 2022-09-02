import React from 'react'
import styled from 'styled-components'
import ThemeList from '../data/ThemeList';
import FaqItem from './FaqItem';
import {GiBowlOfRice} from 'react-icons/gi';
import {BiCodeBlock} from 'react-icons/bi';
import {RiQuestionnaireFill} from 'react-icons/ri';
import brick_moss from '../assets/images/brick_moss.jpg';
import white_brick from '../assets/images/white_brick.jpg';

const FaqStyles = styled.div`
    padding: 10rem 0;
    padding-top: var(--header-height);
    text-align: center;
    background-image: ${({theme: {theme}}) => theme === ThemeList.light ? `url(${white_brick})` : `url(${brick_moss})`};
    background-size: cover;
    position: relative;
    z-index: 1;

    .faq_title{
        font-size: 4rem;
        font-weight: 800;
        color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkGreen_4)' : 'var(--lightGreen_1)'};
        text-transform: capitalize;
        margin-bottom: 3rem;
        @media only screen and (max-width: 768px){
            font-size: 3rem;
        }
    }

    .faq_items{
        display: flex;
        gap: 2rem;
    }

    @media only screen and (max-width: 768px) {
        .faq_items{
            flex-direction: column;
            max-width: 300px;
            margin: 0 auto;
        }
    }
`;

function Faq() {
  return (
    <FaqStyles>
        <div className="container">
            <h3 className='faq_title'>FAQ (Allegedly)</h3>
            <div className="faq_items">
                <FaqItem icon={<BiCodeBlock/>} question="Do you have a favourite programming language?" 
                ans={<p><s>It's Python and by alot.</s> No every language is beautiful in their own way and 
                there is no way I could ever choose between their design and complexities.</p>}/>
                <FaqItem icon={<GiBowlOfRice/>} question="Why are you a rice alternative?" 
                ans="My parents failed to anticipate that my name would mean something else in french. Now every bag of rice I see has my name on it."/>
                <FaqItem icon={<RiQuestionnaireFill/>} question="Why a FAQ?" 
                ans="I needed some space between my hero and about section. Also I thought having some card elements would be aesthetic. ¯\_(ツ)_/¯"/>
            </div>
        </div>
    </FaqStyles>
  )
}

export default Faq