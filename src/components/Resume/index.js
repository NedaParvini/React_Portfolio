import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Download my <a href="https://www.nedaparvini.com/resume">resume</a>
        </p>
        <h3>Front-end Skills</h3>
        <ul className="skills">
          <li>HTML <i className="fab fa-html5"></i></li>
          <li>CSS <i className="fab fa-css3-alt"></i></li>
          <li>JavaScript <i className="fab fa-js"></i></li>          
          <li>React <i className="fab fa-react"></i></li>
          <li>Bootstrap <i className="fab fa-bootstrap"></i></li>
          <li>jQuery</li>
          <li>Responsive Design</li>
        </ul>
        <h3>Back-end Skills</h3>
        <ul className="skills">          
          <li>Node <i className="fab fa-node-js"></i></li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>APIs</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;