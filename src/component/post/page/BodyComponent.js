import React from 'react';
import {Link} from "react-router-dom";

const BodyComponent = () => {
    return (
        <div>
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:'500em'}}>
                        <h1 className="display-5 mb-3">Latest Blog</h1>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid" src="img/blog-1.jpg" alt=""/>
                            <div className="bg-light p-4">
                                <a className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                                <div className="text-muted border-top pt-4">
                                    <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                                    <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                                <Link to={"/edit/1"}>
                                    <button>edit</button>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid" src="img/blog-1.jpg" alt=""/>
                            <div className="bg-light p-4">
                                <a className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                                <div className="text-muted border-top pt-4">
                                    <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                                    <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                                <Link to={"/edit/2"}>
                                    <button>edit</button>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid" src="img/blog-1.jpg" alt=""/>
                            <div className="bg-light p-4">
                                <a className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                                <div className="text-muted border-top pt-4">
                                    <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                                    <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                                <Link to={"/edit/3"}>
                                    <button>edit</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="">Load More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyComponent;
