import React from 'react';
import Image from '../../assets/myav.png';
function About() {
  return (
    <section className="my-2">
      <h1 id="about"> </h1>
      { <img src={Image} className="my-2" style={{ width: "15%" }} alt="My Avatar" /> }
      <div className="my-2">
        <p>
        Full Stack Web Developer with more than 10 years of background in Information Technology.
        Effective at combining creativity and problem solving to develop user-friendly applications.
        Known among staff for strong wit and attention to detail no matter the complexity of the project, and recently earned a Certificate in Full Stack Web Development from the University of California, Davis.
        </p>
      </div>
    </section>
  );
}

export default About;
