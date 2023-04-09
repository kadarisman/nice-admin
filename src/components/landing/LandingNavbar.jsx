import React, { useState } from 'react';

const LandingNavbar = (props) => {
const [activeLink, setActiveLink] = useState(null);

const handleLinkClick = (event, link) => {
    setActiveLink(link);
  }
    return (
        <>
             <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${props.shrink}`} id="mainNav">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
                    <button className="navbar-toggler navbar-toggler-right pe-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu &nbsp;
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className={activeLink === 'about' ? 'nav-link active' : 'nav-link'}>About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className={activeLink === 'projects' ? 'nav-link active' : 'nav-link'}>Projects</a>
                            </li>
                            <li className="nav-item">
                                <a href="#signup" onClick={(e) => handleLinkClick(e, 'signup')} className={activeLink === 'signup' ? 'nav-link active' : 'nav-link'}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default LandingNavbar;
