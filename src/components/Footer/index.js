import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer () {
    return (
        <footer>
            <div className='icons'>
                <a href="https://github.com/ericasiegel" target="_blank"><FaGithub className='icon'/></a>
                <a href="mailto:siegel.erica@gmail.com" target="_blank"><FaEnvelope className='icon' /></a>
                <a href="https://www.linkedin.com/in/erica-siegel-79427640/" target="_blank"><FaLinkedin className='icon' /></a>
            </div>
        </footer>
    )
}

export default Footer;