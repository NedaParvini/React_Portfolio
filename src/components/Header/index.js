import React from 'react';



function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1></h1>
      <img src={coverImage} alt=''></img>
      {props.children}
    </header>
  )
}

export default Header;