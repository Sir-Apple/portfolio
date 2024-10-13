import React from 'react';
import styled from 'styled-components';

const ModalStyles = styled.div`
  .modal {
    display: block;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: auto;
    padding-top: 50px;
  }
  .modal-content {
    background-color: #fff;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 700px;
    position: relative;
  }
  .close-button {
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
  }
  .project-details {
    margin-bottom: 2rem;
  }
  .project-details img {
    width: 100%;
    border-radius: 8px;
  }
  .project-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .project-buttons button {
    padding: 1rem 2rem;
    font-size: 1.6rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: var(--primary-color);
    color: #fff;
  }
`;

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <ModalStyles>
      <div className="modal">
        <div className="modal-content">
          {/* Close button */}
          <button type="button" className="close-button" onClick={onClose}>
            &times;
          </button>

          {/* Project details */}
          <div className="project-details">
            <h2>{project.company}</h2>
            <h3>{project.name}</h3>
            <img src={project.img} alt={project.name} />
            <div className="project-skills">
              {project.skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
            <p>{project.desc}</p>
          </div>

          {/* Action buttons */}
          <div className="project-buttons">
            <button
              type="button"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              View Live
            </button>
            <button
              type="button"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              View GitHub
            </button>
            <button
              type="button"
              onClick={() => window.open(project.youtubeUrl, '_blank')}
            >
              View YouTube
            </button>
          </div>
        </div>
      </div>
    </ModalStyles>
  );
}
