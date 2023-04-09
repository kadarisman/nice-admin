import React from 'react';
import Layout from '../../layouts/Layout';
import LineChart from '../../components/charts/LineChart';
import DoughNoutChart from '../../components/charts/DoughNoutChart';
import PolarChart from '../../components/charts/PolarChart';
import PieChart from '../../components/charts/PieChart';
import BarCHart from '../../components/charts/BarCHart';
import RadarChart from '../../components/charts/RadarChart';
import StackedBarChart from '../../components/charts/StackedBarChart';
import BubbleChart from '../../components/charts/BubbleChart';
import HeadPage from '../../layouts/part/Head';
const ChartJs = () => {
    return (
        <>
            <HeadPage title="Chart" />
            <Layout>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1>Chart.js</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Charts</li>
                                <li className="breadcrumb-item active">Chart.js</li>
                            </ol>
                        </nav>
                    </div>{/* End Page Title */}
                    <p>Chart.JS For React Js Examples. You can check the <a href="https://react-chartjs-2.js.org/examples/" target="_blank">official website</a> for more examples.</p>
                    <section className="section">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Line Chart</h5>
                                        {/* Line Chart */}
                                        <LineChart />
                                        {/* End Line CHart */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Bar CHart</h5>
                                        {/* Bar Chart */}
                                        <BarCHart />
                                        {/* End Bar CHart */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Pie Chart</h5>
                                        {/* Pie Chart */}
                                        <PieChart />
                                        {/* End Pie CHart */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Doughnut Chart</h5>
                                        {/* Doughnut Chart */}
                                        <DoughNoutChart />
                                        {/* End Doughnut CHart */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Radar Chart</h5>
                                        {/* Radar Chart */}
                                        <RadarChart />
                                        {/* End Radar CHart */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Polar Area Chart</h5>
                                        {/* Polar Area Chart */}
                                        <PolarChart />
                                        {/* End Polar Area Chart */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Stacked Bar Chart</h5>
                                        {/* Stacked Bar Chart */}
                                        <StackedBarChart />
                                        {/* End Stacked Bar Chart */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Bubble Chart</h5>
                                        {/* Bubble Chart */}
                                        <BubbleChart />
                                        {/* End Bubble Chart */}
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

export default ChartJs;
