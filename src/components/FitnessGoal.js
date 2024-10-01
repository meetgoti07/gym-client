import React from 'react';
import {Link} from 'react-router-dom';
import {Tab, Nav} from 'react-bootstrap';
import { IMAGES } from '../constants/theme';

const FitnessGoal = ({isOpenModal}) => {
    return (
        <>
            <div className="col-lg-6 about-content m-b30">
                <div className="section-head m-0">
                    <span className="sub-title" style={{color: 'white'}}>ABOUT US</span>
                    <h2 className="title">We Help To Get <span>Fitness</span> Goal</h2>
                    <p className="m-0" style={{color: 'lightgrey', opacity: '0.98'}}>BLACK FUSE FITNESS has evolved from
                        the legacy of KRATOS FITNESS CENTRE which commenced its operation in 2021. Originally
                        established at Shop 26 Harbour Bay Plaza, Harbour View, KRATOS FITNESS CENTRE quickly gained,
                        momentum, growing exponentially over two years and serving ove r300 registered clients. The
                        facility became a fitness hub, positively impacting Harbour View and surrounding communities
                        through its dynamic fitness programs and invigorating bootcamp events.</p>
                </div>
                <div className="myTabContent" data-wow-delay="0.8s">
                    <Tab.Container defaultActiveKey={'Mission'}>
                        <Nav as="ul" className="nav nav-tabs style-1 m-b20 m-t30">
                            <Nav.Item as="li" className="nav-item">
                                <Nav.Link className="nav-link" eventKey={'Mission'}>
                                    <span>Our Mission</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="nav-item">
                                <Nav.Link className="nav-link" eventKey={'Vision'}>
                                    <span>Our Vision</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content className="tab-content m-sm-b30 m-b40 p-r30" id="myTabContent">
                            <Tab.Pane eventKey={'Mission'}>
                                <div className="content">
                                    <p>We are dedicated to empowering individuals on their fitness journeys, going
                                        beyond just to provide a state-of-the-art facility and fostering a supportive
                                        community that encourages and guides each member to achieve their unique health
                                        and wellness goals.</p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey={'Vision'}>
                                <div className="content">
                                    <p>We aspire to be the most desired fitness group in the region, recognized for our
                                        unwavering commitment to holistic well-being, offering enduring support,
                                        camaraderie and lifelong commitment to a healthier, happier lifestyle.</p>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
                <div className="contact-us">
                    <span className="icon"><i className="fa-solid fa-phone"></i></span>
                    <div className="content">
                        <span style={{color: 'white'}}>Call us for help</span>
                        <h4 className="number">(876) 295-5173</h4>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 m-b30">
                <div className="dz-media">
                    {/* Video Box 1 */}
                    <div className="image-box">
                        <div className="video-bx1 h-auto w-auto overflow-visible">
                            <video
                                src={IMAGES.video1} // replace with your video URL
                                controls
                                width={"300px"}
                                height={"150px"}
                                className="w-100 h-auto" // optional styling for responsiveness
                            />

                        </div>
                        <div className="info-box">
                            <span><i className="flaticon-play text-primary"></i> High Quality Equipments</span>
                        </div>
                    </div>

                    {/* Video Box 2 */}
                    <div className="image-box">
                        <video
                            src={IMAGES.video2} // replace with your second video URL
                            controls
                            className="w-100 h-auto" // optional styling for responsiveness
                        />
                        <div className="info-box">
                            <span><i className="flaticon-athletics text-primary"></i> Professional Trainer</span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default FitnessGoal;