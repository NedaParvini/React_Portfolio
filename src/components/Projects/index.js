import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';

function Projects() {

  const [projects] = useState([
    {
      name: ' Weathe ControlPanel ',
      description: 'Build a Server-Side APIs Weather Dashboard that will run in the browser and feature dynamically updated HTML and CSS.',
      link: 'https://nedaparvini.github.io/Weather-controlPanel/',
      repo: 'https://github.com/NedaParvini/Weather-controlPanel'
    },
    {
      name: 'E-ccommerce BackEnd',
      description: 'Build the back end for an Object-Relational Mapping (ORM) E-commerce',
      link: 'https://youtu.be/VFZjPGj6LhY',
      repo: 'https://github.com/NedaParvini/E-commerce_BackEnd'
    },
    {
      name: 'Progressive Web Applications Budget Tracker',
      description: 'Budget tracker application to allow for online/offline access and functionality. Shows the graph based on add/subtract funds.',
      link: 'https://mysterious-sea-57565.herokuapp.com/',
      repo: 'https://github.com/NedaParvini/PWA_BudgeTracker'
    },
    {
      name: 'Social Network API',
      description: 'NoSQL Social Network API using MongoDB. This app build an API for a social network web application where users can share their thoughts, react to friends thoughts and create a friend list',
      link: 'https://youtu.be/JFUoX5OHHN4',
      repo: 'https://github.com/NedaParvini/SocialNetworkAPI'
    },
    {
      name: 'Workday-Calendar',
      description: 'Built a third-party APIs Work Day Scheduler using Moment.js and this app run in the browser and feature dynamically updated HTML and CSS powered by jQuery',
      link: 'https://nedaparvini.github.io/Workday-Calendar/',
      repo: 'https://github.com/NedaParvini/Workday-Calendar'
    }
    
  ]);

  return (
    <div>
      <div className='flex-row'>
        {projects.map((projects, idx) => (
          <ProjectCard
            projects={projects}
            key={'projects' + idx}
          ></ProjectCard>        
        ))}
      </div>
    </div>
  )
}

export default Projects;