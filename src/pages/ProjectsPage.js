import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ProjectItem from '../components/ProjectItem.js';
import projects from '../data/ProjectsData.js';
import 'swiper/css/bundle';
import ThemeList from '../data/ThemeList.js';
import { useEffect } from 'react';

// install Swiper modules
SwiperCore.use([Navigation]);

const ProjectsPageStyle = styled.div`
  padding: 10rem 0;
  text-align: center;

  .project_allItems {
    display: flex;
    gap: 3rem;
    margin-top: 2rem;
  }

  .proj_sub {
		font-size: 2.2rem;
		margin-bottom: 1rem;
		font-weight: 600;
		text-transform: capitalize;
		color: var(--mediumSlateGreen);
	}

  .proj_title{
		font-size: 3.6rem;
		margin-bottom: 1rem;
		color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkGreen_2)' : 'var(--lightGreen_1)'};
	}

  .swiper {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--mediumSlateGreen);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: white;
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .project_allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem_img {
        width: 100%;
      }
    }
  }
`;

function ProjectsPage() {
  useEffect(() => {
		document.title = "Projects | Riz Manter"
	}, []);
  
  return (
    <ProjectsPageStyle>
      <div className="container">
        <p className='proj_sub'>Some of my recent works</p>
        <h3 className='proj_title'>Projects</h3>
        <div className="project_allItems">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                // when window width is >= 1200px
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={project.id}>
                    <ProjectItem
                      title={project.name}
                      img={project.img}
                      desc={project.desc}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
        </div>
      </div>
    </ProjectsPageStyle>
  )
}

export default ProjectsPage