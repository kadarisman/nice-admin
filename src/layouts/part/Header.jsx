import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Image from 'next/image'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickToggleBtn = () => {
        if(isOpen == false){
            document.body.classList.toggle('toggle-sidebar');
            setIsOpen(true);
        }else{
            document.body.classList.remove('toggle-sidebar');
            setIsOpen(false);
        }
      };
    
      useEffect(() => {
        return () => {
          document.body.classList.remove('toggle-sidebar');
        };
      }, []);
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <Image src="/img/logo.png" alt="logo" width="25" height="25" />
                        <span className="d-none d-lg-block">NiceAdmin</span>
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn" onClick={handleClickToggleBtn}></i>
                </div>
                {/* <!-- End Logo --> */}

                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                    </form>
                </div>
                <NavBar/>
            </header>
        </>
    );
}

export default Header;
