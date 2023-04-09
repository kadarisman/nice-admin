import React from 'react';
import Layout from '../../layouts/Layout';
import Image from 'next/image';
import HeadPage from '../../layouts/part/Head';
const Cards = () => {
    return (
        <>
            <HeadPage title="Card" />
            <Layout>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1>Cards</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Components</li>
                                <li className="breadcrumb-item active">Cards</li>
                            </ol>
                        </nav>
                    </div>{/* End Page Title */}
                    <section className="section">
                        <div className="row align-items-top">
                            <div className="col-lg-6">
                                {/* Default Card */}
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Default Card</h5>
                                        Ut in ea error laudantium quas omnis officia. Sit sed praesentium voluptas. Corrupti inventore consequatur nisi necessitatibus modi consequuntur soluta id. Enim autem est esse natus assumenda. Non sunt dignissimos officiis expedita. Consequatur sint repellendus voluptas.
                                        Quidem sit est nulla ullam. Suscipit debitis ullam iusto dolorem animi dolorem numquam. Enim fuga ipsum dolor nulla quia ut.
                                        Rerum dolor voluptatem et deleniti libero totam numquam nobis distinctio. Sit sint aut. Consequatur rerum in.
                                    </div>
                                </div>{/* End Default Card */}
                                {/* Card with header and footer */}
                                <div className="card">
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card with header and footer</h5>
                                        Ut in ea error laudantium quas omnis officia. Sit sed praesentium voluptas. Corrupti inventore consequatur nisi necessitatibus modi consequuntur soluta id. Enim autem est esse natus assumenda. Non sunt dignissimos officiis expedita. Consequatur sint repellendus voluptas.
                                        Quidem sit est nulla ullam. Suscipit debitis ullam iusto dolorem animi dolorem numquam. Enim fuga ipsum dolor nulla quia ut.
                                        Rerum dolor voluptatem et deleniti libero totam numquam nobis distinctio. Sit sint aut. Consequatur rerum in.
                                    </div>
                                    <div className="card-footer">
                                        Footer
                                    </div>
                                </div>{/* End Card with header and footer */}
                                {/* Card with an image on left */}
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <Image src="/img/card.jpg" className="img-fluid rounded-start" alt="..." width="160" height="120" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Card with an image on left</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End Card with an image on left */}
                            </div>
                            <div className="col-lg-3">
                                {/* Card with an image on top */}
                                <div className="card">
                                    <Image src="/img/card.jpg" className="card-img-top" alt="..." width="229" height="171" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card with an image on top</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>{/* End Card with an image on top */}
                                {/* Card with an image on bottom */}
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card with an image on bottom</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <Image src="/img/card.jpg" className="card-img-bottom" alt="..." width="229" height="171" />
                                </div>{/* End Card with an image on bottom */}
                            </div>
                            <div className="col-lg-3">
                                {/* Card with an image overlay */}
                                <div className="card">
                                    <Image src="/img/card.jpg" className="card-img-top" alt="..." width="229" height="171" />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Card with an image overlay</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>{/* End Card with an image overlay */}
                                {/* Card with titles, buttons, and links */}
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card with titles, buttons, and links</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p className="card-text"><a href="#" className="btn btn-primary">Button</a></p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>{/* End Card with titles, buttons, and links */}
                                {/* Special title treatmen */}
                                <div className="card text-center">
                                    <div className="card-header">
                                        <ul className="nav nav-pills card-header-pills">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#">Active</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>{/* End Special title treatmen */}
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    );
}

export default Cards;
