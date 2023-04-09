import React from 'react';
import Layout from '../../layouts/Layout';
import HeadPage from '../../layouts/part/Head';

const Buttons = () => {
    return (
        <>
            <HeadPage title="Button" />
            <Layout>
                <main id="main" className="main">

                    <div className="pagetitle">
                        <h1>Buttons</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Components</li>
                                <li className="breadcrumb-item active">Buttons</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <!-- End Page Title --> */}

                    <section className="section">
                        <div className="row">
                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Default Buttons</h5>

                                        <button type="button" className="btn btn-primary me-1 mb-2">Primary</button>
                                        <button type="button" className="btn btn-secondary me-1 mb-2">Secondary</button>
                                        <button type="button" className="btn btn-success me-1 mb-2">Success</button>
                                        <button type="button" className="btn btn-danger me-1 mb-2">Danger</button>
                                        <button type="button" className="btn btn-warning me-1 mb-2">Warning</button>
                                        <button type="button" className="btn btn-info me-1 mb-2">Info</button>
                                        <button type="button" className="btn btn-light me-1 mb-2">Light</button>
                                        <button type="button" className="btn btn-dark me-1 mb-2">Dark</button>
                                        <button type="button" className="btn btn-link me-1 mb-2">Link</button>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Rounded Buttons</h5>

                                        <button type="button" className="btn btn-primary rounded-pill me-1 mb-2">Primary</button>
                                        <button type="button" className="btn btn-secondary rounded-pill me-1 mb-2">Secondary</button>
                                        <button type="button" className="btn btn-success rounded-pill me-1 mb-2">Success</button>
                                        <button type="button" className="btn btn-danger rounded-pill me-1 mb-2">Danger</button>
                                        <button type="button" className="btn btn-warning rounded-pill me-1 mb-2">Warning</button>
                                        <button type="button" className="btn btn-info rounded-pill me-1 mb-2">Info</button>
                                        <button type="button" className="btn btn-light rounded-pill me-1 mb-2">Light</button>
                                        <button type="button" className="btn btn-dark rounded-pill me-1 mb-2">Dark</button>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Icon Buttons</h5>

                                        <button type="button" className="btn btn-primary me-1 mb-2"><i className="bi bi-star me-1"></i> With Text</button>
                                        <button type="button" className="btn btn-secondary me-1 mb-2"><i className="bi bi-collection"></i></button>
                                        <button type="button" className="btn btn-success me-1 mb-2"><i className="bi bi-check-circle"></i></button>
                                        <button type="button" className="btn btn-danger me-1 mb-2"><i className="bi bi-exclamation-octagon"></i></button>
                                        <button type="button" className="btn btn-warning me-1 mb-2"><i className="bi bi-exclamation-triangle"></i></button>
                                        <button type="button" className="btn btn-info me-1 mb-2"><i className="bi bi-info-circle"></i></button>
                                        <button type="button" className="btn btn-dark me-1 mb-2"><i className="bi bi-folder"></i></button>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Button Groups</h5>

                                        <div className="btn-group me-1 mb-2" role="group" aria-label="Basic example">
                                            <button type="button" className="btn btn-primary">Left</button>
                                            <button type="button" className="btn btn-primary">Middle</button>
                                            <button type="button" className="btn btn-primary">Right</button>
                                        </div>

                                        <div className="btn-group me-1 mb-2" role="group" aria-label="Basic mixed styles example">
                                            <button type="button" className="btn btn-danger">Left</button>
                                            <button type="button" className="btn btn-warning">Middle</button>
                                            <button type="button" className="btn btn-success">Right</button>
                                        </div>

                                        <div className="btn-group me-1 mb-2" role="group" aria-label="Basic outlined example">
                                            <button type="button" className="btn btn-outline-primary">Left</button>
                                            <button type="button" className="btn btn-outline-primary">Middle</button>
                                            <button type="button" className="btn btn-outline-primary">Right</button>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Outline Buttons</h5>

                                        <button type="button" className="btn btn-outline-primary me-1 mb-2">Primary</button>
                                        <button type="button" className="btn btn-outline-secondary me-1 mb-2">Secondary</button>
                                        <button type="button" className="btn btn-outline-success me-1 mb-2">Success</button>
                                        <button type="button" className="btn btn-outline-danger me-1 mb-2">Danger</button>
                                        <button type="button" className="btn btn-outline-warning me-1 mb-2">Warning</button>
                                        <button type="button" className="btn btn-outline-info me-1 mb-2">Info</button>
                                        <button type="button" className="btn btn-outline-light me-1 mb-2">Light</button>
                                        <button type="button" className="btn btn-outline-dark me-1 mb-2">Dark</button>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Button Sizes</h5>

                                        <button type="button" className="btn btn-primary btn-sm me-1 mb-2">Small</button>
                                        <button type="button" className="btn btn-secondary me-1 mb-2">Normal</button>
                                        <button type="button" className="btn btn-success btn-lg me-1 mb-2">Large</button>

                                        <button type="button" className="btn btn-outline-danger btn-sm me-1 mb-2">Small</button>
                                        <button type="button" className="btn btn-outline-warning me-1 mb-2">Normal</button>
                                        <button type="button" className="btn btn-outline-info btn-lg me-1 mb-2">Large</button>

                                        <div className="d-grid gap-2 mt-3">
                                            <button className="btn btn-primary" type="button">Block Button</button>
                                        </div>

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Button States</h5>

                                        <button type="button" className="btn btn-primary me-1 mb-2">Normal</button>
                                        <button type="button" className="btn btn-primary me-1 mb-2" disabled>Disabled</button>
                                        <button type="button" className="btn btn-outline-primary me-1 mb-2">Normal</button>
                                        <button type="button" className="btn btn-outline-primary me-1 mb-2" disabled>Disabled</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                </main>
            </Layout>
        </>
    );
}

export default Buttons;
