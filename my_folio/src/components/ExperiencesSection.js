import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import experiences from '../assets/data/experiences';
import ExperiencesItem from './ExperiencesItem';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

const ExperiencesSectionStyle = styled.div`
  .experiences__allItems {
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
    margin-right: 6rem;
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
    .experiences__allItems {
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

export default function ExperiencesSection() {
  return (
    <ExperiencesSectionStyle>
      <div className="projects__allItems">
        <Swiper spaceBetween={30} slidesPerView={1} navigation>
          {experiences.map((experience, index) => {
            if (index >= 5) return;
            return (
              <SwiperSlide key={experience.id}>
                <ExperiencesItem
                  position={experience.position}
                  timestamp={experience.timestamp}
                  company={experience.org}
                  descr={experience.desc}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </ExperiencesSectionStyle>
  );
}
