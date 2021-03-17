import React from 'react';
// import icons with react-icons package
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer () {
    // render footer with icons
    return (
        <footer>
            <div className='icons'>
                <a href="https://github.com/ericasiegel" target="_blank" rel="noreferrer"><FaGithub className='icon'/></a>
                <a href="mailto:siegel.erica@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope className='icon' /></a>
                <a href="https://www.linkedin.com/in/erica-siegel-79427640/" target="_blank" rel="noreferrer"><FaLinkedin className='icon' /></a>
            </div>
        </footer>
    )
}

export default Footer;