import React from "react";

import "./index.scss";

import { IProjects, Project } from '../../interfaces/interfaces'

import Icon from '../../pictures/folderIcon.ico'

export default function RProjects(props: IProjects) {

  // const openModal = () => {
  //   const modal = document.getElementById('project--modal');
  //   modal && modal.classList.remove('none');
  // }

  // const closeModal = () => {
  //   const modal = document.getElementById('project--modal');
  //   modal && modal.classList.add('none');
  // }

  return (
    <div className="projects">
      {props.projects && props.projects.map((project: Project, key: number) => {
        return (
          <li
            key={key}
            className="project"
          // onClick={openModal}
          >
            <a href={project.link} target="_blank">
              <div className="project--photo hover">
                <img src={Icon} className="project--photo--icon" alt={project.image} />
                <img src={project.image} className="project--photo--cover" alt={project.name} />
              </div>
            </a>
            <span className="project--label">{project.name}</span>
            {/* <div className="project--modal none" id="project--modal">
              <span className="project--modal--text">{project.name}</span>
              <button onClick={closeModal}>X</button>
            </div> */}
          </li>
        );
      })}
    </div>
  );
}
