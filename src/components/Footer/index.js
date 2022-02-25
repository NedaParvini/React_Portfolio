import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/NedaParvini"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/neda-parvini-846356a8"
    },
    {
      name: "fab fa-instagram",
      link: "https://www.instagram.com/nedaparvini/?hl=en"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;