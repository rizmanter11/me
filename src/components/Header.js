import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ThemeSwitcher from './ThemeSwitcher';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeList from '../data/ThemeList';
import rmlogo from '../assets/images/rmlogo.png'
import { NavLink } from 'react-router-dom';

const HeaderStyles = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    background-color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--lightGreen_1)' : 'var(--darkGreen_3)'};
    box-shadow: ${({theme: {theme}}) => theme === ThemeList.light ? "0 4px 30px rgba(0,0,0,0.1)" : "0 4px 30px rgba(255,255,255,0.2)"};
    border-bottom: 1px solid var(--mediumSlateGreen);
    z-index: 300;

    .navigation{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem 0;
    }

    img{
        max-width: 225px;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    nav ul li{
        display: inline-block;
        margin: 0 1.5rem;
        a {
            font-size: 2rem;
            font-weight: 500;
            display: inline-block;
            padding: 0.5rem 1rem;
            color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkGreen_2)' : 'var(--lightGreen_1)'};
        }
        &:hover {
            a{
                color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkGreen_1)' : 'var(--lightGreen_2)'};
            }
        } 
        a.active {
            text-decoration: underline;
        }
    }

    .navMenu {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .menuIcon, .closeIcon{
        width: 30px;
        height: 30px;
        cursor: pointer;
        margin-left: 10px;
        padding: 3px;
        border-radius: 4px;
        svg{
            color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkGreen_2)' : 'var(--lightGreen_1)'};
        }
        &:hover{
            background-color: #8080803b;
        }
    }

    .closeIcon{
        position: absolute;
        right: 10px;
        top: 10px;
        &:hover{
            svg{
                color: white;
            }
        }
    }

    .navOverlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: var(--darkGreen_3);
        opacity: 0.4;
    }

    @media only screen and (max-width: 768px){
        nav {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: fixed;
            width: 90%;
            max-width: 250px;
            top: 0;
            right: 0;
            background-color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--white)' : 'var(--darkGreen_4)'};
            height: 100vh;
            z-index: 100;
            transform: translateX(100%);
            transition: 0.3s ease-in-out transform;
            overflow: hidden;
        }

        nav.open{
            box-shadow: -1px 4px 10px 3px rgb(0 0 0 / 16%);
            transform: translateX(0);
        }

        nav ul li{
            display: block;
            text-align: right;
            width: 100%;
            margin: 0.5rem 0;
            a{
                display: block;
                width: 100%;
            }
        }
    }
`;

function Header() {
    const headerRef = useRef(null);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(
        window.matchMedia('(max-width: 768px)').matches
    );

    useEffect(() => {
        function disableScroll() {
          document.body.style.overflow = 'hidden';
        }
        function enableScroll() {
          document.body.style.overflow = '';
        }
    
        if (isNavOpen) {
          disableScroll();
        } else {
          enableScroll();
        }
    }, [isNavOpen]);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(
                window.matchMedia('(max-width: 768px)').matches
            )
        });

        window.addEventListener('scroll', () => {
            if (headerRef.current && window.scrollY > 100) {
              headerRef.current.style.boxShadow =
                '0px 0px 10px 0px rgba(0, 0, 0, 0.5)';
            }
        });
    }, []);

    return (
        <HeaderStyles>
            <div className="container">
                <div className="navigation">
                    <NavLink to="/me">
                        <img src={rmlogo} alt="RM-LOGO"/>
                    </NavLink>
                    <div className="navMenu">
                        <nav className={isMobile && isNavOpen ? 'open': undefined}>
                            {isMobile && (
                                <div className="closeIcon" tabIndex='0' role='button' onClick={() => setIsNavOpen(false)} onKeyDown={() => setIsNavOpen(false)}>
                                    <FiX></FiX>
                                </div>
                            )}
                            <ul>
                                <li>
                                    <NavLink to="/me">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/projects">Projects</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                        {isNavOpen && (
                            <div
                                className="navOverlay"
                                tabIndex="0"
                                aria-label="overlay"
                                role="button"
                                onKeyDown={() => setIsNavOpen(false)}
                                onClick={() => setIsNavOpen(false)}
                            />
                        )}
                        <ThemeSwitcher/>
                        {isMobile && (
                            <div className="menuIcon" tabIndex="0" role="button" onClick={() => setIsNavOpen(true)} onKeyDown={() => setIsNavOpen(true)}>
                                <FiMenu/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </HeaderStyles>
    )
}

export default Header