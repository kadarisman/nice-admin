import React from 'react';
import Layout from '../../layouts/Layout';
import DataTable1 from '../../components/dataTable/dataTable_1';
import HeadPage from '../../layouts/part/Head';
const DataTables = () => {
    return (
        <>
        <HeadPage title="Table"/>
        <Layout>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Data Tables</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item">Tables</li>
                            <li className="breadcrumb-item active">Data</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Datatables</h5>
                                    <p>Add lightweight datatables to your project with using the <a href="https://www.npmjs.com/package//mui-datatables" target="_blank">MUI-Datatables - Datatables</a> library.</p>
                                    <DataTable1/>
                                    {/* End Table with stripped rows */}
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

export default DataTables;
