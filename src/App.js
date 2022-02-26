import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';

import ContactForm from './components/Contact';

function App() {
  const [pages] = useState([
    {
      name: 'About Me',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'Portfolio', description: 'Portraits of people in my life' },
    { name: 'Contact', description: 'Delicious delicacies' },
    { name: 'Resume', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
