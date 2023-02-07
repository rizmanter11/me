import React from 'react'
import styled from 'styled-components'
import ThemeList from '../data/ThemeList';

const FaqItemStyles = styled.div`
    text-align: left;
    padding: 3rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px ${({theme: {theme}}) => theme === ThemeList.light ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
    backdrop-filter: blur(5px);

    .faq_icon{
        font-size: 2rem;
        margin-bottom: 1rem;
        background-color: var(--mediumSlateGreen);
        border-radius: 50%;
        width: fit-content;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;

        svg {
            width: 60%;
        }
    }

    .faq_question{
        font-size: 2rem;
        font-weight: 500rem;
        line-height: 1.5em;
        margin-bottom: 1rem;
        color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkGreen_2)' : 'var(--lightGreen_1)'};
    }

    .faq_ans{
        font-size: 1.6rem;
        line-height: 1.4em;
        color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkGreen_1)' : 'var(--lightGreen_2)'};

        @media only screen and (max-width: 768px) {
            font-size: 1.4rem;
        }
    }

    &:hover{
        background-color: var(--mediumSlateGreen);
        transition-timing-function: ease-in-out;
        transition-delay: 0.07s;
        .faq_icon{
            background-color: var(--lightGreen_1);
            color: var(--mediumSlateGreen);
        }
        .faq_question{
            color: var(--lightGreen_1);
        }
        .faq_ans{
            color: var(--lightGreen_1);
        }
    }

    @media only screen and (max-width: 768px){
        background-color: var(--mediumSlateGreen);
        .faq_icon {
            background-color: var(--lightGreen_1);
            color: var(--mediumSlateGreen);
        }

        .faq_question{
            color: var(--lightGreen_1);
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
        }

        .faq_ans{
            color: var(--lightGreen_1);
        }


    }
`;

function FaqItem({icon, question, ans}) {
  return (
    <FaqItemStyles>
        <div className="faq_icon">{icon}</div>
        <div className="faq_question">{question}</div>
        <p className="faq_ans">{ans}</p>
    </FaqItemStyles>
  )
}

export default FaqItem