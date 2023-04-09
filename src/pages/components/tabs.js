import React from 'react';
import Layout from '../../layouts/Layout';
import HeadPage from '../../layouts/part/Head';
const Tabs = () => {
    return (
        <>
            <HeadPage title="Tabs" />
            <Layout>
                <main id="main" className="main">

                    <div className="pagetitle">
                        <h1>Tabs</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Components</li>
                                <li className="breadcrumb-item active">Tabs</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <!-- End Page Title --> */}

                    <section className="section">
                        <div className="row">
                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Default Tabs</h5>

                                        {/* <!-- Default Tabs --> */}
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content pt-2" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.
                                            </div>
                                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
                                            </div>
                                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                                Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
                                            </div>
                                        </div>
                                        {/* <!-- End Default Tabs --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Bordered Tabs</h5>

                                        {/* <!-- Bordered Tabs --> */}
                                        <ul className="nav nav-tabs nav-tabs-bordered" id="borderedTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#bordered-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content pt-2" id="borderedTabContent">
                                            <div className="tab-pane fade show active" id="bordered-home" role="tabpanel" aria-labelledby="home-tab">
                                                Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.
                                            </div>
                                            <div className="tab-pane fade" id="bordered-profile" role="tabpanel" aria-labelledby="profile-tab">
                                                Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
                                            </div>
                                            <div className="tab-pane fade" id="bordered-contact" role="tabpanel" aria-labelledby="contact-tab">
                                                Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
                                            </div>
                                        </div>
                                        {/* <!-- End Bordered Tabs --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Pills Tabs</h5>

                                        {/* <!-- Pills Tabs --> */}
                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content pt-2" id="myTabContent">
                                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="home-tab">
                                                Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.
                                            </div>
                                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="profile-tab">
                                                Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
                                            </div>
                                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="contact-tab">
                                                Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
                                            </div>
                                        </div>
                                        {/* <!-- End Pills Tabs --> */}

                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Default Tabs Justified</h5>

                                        {/* <!-- Default Tabs --> */}
                                        <ul className="nav nav-tabs d-flex" id="myTabjustified" role="tablist">
                                            <li className="nav-item flex-fill" role="presentation">
                                                <button className="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-justified" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                                            </li>
                                            <li className="nav-item flex-fill" role="presentation">
                                                <button className="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-justified" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                                            </li>
                                            <li className="nav-item flex-fill" role="presentation">
                                                <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-justified" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content pt-2" id="myTabjustifiedContent">
                                            <div className="tab-pane fade show active" id="home-justified" role="tabpanel" aria-labelledby="home-tab">
                                                Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.
                                            </div>
                                            <div className="tab-pane fade" id="profile-justified" role="tabpanel" aria-labelledby="profile-tab">
                                                Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
                                            </div>
                                            <div className="tab-pane fade" id="contact-justified" role="tabpanel" aria-labelledby="contact-tab">
                                                Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
                                            </div>
                                        </div>
                                        {/* <!-- End Default Tabs --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Bordered Tabs Justified</h5>

                                        {/* <!-- Bordered Tabs Justified --> */}
                                        <ul className="nav nav-tabs nav-tabs-bordered d-flex" id="borderedTabJustified" role="tablist">
                                            <li className="nav-item flex-fill" role="presentation">
                                                <button className="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                                            </li>
                                            <li className="nav-item flex-fill" role="presentation">
                                                <button className="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                                            </li>
                                            <li className="nav-item flex-fill" role="presentation">
                                                <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content pt-2" id="borderedTabJustifiedContent">
                                            <div className="tab-pane fade show active" id="bordered-justified-home" role="tabpanel" aria-labelledby="home-tab">
                                                Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.
                                            </div>
                                            <div className="tab-pane fade" id="bordered-justified-profile" role="tabpanel" aria-labelledby="profile-tab">
                                                Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
                                            </div>
                                            <div className="tab-pane fade" id="bordered-justified-contact" role="tabpanel" aria-labelledby="contact-tab">
                                                Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
                                            </div>
                                        </div>
                                        {/* <!-- End Bordered Tabs Justified --> */}

                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Vertical Pills Tabs</h5>

                                        {/* <!-- Vertical Pills Tabs --> */}
                                        <div className="d-flex align-items-start">
                                            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
                                                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                                                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                                            </div>
                                            <div className="tab-content" id="v-pills-tabContent">
                                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                    Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                                    Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                                    Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Vertical Pills Tabs --> */}

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

export default Tabs;
