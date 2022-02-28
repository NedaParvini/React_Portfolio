import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
// import About from './components/About';
// import ProjectCard from './components/ProjectCard';
import ContactForm from './components/Contact';
// import Resume from './components/Resume';
import Footer from './components/Footer';
// import Link from './components/Link';
<<<<<<< HEAD
// import Content from './components/Content';

function App() {
  const [pages] = useState([
    
=======
import Content from './components/Content';

function App() {
  const [pages] = useState([
    { name: 'Content'},
>>>>>>> 783c966fc9b09d49ea19d92c4a8264563fb741fe
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
