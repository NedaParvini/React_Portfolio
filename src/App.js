import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import Links from './components/Links';


function App() {
  const [pages] = useState([
      {name: 'about me' },
      {name: 'projects'},
      {name: 'resume'},
      {name: 'contact'},
        ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <div>
      <Header>
        <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        >About Projects Resume Contact</Nav>
      </Header>
      <main>
        <Links currentPage={currentPage}></Links>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;