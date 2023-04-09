import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeadPage from '../layouts/part/Head';

const Error404 = () => {
  return (
    <>
    <HeadPage title="404"/>
      <main>
        <div className="container">
          <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <h1>404</h1>
            <h2>The page you are looking for doesn't exist.</h2>
            <Link className="btn" href="/">Back to home</Link>
            <Image src="/img/not-found.svg" className="img-fluid py-5" alt="Page Not Found" width="527" height="462" />
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Error404;
