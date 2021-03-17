import React from 'react';
import './style.css';

function ProjectCard(props) {
  
  return (
 
    <div className='box'>
      <img src={props.image} alt={props.name} />
      <div className='box-content'>
        <h4 className='title'>{props.name}</h4>
        <span class='post'>{props.description}</span>
          <ul class="icon">
            <li><a href={props.link}><i class="fa fa-search"></i></a></li>
            <li><a href={props.github}><i class="fa fa-link"></i></a></li>
          </ul>
      </div>
    </div>

  )
}

export default ProjectCard;