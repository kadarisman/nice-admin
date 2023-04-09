import React from 'react';
import Layout from '../../layouts/Layout';
import HeadPage from '../../layouts/part/Head';
import styles from '../../../styles/tooltip.module.css'

const Tooltips = () => {
    return (
        <>
            <HeadPage title="Tooltip" />
            <Layout>
                <main id="main" className="main">

                    <div className="pagetitle">
                        <h1>Tooltips</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Components</li>
                                <li className="breadcrumb-item active">Tooltips</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <!-- End Page Title --> */}

                    <section className="section">
                        <div className="row">
                            <div className="col-lg-12">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Tooltips Examples</h5>
                                        <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. Using<a href="https://mui.com/material-ui/getting-started/installation/" target="_blank"> material-ui</a></p>

                                        {/* <!-- Tooltips Examples --> */}
                                        
                                        <button className={`btn btn-secondary me-1 ${styles.tooltip}`}>Tooltip on top
                                            <span className={styles.tooltipTop}>Tooltip on top</span>
                                        </button>

                                        <button className={`btn btn-secondary me-1 ${styles.tooltip}`}>Tooltip on right
                                            <span className={styles.tooltipRight}>Tooltip on right</span>
                                        </button>

                                        <button className={`btn btn-secondary me-1 ${styles.tooltip}`}>Tooltip on bottom
                                            <span className={styles.tooltipBottom}>Tooltip on bottom</span>
                                        </button>

                                        <button className={`btn btn-secondary me-1 ${styles.tooltip}`}>Tooltip on left
                                            <span className={styles.tooltipLeft}>Tooltip on left</span>
                                        </button>

                                        {/* <!-- End Tooltips Examples --> */}

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

export default Tooltips;
