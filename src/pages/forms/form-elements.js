import React from 'react';

import Layout from '../../layouts/Layout';
const FormElements = () => {
    return (
        <Layout>
             <main id="main" className="main">
        <div className="pagetitle">
          <h1>Form Elements</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item">Forms</li>
              <li className="breadcrumb-item active">Elements</li>
            </ol>
          </nav>
        </div>{/* End Page Title */}
        <section className="section">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">General Form Elements</h5>
                  {/* General Form Elements */}
                  <form>
                    <div className="row mb-3">
                      <label htmlFor="inputText" className="col-sm-2 col-form-label">Text</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" defaultValue="default"/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                      <div className="col-sm-10">
                        <input type="email" className="form-control" defaultValue="default"/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                      <div className="col-sm-10">
                        <input type="password" className="form-control" defaultValue="default"/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Number</label>
                      <div className="col-sm-10">
                        <input type="number" className="form-control" defaultValue="default"/>
                      </div>
                    </div>
                    
                    <div className="row mb-3">
                      <label htmlFor="inputNumber" className="col-sm-2 col-form-label">File Upload</label>
                      <div className="col-sm-10">
                        <input className="form-control" type="file" id="formFile"/>
                      </div>
                    </div>
                    
                    <div className="row mb-3">
                      <label htmlFor="inputDate" className="col-sm-2 col-form-label">Date</label>
                      <div className="col-sm-10">
                        <input type="date" className="form-control" defaultValue="default" />
                      </div>
                    </div>
                    
                    <div className="row mb-3">
                      <label htmlFor="inputTime" className="col-sm-2 col-form-label">Time</label>
                      <div className="col-sm-10">
                        <input type="time" className="form-control" defaultValue="default" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="inputColor" className="col-sm-2 col-form-label">Color Picker</label>
                      <div className="col-sm-10">
                        <input type="color" className="form-control form-control-color" id="exampleColorInput" defaultValue="default" title="Choose your color" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Textarea</label>
                      <div className="col-sm-10">
                        <textarea className="form-control" style={{height: '100px'}} defaultValue={""} />
                      </div>
                    </div>
                    <fieldset className="row mb-3">
                      <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                      <div className="col-sm-10">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultChecked />
                          <label className="form-check-label" htmlFor="gridRadios1">
                            First radio
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultChecked />
                          <label className="form-check-label" htmlFor="gridRadios2">
                            Second radio
                          </label>
                        </div>
                        <div className="form-check disabled">
                          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios" disabled />
                          <label className="form-check-label" htmlFor="gridRadios3">
                            Third disabled radio
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    <div className="row mb-3">
                      <legend className="col-form-label col-sm-2 pt-0">Checkboxes</legend>
                      <div className="col-sm-10">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck1" defaultChecked/>
                          <label className="form-check-label" htmlFor="gridCheck1">
                            Example checkbox
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck2" defaultChecked />
                          <label className="form-check-label" htmlFor="gridCheck2">
                            Example checkbox 2
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">Disabled</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" defaultValue="Read only / Disabled" disabled />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">Select</label>
                      <div className="col-sm-10">
                        <select className="form-select" aria-label="Default select example" defaultValue="option1">
                          <option value="option1">Open this select menu</option>
                          <option value="option2">One</option>
                          <option value="option3">Two</option>
                          <option value="option4">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">Multi Select</label>
                      <div className="col-sm-10">
                        <select className="form-select" multiple aria-label="multiple select example" defaultValue={[]}>
                          <option value="option1">Open this select menu</option>
                          <option value="option2">One</option>
                          <option value="option3">Two</option>
                          <option value="option4">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">Submit Button</label>
                      <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Submit Form</button>
                      </div>
                    </div>
                  </form>
                  {/* End General Form Elements */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Advanced Form Elements</h5>
                  {/* Advanced Form Elements */}
                  <form>
                    <div className="row mb-5">
                      <label className="col-sm-2 col-form-label">Switches</label>
                      <div className="col-sm-10">
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked/>
                          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                        </div>
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  defaultChecked />
                          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label>
                        </div>
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" defaultChecked disabled />
                          <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
                        </div>
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" defaultChecked disabled />
                          <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <label className="col-sm-2 col-form-label">Ranges</label>
                      <div className="col-sm-10">
                        <div>
                          <label htmlFor="customRange1" className="form-label">Example range</label>
                          <input type="range" className="form-range" id="customRange1" defaultValue="default" />
                        </div>
                        <div>
                          <label htmlFor="disabledRange" className="form-label">Disabled range</label>
                          <input type="range" className="form-range" id="disabledRange" disabled />
                        </div>
                        <div>
                          <label htmlFor="customRange2" className="form-label">Min and max with steps</label>
                          <input type="range" className="form-range" min={0} max={5} step="0.5" id="customRange2"/>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">Floating labels</label>
                      <div className="col-sm-10">
                        <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" defaultValue="default"/>
                          <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" defaultValue="default"/>
                          <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating mb-3">
                          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: '100px'}} defaultValue={""} />
                          <label htmlFor="floatingTextarea">Comments</label>
                        </div>
                        <div className="form-floating mb-3">
                          <select className="form-select" id="floatingSelect" aria-label="Floating label select example" defaultValue="option1">
                            <option value="option1">Open this select menu</option>
                            <option value="option2">One</option>
                            <option value="option3">Two</option>
                            <option value="option4">Three</option>
                          </select>
                          <label htmlFor="floatingSelect">Works with selects</label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <label className="col-sm-2 col-form-label">Input groups</label>
                      <div className="col-sm-10">
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1">@</span>
                          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" defaultValue="default"/>
                        </div>
                        <div className="input-group mb-3">
                          <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" defaultValue="default"/>
                          <span className="input-group-text" id="basic-addon2">@example.com</span>
                        </div>
                        <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                          <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" defaultValue="default"/>
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text">$</span>
                          <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" defaultValue="default"/>
                          <span className="input-group-text">.00</span>
                        </div>
                        <div className="input-group mb-3">
                          <input type="text" className="form-control" placeholder="Username" aria-label="Username" defaultValue="default"/>
                          <span className="input-group-text">@</span>
                          <input type="text" className="form-control" placeholder="Server" aria-label="Server" defaultValue="default"/>
                        </div>
                        <div className="input-group">
                          <span className="input-group-text">With textarea</span>
                          <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                        </div>
                      </div>
                    </div>
                  </form>
                  {/* End General Form Elements */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
        </Layout>
    );
}

export default FormElements;
