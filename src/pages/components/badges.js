import React from 'react';
import Layout from '../../layouts/Layout';
import HeadPage from '../../layouts/part/Head';

const Badges = () => {
    return (
        <>
            <HeadPage title="Badge" />
            <Layout>
                <main id="main" className="main">

                    <div className="pagetitle">
                        <h1>Badges</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Components</li>
                                <li className="breadcrumb-item active">Badges</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <!-- End Page Title --> */}

                    <section className="section">
                        <div className="row">

                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Default Badges</h5>

                                        <span className="badge me-1 bg-primary">Primary</span>
                                        <span className="badge me-1 bg-secondary">Secondary</span>
                                        <span className="badge me-1 bg-success">Success</span>
                                        <span className="badge me-1 bg-danger">Danger</span>
                                        <span className="badge me-1 bg-warning text-dark">Warning</span>
                                        <span className="badge me-1 bg-info text-dark">Info</span>
                                        <span className="badge me-1 bg-light text-dark">Light</span>
                                        <span className="badge me-1 bg-dark">Dark</span>
                                    </div>
                                </div>
                                {/* <!-- End Default Badges --> */}

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Pill Badges</h5>
                                        <span className="badge me-1 rounded-pill bg-primary">Primary</span>
                                        <span className="badge me-1 rounded-pill bg-secondary">Secondary</span>
                                        <span className="badge me-1 rounded-pill bg-success">Success</span>
                                        <span className="badge me-1 rounded-pill bg-danger">Danger</span>
                                        <span className="badge me-1 rounded-pill bg-warning text-dark">Warning</span>
                                        <span className="badge me-1 rounded-pill bg-info text-dark">Info</span>
                                        <span className="badge me-1 rounded-pill bg-light text-dark">Light</span>
                                        <span className="badge me-1 rounded-pill bg-dark">Dark</span>
                                    </div>
                                </div>
                                {/* <!-- End Pill Badges --> */}

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Icon Badges</h5>
                                        <span className="badge me-1 bg-primary"><i className="bi bi-star me-1"></i> Primary</span>
                                        <span className="badge me-1 bg-secondary"><i className="bi bi-collection me-1"></i> Secondary</span>
                                        <span className="badge me-1 bg-success"><i className="bi bi-check-circle me-1"></i> Success</span>
                                        <span className="badge me-1 bg-danger"><i className="bi bi-exclamation-octagon me-1"></i> Danger</span>
                                        <span className="badge me-1 bg-warning text-dark"><i className="bi bi-exclamation-triangle me-1"></i> Warning</span>
                                        <span className="badge me-1 bg-info text-dark"><i className="bi bi-info-circle me-1"></i> Info</span>
                                        <span className="badge me-1 bg-light text-dark"><i className="bi bi-star me-1"></i> Light</span>
                                        <span className="badge me-1 bg-dark"><i className="bi bi-folder me-1"></i> Dark</span>
                                    </div>
                                </div>
                                {/* <!-- End Icon Badges --> */}

                            </div>

                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Border Badges</h5>
                                        <span className="badge me-1 border-primary border-1 text-primary">Primary</span>
                                        <span className="badge me-1 border-secondary border-1 text-secondary">Secondary</span>
                                        <span className="badge me-1 border-success border-1 text-success">Success</span>
                                        <span className="badge me-1 border-danger border-1 text-danger">Danger</span>
                                        <span className="badge me-1 border-warning border-1 text-warning">Warning</span>
                                        <span className="badge me-1 border-info border-1 text-info">Info</span>
                                        <span className="badge me-1 border-light border-1 text-black-50">Light</span>
                                        <span className="badge me-1 border-dark border-1 text-dark">Dark</span>
                                    </div>
                                </div>
                                {/* <!-- End Border Badges --> */}

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Button Badges</h5>

                                        <button type="button" className="btn btn-primary mb-2 me-1">
                                            Primary <span className="badge bg-white text-primary">4</span>
                                        </button>
                                        <button type="button" className="btn btn-secondary mb-2 me-1">
                                            Secondary <span className="badge bg-white text-secondary">4</span>
                                        </button>
                                        <button type="button" className="btn btn-success mb-2 me-1">
                                            Success <span className="badge bg-white text-success">4</span>
                                        </button>
                                        <button type="button" className="btn btn-danger mb-2 me-1">
                                            Danger <span className="badge bg-white text-danger">4</span>
                                        </button>
                                        <button type="button" className="btn btn-warning mb-2 me-1">
                                            Warning <span className="badge bg-white text-warning">4</span>
                                        </button>
                                        <button type="button" className="btn btn-info mb-2 me-1">
                                            Info <span className="badge bg-white text-info">4</span>
                                        </button>
                                        <button type="button" className="btn btn-light mb-2 me-1">
                                            Light <span className="badge bg-secondary text-light">4</span>
                                        </button>
                                        <button type="button" className="btn btn-dark mb-2 me-1">
                                            Dark <span className="badge bg-white text-dark">4</span>
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- End Button Badges --> */}

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Heading Badges</h5>

                                        <h1>Example h1 heading <span className="badge me-1 bg-primary">Primary</span></h1>
                                        <h2>Example h2 heading <span className="badge me-1 bg-secondary">Secondary</span></h2>
                                        <h3>Example h3 heading <span className="badge me-1 bg-success">Success</span></h3>
                                        <h4>Example h4 heading <span className="badge me-1 bg-danger">Danger</span></h4>
                                        <h5>Example h5 heading <span className="badge me-1 bg-warning">Warning</span></h5>
                                        <h6>Example h6 heading <span className="badge me-1 bg-info">Info</span></h6>
                                    </div>
                                </div>
                                {/* <!-- End Heading Badges --> */}

                            </div>

                        </div>
                    </section>

                </main>
            </Layout>
        </>
    );
}

export default Badges;
