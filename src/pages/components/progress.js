import React from 'react';
import Layout from '../../layouts/Layout';
import HeadPage from '../../layouts/part/Head';
const Progress = () => {
    return (
        <>
            <HeadPage title="Progress" />
            <Layout>
                <main id="main" className="main">

                    <div className="pagetitle">
                        <h1>Progress</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Components</li>
                                <li className="breadcrumb-item active">Progress</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <!-- End Page Title --> */}

                    <section className="section">
                        <div className="row">
                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Default</h5>

                                        {/* <!-- Default Progress Bars--> */}
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        {/* <!-- End Default Progress Bars--> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Labels</h5>

                                        {/* <!-- Progress Bars with labels--> */}
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                                        </div>
                                        {/* <!-- End Progress Bars with labels --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Backgrounds</h5>

                                        {/* <!-- Progress Bars with Backgrounds--> */}
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        {/* <!-- End Progress Bars with Backgrounds --> */}

                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Height</h5>
                                        <p>We only set a height value on the .progress, so if you change that value the inner .progress-bar will automatically resize accordingl</p>

                                        {/* <!-- Progress Bars with heights--> */}
                                        <div className="progress" style={{ height: "10px" }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3" style={{ height: "15px" }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3" style={{ height: "20px" }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3" style={{ height: "25px" }}>
                                            <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        {/* <!-- End Progress Bars with heights --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Striped Backgrounds</h5>

                                        {/* <!-- Progress Bars with Striped Backgrounds--> */}
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        {/* <!-- End Progress Bars with Striped Backgrounds --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Striped Animated Backgrounds</h5>

                                        {/* <!-- Progress Bars with Striped Backgrounds--> */}
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress mt-3">
                                            <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        {/* <!-- End Progress Bars with Striped Animated Backgrounds --> */}

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

export default Progress;
