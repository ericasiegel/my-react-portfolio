import React from 'react';
// import the Nav component
import Nav from '../Nav'

function Header (props) {
    return (
        <div>
            <header className="flex-row px-3">
                <h1>Erica Siegel</h1>
                <nav>
                    <Nav  currentPage={props.currentPage} handlePageChange={props.handlePageChange}></Nav>
                </nav>
            </header>
            <div className="flex-row px-5">
                <h5>Full Stack Web Design</h5>
            </div>
        </div>

    )

}

export default Header;