import React from 'react';
import Layout from '../../layouts/Layout';
import QuillEditorSnow from '../../components/forms/QuillEditorSnow';
import QuillEditorBubble from '../../components/forms/QuillEditorBubble';
import QuillEditorFull from '../../components/forms/QuillEditorFull';
import TinyMCEEditor from '../../components/forms/TinyMCEEditor';
import HeadPage from '../../layouts/part/Head';
const FormEditors = () => {
    return (
        <>
            <HeadPage title="Form Editor" />
            <Layout>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1>Form Editors</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Forms</li>
                                <li className="breadcrumb-item active">Editors</li>
                            </ol>
                        </nav>
                    </div>{/* End Page Title */}
                    <section className="section">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Quill Editor Default</h5>
                                        {/* Quill Editor Default */}
                                        <QuillEditorSnow />
                                        {/* End Quill Editor Default */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Quill Editor Bubble</h5>
                                        {/* Quill Editor Bubble */}
                                        <QuillEditorBubble />
                                        {/* End Quill Editor Bubble */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Quill Editor Full</h5>
                                        {/* Quill Editor Full */}
                                        <QuillEditorFull />
                                        {/* End Quill Editor Full */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">TinyMCE Editor</h5>
                                        {/* TinyMCE Editor */}
                                        <TinyMCEEditor />
                                        {/* End TinyMCE Editor */}
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

export default FormEditors;
