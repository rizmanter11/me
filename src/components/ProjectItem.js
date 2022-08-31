import React from 'react'
import styled from 'styled-components'
import ThemeList from '../data/ThemeList';

const ProjectItemStyles = styled.div`
    .projectItem_img {
        width: 100%;
        height: 400px;
        border-radius: 12px;
        overflow: hidden;
        display: inline-block;
        border: 3px solid ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkGreen_2)' : 'var(--darkGreen_1)'};
        img {
            height: 100%;
        }
    }
    .projectItem_info {
        margin-top: 1rem;
        background-color: ${({theme: {theme}}) => theme === ThemeList.light ? '#e1ede8' : '#1E1E1E'};
        padding: 1rem;
        border-radius: 12px;
    }
    .projectItem_title {
        font-size: 2.2rem;
        color: var(--mediumSlateGreen);
    }
    .projectItem_desc {
        font-size: 1.6rem;
        margin-top: 1rem;
        text-align: left;
        color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkGreen_2)' : 'var(--lightGreen_1)'};
    }
    @media only screen and (max-width: 768px) {
        .projectItem_img {
            height: 350px;
        }
    }
`;

function ProjectItem({img, title, desc}) {
  return (
    <ProjectItemStyles>
        <a href="#projects" className='projectItem_img'>
            <img src={img} alt="project img" />
        </a>
        <div className="projectItem_info">
            <a href="#projects">
                <h3 className='projectItem_title'>{title}</h3>
            </a>
            <p className="projectItem_desc">{desc}</p>
        </div>
    </ProjectItemStyles>
  )
}

export default ProjectItem