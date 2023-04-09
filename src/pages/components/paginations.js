import React from 'react';
import Layout from '../../layouts/Layout';
import HeadPage from '../../layouts/part/Head';
const Paginations = () => {
    return (
        <>
            <HeadPage title="Pagination" />
            <Layout>
                <main id="main" className="main">

                    <div className="pagetitle">
                        <h1>Pagination</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Components</li>
                                <li className="breadcrumb-item active">Pagination</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <!-- End Page Title --> */}

                    <section className="section">
                        <div className="row">
                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Basic Pagination</h5>

                                        {/* <!-- Basic Pagination --> */}
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                            </ul>
                                        </nav>
                                        {/* <!-- End Basic Pagination --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Disabled and active states</h5>

                                        {/* <!-- Disabled and active states --> */}
                                        <nav aria-label="...">
                                            <ul className="pagination">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item active" aria-current="page">
                                                    <a className="page-link" href="#">2</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                        {/* <!-- End Disabled and active states --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Alignment</h5>

                                        {/* <!-- Left/Start Pagination --> */}
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                        {/* <!-- End Left/Start Pagination --> */}

                                        {/* <!-- Centered Pagination --> */}
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                        {/* <!-- End Centered Pagination --> */}

                                        {/* <!-- Right/End Aligned Pagination --> */}
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-end">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                        {/* <!-- End Right/End Aligned Pagination --> */}

                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Pagination with icon</h5>

                                        {/* <!-- Pagination with icons --> */}
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                    </a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                        {/* <!-- End Pagination with icons --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Sizing</h5>

                                        {/* <!-- Small Sizing --> */}
                                        <nav aria-label="...">
                                            <ul className="pagination pagination-sm">
                                                <li className="page-item active" aria-current="page">
                                                    <span className="page-link">1</span>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            </ul>
                                        </nav>
                                        {/* <!-- End Small Sizing --> */}

                                        {/* <!-- Normal Sizing --> */}
                                        <nav aria-label="...">
                                            <ul className="pagination">
                                                <li className="page-item active" aria-current="page">
                                                    <span className="page-link">1</span>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            </ul>
                                        </nav>
                                        {/* <!-- End Normal Sizing --> */}

                                        {/* <!-- Large Sizing --> */}
                                        <nav aria-label="...">
                                            <ul className="pagination pagination-lg">
                                                <li className="page-item active" aria-current="page">
                                                    <span className="page-link">1</span>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            </ul>
                                        </nav>
                                        {/* <!-- End Large Sizing --> */}

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

export default Paginations;
