import React from 'react'
import rmlogo from '../assets/images/rmlogo.png'
import {AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const FooterStyles = styled.footer`
    background-color: black;
    padding: 6rem 0;

    .footer_wrapper{
        text-align: center;
    }

    .footer_logo{
        max-width: 120px;
        margin: 0 auto;
        margin-bottom: 1rem;
    }
    .footer_links{
        margin-bottom: 2rem;
        li{
            display: inline-block;
            margin: 0 1 rem;
        }
        a{
            font-size: 1.6rem;
            color: var(--lightGreen_1);
            line-height: 1.5em;
        }
        svg{
            max-width: 30px;
            color: var(--lightGreen_1);
        }
        li:hover{
            a{
                color: var(--mediumSlateGreen);
            }
            svg{
                color: var(--mediumSlateGreen);
            }
        }
    }
    .footer_love{
        font-size: 1.2rem;
        color: var(--lightGreen_1);
    }

    @media only screen and (max-width: 768px) {
        .footer_links{
            a{
                font-size: 1.4rem;
            }
        }
    }
`;

function Footer() {
  return (
    <FooterStyles>
        <div className="container">
            <div className="footer_wrapper">
                <NavLink to="/">
                    <img className="footer_logo" src={rmlogo} alt="RM-LOGO"/>
                </NavLink>
                <div className="footer_links">
                    <ul>
                        <li>
                            <a href="https://github.com/rizmanter11">
                                <AiFillGithub/> Github
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/riz-manter-69ba8a1a0/">
                                <AiFillLinkedin/> LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="mailto:riz.manter11@gmail.com">
                                <AiFillMail/> Email
                            </a>
                        </li>
                    </ul>
                </div>
                <p className='footer_love'>Made with 💚 by Riz Manter</p>
            </div>
        </div>
    </FooterStyles>
  )
}

export default Footer