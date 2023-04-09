import React from 'react';
import Layout from '../../layouts/Layout';
import HeadPage from '../../layouts/part/Head';
const FormValidation = () => {
    return (
        <>
        <HeadPage title="Form Validation"/>
        <Layout>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Form Validation</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item">Forms</li>
                            <li className="breadcrumb-item active">Validation</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <section className="section">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Browser Default</h5>
                                    <p>Browser default validation with using the <code>required</code> keyword. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.</p>
                                    {/* Browser Default Validation */}
                                    <form className="row g-3">
                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault01" className="form-label">First name</label>
                                            <input type="text" className="form-control" id="validationDefault01" defaultValue="John" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="validationDefault02" className="form-label">Last name</label>
                                            <input type="text" className="form-control" id="validationDefault02" defaultValue="Doe" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                                <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required defaultValue="John"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="validationDefault03" className="form-label">City</label>
                                            <input type="text" className="form-control" id="validationDefault03" required defaultValue="John"/>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="validationDefault04" className="form-label">State</label>
                                            <select className="form-select" id="validationDefault04" required defaultValue="">
                                                <option value>Choose...</option>
                                                <option value="">...</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="validationDefault05" className="form-label">Zip</label>
                                            <input type="text" className="form-control" id="validationDefault05" required defaultValue=""/>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck2" required />
                                                <label className="form-check-label" htmlFor="invalidCheck2">
                                                    Agree to terms and conditions
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary" type="submit">Submit form</button>
                                        </div>
                                    </form>
                                    {/* End Browser Default Validation */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Custom Styled Validation</h5>
                                    <p>For custom Bootstrap form validation messages, you’ll need to add the <code>novalidate</code> boolean attribute to your <code>&lt;form&gt;</code>. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. </p>
                                    {/* Custom Styled Validation */}
                                    <form className="row g-3 needs-validation" noValidate>
                                        <div className="col-md-4">
                                            <label htmlFor="validationCustom01" className="form-label">First name</label>
                                            <input type="text" className="form-control" id="validationCustom01" defaultValue="" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="validationCustom02" className="form-label">Last name</label>
                                            <input type="text" className="form-control" id="validationCustom02" defaultValue="" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required defaultValue=""/>
                                                <div className="invalid-feedback">
                                                    Please choose a username.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="validationCustom03" className="form-label">City</label>
                                            <input type="text" className="form-control" id="validationCustom03" required defaultValue=""/>
                                            <div className="invalid-feedback">
                                                Please provide a valid city.
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="validationCustom04" className="form-label">State</label>
                                            <select className="form-select" id="validationCustom04" required defaultValue="">
                                                <option disabled value="value">Choose...</option>
                                                <option value="">...</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid state.
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="validationCustom05" className="form-label">Zip</label>
                                            <input type="text" className="form-control" id="validationCustom05" required defaultValue=""/>
                                            <div className="invalid-feedback">
                                                Please provide a valid zip.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck" required />
                                                <label className="form-check-label" htmlFor="invalidCheck">
                                                    Agree to terms and conditions
                                                </label>
                                                <div className="invalid-feedback">
                                                    You must agree before submitting.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary" type="submit">Submit form</button>
                                        </div>
                                    </form>{/* End Custom Styled Validation */}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Custom Styled Validation with Tooltips</h5>
                                    <p>If your form layout allows it, you can swap the <code>.{'{'}valid|invalid{'}'}-feedback</code> classes for .<code>{'{'}valid|invalid{'}'}-tooltip</code> classes to display validation feedback in a styled tooltip. Be sure to have a parent with <code>position: relative</code> on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup. </p>
                                    {/* Custom Styled Validation with Tooltips */}
                                    <form className="row g-3 needs-validation" noValidate>
                                        <div className="col-md-4 position-relative">
                                            <label htmlFor="validationTooltip01" className="form-label">First name</label>
                                            <input type="text" className="form-control" id="validationTooltip01" defaultValue="" required />
                                            <div className="valid-tooltip">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4 position-relative">
                                            <label htmlFor="validationTooltip02" className="form-label">Last name</label>
                                            <input type="text" className="form-control" id="validationTooltip02" defaultValue="" required />
                                            <div className="valid-tooltip">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4 position-relative">
                                            <label htmlFor="validationTooltipUsername" className="form-label">Username</label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                                <input type="text" className="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required defaultValue="" />
                                                <div className="invalid-tooltip">
                                                    Please choose a unique and valid username.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 position-relative">
                                            <label htmlFor="validationTooltip03" className="form-label">City</label>
                                            <input type="text" className="form-control" id="validationTooltip03" required defaultValue=""/>
                                            <div className="invalid-tooltip">
                                                Please provide a valid city.
                                            </div>
                                        </div>
                                        <div className="col-md-3 position-relative">
                                            <label htmlFor="validationTooltip04" className="form-label">State</label>
                                            <select className="form-select" id="validationTooltip04" required defaultValue="">
                                                <option disabled value="vaue">Choose...</option>
                                                <option value="">...</option>
                                            </select>
                                            <div className="invalid-tooltip">
                                                Please select a valid state.
                                            </div>
                                        </div>
                                        <div className="col-md-3 position-relative">
                                            <label htmlFor="validationTooltip05" className="form-label">Zip</label>
                                            <input type="text" className="form-control" id="validationTooltip05" required defaultValue=""/>
                                            <div className="invalid-tooltip">
                                                Please provide a valid zip.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary" type="submit">Submit form</button>
                                        </div>
                                    </form>{/* End Custom Styled Validation with Tooltips */}
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

export default FormValidation;
