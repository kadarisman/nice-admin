import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const SideBar = () => {
    const router = useRouter();
    const roterNow = router.pathname.split("/");
    const baseRouterNow = roterNow[1];
    const seconRouterNow = roterNow[2];
    return (
        <>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="">

                    <li className="nav-item">
                        <Link className={router.pathname == "/" ? "nav-link" : "nav-link collapsed"} href="/">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    {/* <!-- End Dashboard Nav --> */}

                    <li className="nav-item">
                        <a className={baseRouterNow == "components" ? "nav-link" : "nav-link collapsed"} data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" className={baseRouterNow == "components" ? "nav-content collapse show" : "nav-content collapse"} data-bs-parent="#sidebar-nav">
                            <li> 
                                <Link href="/components/alerts" className={seconRouterNow == "alerts" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Alerts</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/accordion" className={seconRouterNow == "accordion" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Accordion</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/badges" className={seconRouterNow == "badges" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Badges</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/breadcrumbs" className={seconRouterNow == "breadcrumbs" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Breadcrumbs</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/buttons" className={seconRouterNow == "buttons" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Buttons</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/cards" className={seconRouterNow == "cards" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Cards</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/carousel" className={seconRouterNow == "carousel" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Carousel</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/list-group" className={seconRouterNow == "list-group" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>List group</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/modals" className={seconRouterNow == "modals" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Modal</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/tabs" className={seconRouterNow == "tabs" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Tabs</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/paginations" className={seconRouterNow == "paginations" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Pagination</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/progress" className={seconRouterNow == "progress" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Progress</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/spinners" className={seconRouterNow == "spinners" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Spinners</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/tooltips" className={seconRouterNow == "tooltips" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Tooltips</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- End Components Nav --> */}

                    <li className="nav-item">
                        <a className={baseRouterNow == "forms" ? "nav-link" : "nav-link collapsed"}  data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-journal-text"></i><span>Forms</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="forms-nav" className={baseRouterNow == "forms" ? "nav-content collapse show" : "nav-content collapse"} data-bs-parent="#sidebar-nav">
                            <li>
                                <Link href="/forms/form-elements" className={seconRouterNow == "form-elements" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Form Elements</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/forms/form-layouts" className={seconRouterNow == "form-layouts" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Form Layouts</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/forms/form-editors" className={seconRouterNow == "form-editors" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Form Editors</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/forms/form-validation" className={seconRouterNow == "form-validation" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Form Validation</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- End Forms Nav --> */}

                    <li className="nav-item">
                        <a className={baseRouterNow == "tables" ? "nav-link" : "nav-link collapsed"} data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-layout-text-window-reverse"></i><span>Tables</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="tables-nav"  className={baseRouterNow == "tables" ? "nav-content collapse show" : "nav-content collapse"} data-bs-parent="#sidebar-nav">
                            <li>
                                <Link href="/tables/general-tables" className={seconRouterNow == "general-tables" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>General Tables</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/tables/data-tables" className={seconRouterNow == "data-tables" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Data Tables</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- End Tables Nav --> */}

                    <li className="nav-item">
                        <a className={baseRouterNow == "charts" ? "nav-link" : "nav-link collapsed"} data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="charts-nav" className={baseRouterNow == "charts" ? "nav-content collapse show" : "nav-content collapse"} data-bs-parent="#sidebar-nav">
                            <li>
                                <Link href="/charts/chart-js" className={seconRouterNow == "chart-js" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Chart.js</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- End Charts Nav --> */}

                    <li className="nav-item">
                        <a className={baseRouterNow == "icons" ? "nav-link" : "nav-link collapsed"} data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="icons-nav"  className={baseRouterNow == "icons" ? "nav-content collapse show" : "nav-content collapse"} data-bs-parent="#sidebar-nav">
                            <li>
                                <Link href="/icons/bootstrap-icons" className={seconRouterNow == "bootstrap-icons" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Bootstrap Icons</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/icons/remix-icons" className={seconRouterNow == "remix-icons" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Remix Icons</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/icons/boxicons" className={seconRouterNow == "boxicons" ? "active" : ""}>
                                    <i className="bi bi-circle"></i><span>Boxicons</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- End Icons Nav --> */}

                    <li className="nav-heading">Pages</li>

                    <li className="nav-item">
                        <Link href="/landing" className={baseRouterNow == "landing" ? "nav-link" : "nav-link collapsed"}>
                            <i className="bi bi-file-earmark-break"></i>
                            <span>Landing</span>
                        </Link>
                    </li>
                    {/* <!-- End landing Page Nav --> */}

                    <li className="nav-item">
                        <Link href="/profile" className={baseRouterNow == "profile" ? "nav-link" : "nav-link collapsed"}>
                            <i className="bi bi-person"></i>
                            <span>Profile</span>
                        </Link>
                    </li>
                    {/* <!-- End Profile Page Nav --> */}

                    <li className="nav-item">
                        <Link href="/faq" className={baseRouterNow == "faq" ? "nav-link" : "nav-link collapsed"}>
                            <i className="bi bi-question-circle"></i>
                            <span>F.A.Q</span>
                        </Link>
                    </li>
                    {/* <!-- End F.A.Q Page Nav --> */}

                    <li className="nav-item">
                        <Link href="/contact" className={baseRouterNow == "contact" ? "nav-link" : "nav-link collapsed"}>
                            <i className="bi bi-envelope"></i>
                            <span>Contact</span>
                        </Link>
                    </li>
                    {/* <!-- End Contact Page Nav --> */}

                    <li className="nav-item">
                        <Link href="/register" className={baseRouterNow == "register" ? "nav-link" : "nav-link collapsed"}>
                            <i className="bi bi-card-list"></i>
                            <span>Register</span>
                        </Link>
                    </li>
                    {/* <!-- End Register Page Nav --> */}

                    <li className="nav-item">
                        <Link href="/login" className={baseRouterNow == "login" ? "nav-link" : "nav-link collapsed"}>
                            <i className="bi bi-box-arrow-in-right"></i>
                            <span>Login</span>
                        </Link>
                    </li>
                    {/* <!-- End Login Page Nav --> */}

                    <li className="nav-item">
                        <Link href="/error404" className={baseRouterNow == "error404" ? "nav-link" : "nav-link collapsed"}>
                            <i className="bi bi-dash-circle"></i>
                            <span>Error 404</span>
                        </Link>
                    </li>
                    {/* <!-- End Error 404 Page Nav --> */}
                    {/* <!-- End Blank Page Nav --> */}

                </ul>

            </aside>
        </>
    );
}

export default SideBar;
