import React from 'react';
import Layout from '../../layouts/Layout';
import HeadPage from '../../layouts/part/Head';

const Alerts = () => {
    return (
        <>
            <HeadPage title="Alert" />
            <Layout>
                <main id="main" className="main">

                    <div className="pagetitle">
                        <h1>Alerts</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Components</li>
                                <li className="breadcrumb-item active">Alerts</li>
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

                                        <div className="alert alert-primary alert-dismissible fade show" role="alert">
                                            A simple primary alert—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                                            A simple secondary alert—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                                            A simple success alert—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                            A simple danger alert—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                            A simple warning alert—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-info alert-dismissible fade show" role="alert">
                                            A simple info alert—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-light border-light alert-dismissible fade show" role="alert">
                                            A simple light alert—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-dark alert-dismissible fade show" role="alert">
                                            A simple dark alert—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">With Icon</h5>

                                        <div className="alert alert-primary alert-dismissible fade show" role="alert">
                                            <i className="bi bi-star me-1"></i>
                                            A simple primary alert with icon—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                                            <i className="bi bi-collection me-1"></i>
                                            A simple secondary alert with icon—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                                            <i className="bi bi-check-circle me-1"></i>
                                            A simple success alert with icon—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                            <i className="bi bi-exclamation-octagon me-1"></i>
                                            A simple danger alert with icon—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                            <i className="bi bi-exclamation-triangle me-1"></i>
                                            A simple warning alert with icon—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-info alert-dismissible fade show" role="alert">
                                            <i className="bi bi-info-circle me-1"></i>
                                            A simple info alert with icon—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-dark alert-dismissible fade show" role="alert">
                                            <i className="bi bi-folder me-1"></i>
                                            A simple dark alert with icon—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Outlined</h5>

                                        <div className="alert border-primary alert-dismissible fade show" role="alert">
                                            A simple primary outlined alert—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert border-secondary alert-dismissible fade show" role="alert">
                                            A simple secondary outlined alert—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert border-success alert-dismissible fade show" role="alert">
                                            A simple success outlined alert—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert border-danger alert-dismissible fade show" role="alert">
                                            A simple danger outlined alert—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert border-warning alert-dismissible fade show" role="alert">
                                            A simple warning outlined alert—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert border-info alert-dismissible fade show" role="alert">
                                            A simple info outlined alert—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert border-light alert-dismissible fade show" role="alert">
                                            A simple light outlined alert—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert border-dark alert-dismissible fade show" role="alert">
                                            A simple dark outlined alert—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Default Solid Color</h5>

                                        <div className="alert alert-primary bg-primary text-light border-0 alert-dismissible fade show" role="alert">
                                            A simple primary alert with solid color—check it out!
                                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-secondary bg-secondary text-light border-0 alert-dismissible fade show" role="alert">
                                            A simple secondary alert with solid color—check it out!
                                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-success bg-success text-light border-0 alert-dismissible fade show" role="alert">
                                            A simple success alert with solid color—check it out!
                                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
                                            A simple danger alert with solid color—check it out!
                                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-warning bg-warning border-0 alert-dismissible fade show" role="alert">
                                            A simple warning alert with solid color—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-info bg-info border-0 alert-dismissible fade show" role="alert">
                                            A simple info alert with solid color—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-light bg-light border-0 alert-dismissible fade show" role="alert">
                                            A simple light alert with solid color—check it out!
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-dark bg-dark text-light border-0 alert-dismissible fade show" role="alert">
                                            A simple dark alert with solid color—check it out!
                                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">With Heading &amp Separator</h5>

                                        <div className="alert alert-primary alert-dismissible fade show" role="alert">
                                            <h4 className="alert-heading">Primary Heading</h4>
                                            <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                                            <hr />
                                            <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                                            <h4 className="alert-heading">Secondary Heading</h4>
                                            <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                                            <hr />
                                            <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                                            <h4 className="alert-heading">Success Heading</h4>
                                            <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                                            <hr />
                                            <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                            <h4 className="alert-heading">Danger Heading</h4>
                                            <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                                            <hr />
                                            <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-warning  alert-dismissible fade show" role="alert">
                                            <h4 className="alert-heading">Warning Heading</h4>
                                            <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                                            <hr />
                                            <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-info  alert-dismissible fade show" role="alert">
                                            <h4 className="alert-heading">Info Heading</h4>
                                            <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                                            <hr />
                                            <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-light border-light alert-dismissible fade show" role="alert">
                                            <h4 className="alert-heading">Lignt Heading</h4>
                                            <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                                            <hr />
                                            <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

                                        <div className="alert alert-dark  alert-dismissible fade show" role="alert">
                                            <h4 className="alert-heading">Dark Heading</h4>
                                            <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                                            <hr />
                                            <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>

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

export default Alerts;
