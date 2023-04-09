import React from 'react';
import Layout from '../../layouts/Layout';
import HeadPage from '../../layouts/part/Head';
const Modals = () => {
    return (
        <>
            <HeadPage title="Modal" />
            <Layout>
                <main id="main" className="main">

                    <div className="pagetitle">
                        <h1>Modal</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Components</li>
                                <li className="breadcrumb-item active">Modal</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <!-- End Page Title --> */}

                    <section className="section">
                        <div className="row">
                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Basic Modal</h5>
                                        <p>Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page</p>

                                        {/* <!-- Basic Modal --> */}
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">
                                            Basic Modal
                                        </button>
                                        <div className="modal fade" id="basicModal" tabindex="-1">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Basic Modal</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Basic Modal--> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Disabled Backdrop</h5>
                                        <p>You can disable the backdrop by adding <code>data-bs-backdrop="false"</code> to <code>.modal-dialog</code></p>

                                        {/* <!-- Disabled Backdrop Modal --> */}
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#disablebackdrop">
                                            Launch Modal
                                        </button>
                                        <div className="modal fade" id="disablebackdrop" tabindex="-1" data-bs-backdrop="false">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Disabled Backdrop</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Disabled Backdrop Modal--> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Scrolling long content</h5>
                                        <p>When modals become too long for the user’s viewport or device, they scroll independent of the page itself. You can also create a scrollable modal that allows scroll the modal body by adding <code>.modal-dialog-scrollable</code> to <code>.modal-dialog</code></p>

                                        {/* <!-- Scrolling Modal --> */}
                                        <button type="button" className="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#scrollingModal">
                                            Scrolling Modal
                                        </button>
                                        <div className="modal fade" id="scrollingModal" tabindex="-1">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Scrolling Modal</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body" style={{ minHeight: "1500px" }}>
                                                        Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Scrolling Modal--> */}

                                        {/* <!-- Modal Dialog Scrollable --> */}
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalDialogScrollable">
                                            Modal Dialog Scrollable
                                        </button>
                                        <div className="modal fade" id="modalDialogScrollable" tabindex="-1">
                                            <div className="modal-dialog modal-dialog-scrollable">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Modal Dialog Scrollable</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.
                                                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                                        This content should appear at the bottom after you scroll.
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Modal Dialog Scrollable--> */}

                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Vertically Centered</h5>
                                        <p>Add <code>.modal-dialog-centered</code> to <code>.modal-dialog</code> to vertically center the modal.</p>

                                        {/* <!-- Vertically centered Modal --> */}
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#verticalycentered">
                                            Vertically centered
                                        </button>
                                        <div className="modal fade" id="verticalycentered" tabindex="-1">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Vertically Centered</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Vertically centered Modal--> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Modal Sizes</h5>
                                        <p>Modals have three optional sizes, available via modifier classNamees to be placed on a <code>.modal-dialog</code>. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports..</p>

                                        {/* <!-- Small Modal --> */}
                                        <button type="button" className="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#smallModal">
                                            Small Modal
                                        </button>

                                        <div className="modal fade" id="smallModal" tabindex="-1">
                                            <div className="modal-dialog modal-sm">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Small Modal</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Small Modal--> */}

                                        {/* <!-- Large Modal --> */}
                                        <button type="button" className="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#largeModal">
                                            Large Modal
                                        </button>

                                        <div className="modal fade" id="largeModal" tabindex="-1">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Large Modal</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Large Modal--> */}

                                        {/* <!-- Extra Large Modal --> */}
                                        <button type="button" className="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#ExtralargeModal">
                                            Extra Large Modal
                                        </button>

                                        <div className="modal fade" id="ExtralargeModal" tabindex="-1">
                                            <div className="modal-dialog modal-xl">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Extra Large Modal</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Extra Large Modal--> */}

                                        {/* <!-- Full Screen Modal --> */}
                                        <button type="button" className="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#fullscreenModal">
                                            Full Screen Modal
                                        </button>

                                        <div className="modal fade" id="fullscreenModal" tabindex="-1">
                                            <div className="modal-dialog modal-fullscreen">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Full Screen Modal</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Full Screen Modal--> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Disabled Animation</h5>
                                        <p>For modals that simply appear rather than fade in to view, remove the <code>.fade</code> className from your <code>.modal</code> element </p>

                                        {/* <!-- Disabled Animation Modal --> */}
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#disabledAnimation">
                                            Disabled Animation Modal
                                        </button>
                                        <div className="modal" id="disabledAnimation" tabindex="-1">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Disabled Animation Modal</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Disabled Animation Modal--> */}

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

export default Modals;
