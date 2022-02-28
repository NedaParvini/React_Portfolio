import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
// import About from './components/About';
// import ProjectCard from './components/ProjectCard';
import ContactForm from './components/Contact';
// import Resume from './components/Resume';
import Footer from './components/Footer';
// import Link from './components/Link';
import Content from './components/Content';

function App() {
  const [pages] = useState([
    { name: 'Content'},
    { name: 'About'},
    { name: 'Portfolio'},
    { name: 'Contact'},
    { name: 'Resume'}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      </Header>
      <main>
      {!contactSelected ? (
          <>
      <Nav currentPage={currentPage}></Nav>
      
            
          </>
        ) : (
          <ContactForm></ContactForm>    
        )}
         
        
      </main>
     
      
      <Footer></Footer>
      
    </div>
  );
}

export default App;
