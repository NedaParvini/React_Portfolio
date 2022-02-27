import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
// import About from './components/About';
// import ProjectBoard from './components/ProjectBoard';
// import ContactForm from './components/Contact';
// import Resume from './components/Resume';
import Footer from './components/Footer';
import Link from './components/Link';

function App() {
  const [pages] = useState([
    { name: 'About Me'},
    { name: 'Portfolio'},
    { name: 'Contact'},
    { name: 'Resume'}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  // const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      ></Nav>
      </Header>
      <main>
        
      <Link currentPage={currentPage}></Link>
         
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
