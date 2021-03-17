import React from 'react';
import './style.css';
import { FaGithub, FaHome } from 'react-icons/fa';

function ProjectCard(props) {
  
  return (
 
    <div className='box'>
      <img src={props.image} alt={props.name} />
      <div className='box-content'>
        <h4 className='title'>{props.name}</h4>
        <span class='post'>{props.description}</span>
          <ul class="icon">
            <li><a href={props.link} target="_blank"><FaHome /></a></li>
            <li><a href={props.github} target="_blank"><FaGithub /></a></li>
          </ul>
      </div>
    </div>

  )
}

export default ProjectCard;