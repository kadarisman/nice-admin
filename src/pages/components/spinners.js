import React from 'react';
import Layout from '../../layouts/Layout';
import HeadPage from '../../layouts/part/Head';
const Spinners = () => {
    return (
        <>
            <HeadPage title="Spinner" />
            <Layout>
                <main id="main" className="main">

                    <div className="pagetitle">
                        <h1>Spinners</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Components</li>
                                <li className="breadcrumb-item active">Spinners</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <!-- End Page Title --> */}

                    <section className="section">
                        <div className="row">
                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Border spinner</h5>
                                        <p>Use the border spinners for a lightweight loading indicator.</p>

                                        {/* <!-- Border spinner --> */}
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        {/* <!-- End Border spinner --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Colors</h5>

                                        {/* <!-- Color spinners --> */}
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className="spinner-border text-secondary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className="spinner-border text-success" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className="spinner-border text-danger" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className="spinner-border text-warning" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className="spinner-border text-info" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className="spinner-border text-light" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className="spinner-border text-dark" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        {/* <!-- End Color spinners --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Alignment</h5>
                                        <p>Use flexbox utilities, float utilities, or text alignment utilities to place spinners exactly where you need them in any situation.</p>

                                        {/* <!-- Center aligned spinner --> */}
                                        <div className="d-flex justify-content-center">
                                            <div className="spinner-border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                        {/* <!-- End Center aligned spinner --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Buttons</h5>
                                        <p>Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.</p>

                                        {/* <!-- Button spinners --> */}
                                        <button className="btn btn-primary me-1" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            <span className="visually-hidden">Loading...</span>
                                        </button>
                                        <button className="btn btn-primary me-1" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            Loading...
                                        </button>

                                        <button className="btn btn-primary me-1" type="button" disabled>
                                            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                            <span className="visually-hidden">Loading...</span>
                                        </button>
                                        <button className="btn btn-primary me-1" type="button" disabled>
                                            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                            Loading...
                                        </button>
                                        {/* <!-- End Button spinners --> */}

                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Growing spinner</h5>
                                        <p>If you dont fancy a border spinner, switch to the grow spinner. While it doesnt technically spin, it does repeatedly grow!</p>

                                        {/* <!-- Growing spinner --> */}
                                        <div className="spinner-grow" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        {/* <!-- End Growing spinner --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Growing Color spinners</h5>

                                        {/* <!-- Growing Color spinnersr --> */}
                                        <div className="spinner-grow text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className="spinner-grow text-secondary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className="spinner-grow text-success" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className="spinner-grow text-danger" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className="spinner-grow text-warning" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className="spinner-grow text-info" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className="spinner-grow text-light" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className="spinner-grow text-dark" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        {/* <!-- End Growing Color spinners --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Sizes</h5>
                                        <p>Add <code>.spinner-border-sm</code> and <code>.spinner-grow-sm</code> to make a smaller spinner that can quickly be used within other components. Or, use custom CSS or inline styles to change the dimensions as needed.</p>

                                        {/* <!-- Sized spinners --> */}
                                        <div className="spinner-border spinner-border-sm" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>

                                        <div className="spinner-border" style={{ width: "30px", height: "30px" }} role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>

                                        <div className="spinner-border" style={{ width: "40px", height: "40px" }} role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>

                                        <div className="spinner-border" style={{ width: "50px", height: "50px" }} role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>

                                        <div className="spinner-grow spinner-grow-sm" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>

                                        <div className="spinner-grow" style={{ width: "30px", height: "30px" }} role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>

                                        <div className="spinner-grow" style={{ width: "40px", height: "40px" }} role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>

                                        <div className="spinner-grow" style={{ width: "50px", height: "50px" }} role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        {/* <!-- End Sized spinners --> */}

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

export default Spinners;
