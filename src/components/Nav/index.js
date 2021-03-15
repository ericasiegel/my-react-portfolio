import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav (props) {

const tabs = ['About Me', 'My Projects', 'Contact Me', 'My Resume'];

 // useEffect hook used for updating the current page on document.title
 useEffect(() => {
    document.title = `Erica Siegel | ${props.currentPage}`;
  }, [props.currentPage]);
  return (
    <ul className="flex-row">
      {tabs.map(tab => (
        <li className="mx-3" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'navActive' : 'ul'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    )
}

export default Nav;