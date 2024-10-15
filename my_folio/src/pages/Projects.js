import React, { useState } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import commercialProjects from '../assets/data/commercial_projects';
import personalProjects from '../assets/data/personal_projects';
import CommercialProjectItem from '../components/CommercialProjectItem';
import PersonalProjectItem from '../components/PersonalProjectItem';
import 'swiper/swiper-bundle.min.css';
import Footer from '../components/Footer';

SwiperCore.use([Navigation]);

const ProjectsSectionStyle = styled.div`
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    padding-bottom: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: black;
    z-index: 10;
    margin-right: 5.5rem;
    top: 2rem;
    transform: translate(50%);
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
  @media only screen and (max-width: 1490px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

const InfoStyle = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  line-height: 2.1rem;
  margin: 15rem 40rem 0;
  padding-bottom: 2rem;
  h1 {
    justify-content: center;
    align-items: center;
    line-height: 4rem;
    color: white;
  }
  @media only screen and (max-width: 1080px) {
    margin: 8rem 5rem 0;
  }
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 2.8rem;
    }
  }
`;

const ModalOverlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

const ProjectImage = styled.img`
  width: 350px;
  height: 300px;
  border-radius: 8px;
  margin: 1rem 7.5% 1rem auto;
  @media only screen and (max-width: 768px) {
    width: 250px;
  }
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  max-width: 800px;
  .modal_skills {
    display: flex;
    gap: 0.5rem;
    font-size: 2.1rem;
    color: white;
    margin-top: 1rem;
  }
  .modal_company {
    font-size: 2rem;
  }
  .modal_title {
    font-size: 2.5rem;
    color: white;
  }
  .modal_desc {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 768px) {
    width: 310px;
    .modal_skills {
      font-size: 1.9rem;
    }
    .modal_company {
      font-size: 1.8rem;
    }
    .modal_title {
      font-size: 2.3rem;
    }
    .modal_desc {
      font-size: 1.5rem;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 2.5rem;
  cursor: pointer;
  background-color: black;
`;

const ButtonGroup = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const ModalButton = styled.a`
  padding: 0.5rem 1rem;
  background: var(--deep-dark);
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.5rem;
  &:hover {
    background: white;
    color: var(--deep-dark);
  }
`;

export default function Projects() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <>
      <ProjectsSectionStyle>
        <InfoStyle>
          <h1>Commercial Projects</h1>
          <div className="projects__allItems">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              breakpoints={{
                640: { slidesPerView: 1 },
                1490: { slidesPerView: 2 },
                1920: { slidesPerView: 3 },
              }}
            >
              {commercialProjects.map((project, index) => {
                if (index >= 5) return null;
                return (
                  <SwiperSlide key={project.id}>
                    <CommercialProjectItem
                      title={project.name}
                      img={project.img}
                      company={project.company}
                      types={project.type}
                      skills={project.skills}
                      desc={project.desc}
                      onClick={() => openModal(project)}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <h1>Personal Projects</h1>
          <div className="projects__allItems">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              breakpoints={{
                640: { slidesPerView: 1 },
                1490: { slidesPerView: 2 },
                1920: { slidesPerView: 3 },
              }}
            >
              {personalProjects.map((project, index) => {
                if (index >= 5) return null;
                return (
                  <SwiperSlide key={project.id}>
                    <PersonalProjectItem
                      title={project.name}
                      img={project.img}
                      types={project.type}
                      skills={project.skills}
                      desc={project.desc}
                      onClick={() => openModal(project)}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </InfoStyle>
        {currentProject && (
          <ModalOverlay isOpen={isModalOpen}>
            <ModalContent>
              <CloseButton onClick={closeModal}>
                <MdClose />
              </CloseButton>
              <div className="modal_company">{currentProject.company}</div>
              <div className="modal_title">{currentProject.name}</div>
              <ProjectImage
                src={currentProject.img}
                alt={currentProject.name}
              />
              <div className="modal_skills">
                {currentProject.skills.join(', ')}
              </div>
              <p className="modal_desc">{currentProject.desc}</p>
              <ButtonGroup>
                {currentProject.webLink && (
                  <ModalButton
                    href={currentProject.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Web Live
                  </ModalButton>
                )}
                {currentProject.githubLink && (
                  <ModalButton
                    href={currentProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    GitHub
                  </ModalButton>
                )}
                {currentProject.gameyoutubeLink && (
                  <ModalButton
                    href={currentProject.gameyoutubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Game Demo
                  </ModalButton>
                )}
                {currentProject.softwareyoutubeLink && (
                  <ModalButton
                    href={currentProject.softwareyoutubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Interactive Demo
                  </ModalButton>
                )}
                {currentProject.downloadLink && (
                  <ModalButton
                    href={currentProject.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Download
                  </ModalButton>
                )}
                {currentProject.overviewLink && (
                  <ModalButton
                    href={currentProject.overviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Overview
                  </ModalButton>
                )}
              </ButtonGroup>
            </ModalContent>
          </ModalOverlay>
        )}
      </ProjectsSectionStyle>
      <Footer />
    </>
  );
}
