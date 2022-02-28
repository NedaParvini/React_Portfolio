import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Resume from '../Resume';
import Projects from '../Projects';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Content from '../Content';

function Links({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <Content>{renderPage()}</Content>      
    </div>
  )
}

export default Links;