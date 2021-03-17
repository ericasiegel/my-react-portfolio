import React from 'react';
// import the style.css for the ProjectCard
import './style.css';
// import the icons from react-icons package
import { FaGithub, FaHome } from 'react-icons/fa';

function ProjectCard(props) {
  // render the project card and import the properties from the projects array
  return (
 
    <div className='box'>
      <img src={props.image} alt={props.name} />
      <div className='box-content'>
        <h4 className='title'>{props.name}</h4>
        <span className='post'>{props.description}</span>
          <ul className="icon">
            <li><a href={props.link} target="_blank" rel="noreferrer"><FaHome /></a></li>
            <li><a href={props.github} target="_blank" rel="noreferrer"><FaGithub /></a></li>
          </ul>
      </div>
    </div>

  )
}

export default ProjectCard;