import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/theme';
import PageTitle from '../elements/PageTitle';
import axios from 'axios';
import Swal from 'sweetalert2';

const pricingBlog = [
    {
        category: 'Basic',
        plans: [
            {
                rate: '900',
                title: 'Daily',
                features: [
                    'Access to gym facilities',
                    'Free parking',
                    'Locker room access'
                ]
            },
            {
                rate: '3500',
                title: 'Weekly',
                features: [
                    'All Basic Daily features'
                ]
            },
            {
                rate: '8500',
                title: 'Monthly',
                features: [
                    'All Daily features',
                    '24/7 Gym Access (with card)',
                    'Free Group classes',
                    'Complimentary wifi access',
                    'Plan expires after 180 days'
                ]
            }
        ]
    },
    {
        category: 'Premium',
        plans: [
            {
                rate: '24000',
                title: '3 Months',
                features: [
                    'Access to All Gym facilities',
                    '24/7 Gym Access (with card)',
                    'Free Group classes',
                    'Complimentary wifi access',
                    'Complimentary BLACK FUSE FITNESS t-shirt',
                    'Plan expires after 90 days'
                ]
            },
            {
                rate: '44000',
                title: '6 Months',
                features: [
                    'Access to All Gym facilities',
                    '24/7 Gym Access (with card)',
                    'Free Group classes',
                    'Complimentary wifi access',
                    'Complimentary BLACK FUSE FITNESS t-shirt',
                    'Plan expires after 180 days'
                ]
            },
            {
                rate: '80000',
                title: '1 Year',
                features: [
                    'Access to All Gym facilities',
                    '24/7 Gym Access (with card)',
                    'Free Group classes',
                    'Complimentary wifi access',
                    'Complimentary BLACK FUSE FITNESS t-shirt',
                    'Plan expires after 180 days',
                    '50% off'
                ]
            }
        ]
    },
    {
        category: 'Personal Training',
        plans: [
            {
                rate: '20000',
                title: 'Gold',
                features: [
                    'Training plan for the month',
                    '4 face-to-face / Virtual Sessions with Trainer per week',
                    'Nutrition Guide',
                    '2 Consultations per Week'
                ]
            },
            {
                rate: '15000',
                title: 'Silver',
                features: [
                    'Training plan for the month',
                    '3 face-to-face / Virtual Sessions with Trainer per week',
                    'Nutrition Guide',
                    '2 Consultations per Week'
                ]
            },
            {
                rate: '10000',
                title: 'Bronze',
                features: [
                    'Training plan for the month',
                    '1 face-to-face / Virtual Sessions with Trainer per week',
                    'Nutrition Guide',
                    'Consultations at Trainers discretion'
                ]
            }
        ]
    }
];

const Pricing = () => {
    const [hoverEffect, setHoverEffect] = useState(null);
    const navigate = useNavigate();

    const userDetails = async (data) => {
        const { rate } = data;
        try {
            const AuthStr = 'Bearer '.concat(localStorage.getItem('token'));
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/clients/checkIfRegisterMembership`,
                {},
                {
                    headers: {
                        "Authorization": AuthStr
                    }
                }
            );

            if (response.data.success === false) {
                Swal.fire({
                    title: "Failed",
                    text: `${response.data.message}!`,
                    icon: "info"
                });
                return;
            }

            if (response.data.success === true) {
                navigate('/user-details', {
                    state: {
                        totalPrice: rate,
                        CustomMessage: {
                            token: localStorage.getItem('token'),
                            type: 'Membership',
                            title: data.title,
                            rate: data.rate,
                            duraion: 30,
                        }
                    }
                });
            }
        } catch (error) {
            console.error("Error fetching purchase history:", error);
        }
    }

    return (
        <>
            <div className="page-content bg-white">
                <PageTitle activePage={'Pricing'} parentTitle="Pages" />
                <section className="content-inner rounded-shape-top overflow-hidden" style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}>
                    <div className="container">
                        {pricingBlog.map((categoryData, categoryIndex) => (
                            <div key={categoryIndex}>
                                <h2>{categoryData.category}</h2>
                                <div className="row">
                                    {categoryData.plans.map((data, planIndex) => (
                                        <div className="col-lg-4 col-md-6 m-b30" key={planIndex}>
                                            <div className={`pricingtable-wrapper box-hover style-1 ${planIndex === hoverEffect ? 'active' : ''}`}
                                                onMouseEnter={() => setHoverEffect(planIndex)}
                                            >
                                                <div className="pricingtable-inner">
                                                    <div className="pricingtable-title">{data.title}</div>

                                                    <div className="pricingtable-price">
                                                        <h2 className="pricingtable-bx text-primary">${data.rate}<small>/ Month</small></h2>
                                                        <p>A good choice when working remotely With Your Clients</p>
                                                    </div>
                                                    <ul className="pricingtable-features">
                                                        {data.features.map((feature, index) => (
                                                            <li key={index}>{feature}</li>
                                                        ))}
                                                    </ul>
                                                    <div className="pricingtable-footer">
                                                        <button className="btn btn-primary btn-skew" onClick={() => userDetails(data)}><span>Purchase</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Pricing;
