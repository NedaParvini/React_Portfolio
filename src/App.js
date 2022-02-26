import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Links from './components/Link'

function App() {
  const [pages] = useState([
    {name: 'about me' },
    {name: 'projects'},
    {name: 'resume'},
    {name: 'contact'}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Links currentPage={currentPage}></Links>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;