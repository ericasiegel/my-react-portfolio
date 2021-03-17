import React, { useEffect } from 'react';

function Nav (props) {
// nav bar array to set the page links
const links = ['About Me', 'My Projects', 'Contact Me', 'My Resume'];

 // useEffect hook used for updating the current page on document.title
 useEffect(() => {
    document.title = `Erica Siegel | ${props.currentPage}`;
  }, [props.currentPage]);

  // return statement rendering JSX
  // use .map to sort through the links array above and render the nav list
  // set onClick property to handlePageChange from App.js to activate each page when clicked
  return (
    <ul className="flex-row">
      {links.map(link => (
        <li className="mx-2" key={link}>
          <a
            href={'#' + link.toLowerCase()}
            onClick={() => props.handlePageChange(link)}
            className={
              props.currentPage === link ? 'navActive' : 'ul'
            }
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
    )
}

export default Nav;