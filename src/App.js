import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [pages] = useState([
    { name: 'About Me'},
    { name: 'Portfolio'},
    { name: 'Contact'},
    { name: 'Resume'},
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
            
            <About></About>
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
