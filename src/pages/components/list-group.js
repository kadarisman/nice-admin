import React from 'react';
import Layout from '../../layouts/Layout';
import HeadPage from '../../layouts/part/Head';

const ListGroup = () => {
    return (
        <>
            <HeadPage title="List Group" />
            <Layout>
                <main id="main" className="main">

                    <div className="pagetitle">
                        <h1>List Group</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Components</li>
                                <li className="breadcrumb-item active">List Group</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <!-- End Page Title --> */}

                    <section className="section">
                        <div className="row">
                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Default List Group</h5>

                                        {/* <!-- Default List group --> */}
                                        <ul className="list-group">
                                            <li className="list-group-item">An item</li>
                                            <li className="list-group-item">A second item</li>
                                            <li className="list-group-item">A third item</li>
                                            <li className="list-group-item">A fourth item</li>
                                            <li className="list-group-item">And a fifth one</li>
                                        </ul>
                                        {/* <!-- End Default List group --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Links and buttons</h5>

                                        {/* <!-- List group with Links and buttons --> */}
                                        <div className="list-group">
                                            <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                                                The current button
                                            </button>
                                            <button type="button" className="list-group-item list-group-item-action">A second item</button>
                                            <button type="button" className="list-group-item list-group-item-action">A third button item</button>
                                            <button type="button" className="list-group-item list-group-item-action">A fourth button item</button>
                                            <button type="button" className="list-group-item list-group-item-action" disabled>A disabled button item</button>
                                        </div>
                                        {/* <!-- End List group with Links and buttons --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">With Icons</h5>

                                        {/* <!-- List group With Icons --> */}
                                        <ul className="list-group">
                                            <li className="list-group-item"><i className="bi bi-star me-1 text-success"></i> An item</li>
                                            <li className="list-group-item"><i className="bi bi-collection me-1 text-primary"></i> A second item</li>
                                            <li className="list-group-item"><i className="bi bi-check-circle me-1 text-danger"></i> A third item</li>
                                            <li className="list-group-item"><i className="bi bi-exclamation-octagon me-1 text-warning"></i> A fourth item</li>
                                        </ul>
                                        {/* <!-- End List group With Icons --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Numbered</h5>

                                        {/* <!-- List group Numbered --> */}
                                        <ol className="list-group list-group-numbered">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Cras justo odio</li>
                                        </ol>
                                        {/* <!-- End List group Numbered --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">With badges</h5>

                                        {/* <!-- List group With badges --> */}
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                A list item
                                                <span className="badge bg-primary rounded-pill">14</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                A second list item
                                                <span className="badge bg-primary rounded-pill">2</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                A third list item
                                                <span className="badge bg-primary rounded-pill">1</span>
                                            </li>
                                        </ul>
                                        {/* <!-- End List With badges --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">With Contextual classNamees</h5>

                                        {/* <!-- List group With Contextual classNamees --> */}
                                        <ul className="list-group">
                                            <li className="list-group-item">A simple default list group item</li>

                                            <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
                                            <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
                                            <li className="list-group-item list-group-item-success">A simple success list group item</li>
                                            <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
                                            <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
                                            <li className="list-group-item list-group-item-info">A simple info list group item</li>
                                            <li className="list-group-item list-group-item-light">A simple light list group item</li>
                                            <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
                                        </ul>
                                        {/* <!-- End List Group With Contextual classNamees --> */}

                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">With active and disabled items</h5>

                                        {/* <!-- List group with active and disabled items --> */}
                                        <ul className="list-group">
                                            <li className="list-group-item active" aria-current="true">An active item</li>
                                            <li className="list-group-item">A second item</li>
                                            <li className="list-group-item">A third item</li>
                                            <li className="list-group-item">A fourth item</li>
                                            <li className="list-group-item disabled" aria-disabled="true">A disabled item</li>
                                        </ul>
                                        {/* <!-- End ist group with active and disabled items --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Clean list group</h5>
                                        <p>Add <code>.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).</p>

                                        {/* <!-- List group with active and disabled items --> */}
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">An item</li>
                                            <li className="list-group-item">A second item</li>
                                            <li className="list-group-item">A third item</li>
                                            <li className="list-group-item">A fourth item</li>
                                            <li className="list-group-item disabled" aria-disabled="true">A disabled item</li>
                                        </ul>
                                        {/* <!-- End Clean list group --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">With custom content</h5>

                                        {/* <!-- List group with custom content --> */}
                                        <ol className="list-group list-group-numbered">
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">Subheading</div>
                                                    Cras justo odio
                                                </div>
                                                <span className="badge bg-primary rounded-pill">14</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">Subheading</div>
                                                    Cras justo odio
                                                </div>
                                                <span className="badge bg-primary rounded-pill">14</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">Subheading</div>
                                                    Cras justo odio
                                                </div>
                                                <span className="badge bg-primary rounded-pill">14</span>
                                            </li>
                                        </ol>
                                        {/* <!-- End with custom content --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Advanced Content</h5>

                                        {/* <!-- List group with Advanced Contents --> */}
                                        <div className="list-group">
                                            <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">List group item heading</h5>
                                                    <small>3 days ago</small>
                                                </div>
                                                <p className="mb-1">Some placeholder content in a paragraph.</p>
                                                <small>And some small print.</small>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">List group item heading</h5>
                                                    <small className="text-muted">3 days ago</small>
                                                </div>
                                                <p className="mb-1">Some placeholder content in a paragraph.</p>
                                                <small className="text-muted">And some muted small print.</small>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">List group item heading</h5>
                                                    <small className="text-muted">3 days ago</small>
                                                </div>
                                                <p className="mb-1">Some placeholder content in a paragraph.</p>
                                                <small className="text-muted">And some muted small print.</small>
                                            </a>
                                        </div>
                                        {/* <!-- End List group Advanced Content --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">With Checkboxes and radios</h5>

                                        {/* <!-- List group With Checkboxes and radios --> */}
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                                First checkbox
                                            </li>
                                            <li className="list-group-item">
                                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                                Second checkbox
                                            </li>
                                            <li className="list-group-item">
                                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                                Third checkbox
                                            </li>
                                            <li className="list-group-item">
                                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                                Fourth checkbox
                                            </li>
                                            <li className="list-group-item">
                                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                                Fifth checkbox
                                            </li>
                                        </ul>
                                        {/* <!-- End List Checkboxes and radios --> */}

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

export default ListGroup;
