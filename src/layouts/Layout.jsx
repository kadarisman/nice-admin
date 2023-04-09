import React from 'react';
import Header from './part/Header';
import SideBar from './part/SideBar';
import Footer from './part/Footer';

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <SideBar/>
            {children}
            <Footer/>
        </>
    );
}

export default Layout;
