import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function ProjectCard({ projects }) {

  const {name, repo, link, description } = projects;

  return (
    <div className='projects' key={name}>
      <img 
        src={require(`../../assets/projects/${name}.jpg`).default}
        alt={removeHyphensAndCapitalize(name)}
        className='project-bg'
      />
      <div className='project-text'>
        <h3>
          <a href={link} target='_blank' rel='noreferrer'>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo} target='_blank' rel='noreferrer'>
            <i className='fab fa-github'></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;