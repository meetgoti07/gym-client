import React from 'react';
import {Link} from 'react-router-dom';
import { IMAGES,SVGICON } from '../constants/theme';


const Footer = () => {
    let update = new Date();
    return (
        <>
            <footer className="site-footer style-1 bg-img-fix footer-action" style={{backgroundImage: "url("+ IMAGES.footerbg +")"}} id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-4 wow fadeInUp" data-wow-delay="0.4s">

                            </div>
                            <div className="col-xl-3 col-md-12">
                                <div className="widget widget_about">
                                    <div className="footer-logo logo-dark">
                                        <Link to={"/"}><img className='select_logo_dark' src={IMAGES.logo} alt="" /></Link> 
                                    </div>
                                    <p>Unlease Your Beast</p>
                                    <h6 className="m-b15">Our Socials</h6>
                                    <div className="dz-social-icon style-1">
                                        <ul>									
                                            <li>
                                                <Link target="_blank" to="https://www.instagram.com/blackfusefitness" rel="noreferrer">
                                                    <i className="fab fa-instagram"></i>
                                                </Link>
                                            </li>{" "}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-4 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="widget widget_locations">
                                    <h4 className="footer-title">Locations</h4>
                                    <div className="clearfix">
                                        <h6>Jamaica</h6>
                                        <p>4 Church Street; Linstead; St Catherine</p>
                                        {SVGICON.map}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 wow fadeInUp" data-wow-delay="0.8s">
                                <div className="widget widget_working">
                                    <h4 className="footer-title">Working Hours</h4>
                                    <ul>
                                        <li>
                                            <span className="days">Monday – Friday:</span>
                                            <span className="time"><Link to={"/schedule"}>07:00 – 21:00</Link></span>
                                        </li>
                                        <li>
                                            <span className="days">Saturday:</span>
                                            <span className="time"><Link to={"/schedule"}>07:00 – 16:00</Link></span>
                                        </li>
                                        <li>
                                            <span className="days">Sunday Closed:</span>
                                        </li>
                                    </ul>
                                    <Link to={"/schedule"} className="btn-link" >More Here <i className="fa-solid fa-arrow-right m-l10"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Footer Bottom Part --> */}
                <div className="container">
                    <div className="footer-bottom">
                        <div className="text-center"> 
                            <span className="copyright-text">Copyright © {update.getFullYear()} <Link to="https://infoquotient.com" rel="noreferrer" target="_blank" >Black Fuse Fitness</Link>. All rights reserved. Developed by <Link to="https://infoquotient.com" rel="noreferrer" target="_blank" >Info Quotient</Link></span> 
                        </div>
                    </div>
                </div>
                <img className="girl-img" src={IMAGES.footergril1} alt="" />
                <img className="svg-shape-1 rotate-360" src={IMAGES.footercircle} alt="" />
                <img className="svg-shape-2 rotate-360" src={IMAGES.footercircle} alt="" />
            </footer>
        </>
    );
};

export default Footer;