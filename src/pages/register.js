import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeadPage from '../layouts/part/Head';

const Register = () => {
    return (
        <>
        <HeadPage title="Register"/>
        <main>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                <Image src="/img/logo.png" alt="" width="24" height="26"/>
                                    <Link href="/">                                        
                                        <span className="d-none d-lg-block h3"> NiceAdmin</span>
                                    </Link>
                                </div>{/* End Logo */}
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                            <p className="text-center small">Enter your personal details to create account</p>
                                        </div>
                                        <form className="row g-3 needs-validation" noValidate>
                                            <div className="col-12">
                                                <label htmlFor="yourName" className="form-label">Your Name</label>
                                                <input type="text" name="name" className="form-control" id="yourName" required />
                                                <div className="invalid-feedback">Please, enter your name!</div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="yourEmail" className="form-label">Your Email</label>
                                                <input type="email" name="email" className="form-control" id="yourEmail" required />
                                                <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="yourUsername" className="form-label">Username</label>
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                    <input type="text" name="username" className="form-control" id="yourUsername" required />
                                                    <div className="invalid-feedback">Please choose a username.</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">Password</label>
                                                <input type="password" name="password" className="form-control" id="yourPassword" required />
                                                <div className="invalid-feedback">Please enter your password!</div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" name="terms" type="checkbox" defaultValue id="acceptTerms" required />
                                                    <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                                                    <div className="invalid-feedback">You must agree before submitting.</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit">Create Account</button>
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">Already have an account? <a href="pages-login.html">Log in</a></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="credits">
                                    {/* All the links in the footer should remain intact. */}
                                    {/* You can delete the links only if you purchased the pro version. */}
                                    {/* Licensing information: https://bootstrapmade.com/license/ */}
                                    {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
                                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        </>
    );
}

export default Register;
