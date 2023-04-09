import React from 'react';
import Link from 'next/link';

const LandingHeader = () => {
    return (
        <>
            <header className="masthead">
                <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <h1 className="mx-auto my-0 text-uppercase">Grayscale</h1>
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2>
                            <a className="btn btn-primary me-1 mt-1" href="#about">Get Started</a>
                            <Link className="btn btn-primary mt-1" href="/">Back Admin Page</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default LandingHeader;
