import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
// import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
// import Link from './components/Link';
import Contact from './components/Contact';


function App() {
  const [pages] = useState([
    
    { name: 'About'},
    { name: 'Projects'},
    { name: 'Contact'},
    { name: 'Resume'}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  const [contactSelected, setContactSelected] = useState(false);
  
  function returnpage(){
   if (currentPage.name === "About")
   return <About/>
   else if(currentPage.name === "Projects")
   return <Projects/>
   else if(currentPage.name === "Contact")
   return <Contact/>
   else if(currentPage.name === "Resume")
   return <Resume/>   
  }
  return (
    <div>
      <Header>
      
      </Header>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        
        {returnpage()}
         
        
      </main>
     
      
      <Footer></Footer>
      
    </div>
  );
}

export default App;
