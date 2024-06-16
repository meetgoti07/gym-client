import React from 'react';
import PageTitle from '../elements/PageTitle';
import { useNavigate } from 'react-router-dom';

const PaymentSuccessPage = () => {
    const navigate = useNavigate(); 
    
    return (
        <>
            <div className="page-content bg-white">
                <PageTitle activePage="Payment Status" parentTitle="Payment Status" />
                <section className="content-inner overflow-hidden">
                    <div className="container text-center">
                        <h1 style={{color: '#BFF6C3'}}>Your payment is successful.</h1>
                        <h4 style={{color: '#E0FBE2', marginTop: '20px'}}>Thank you for your payment.</h4>
                        <div className='mb-4' style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                            <button className="btn btn-primary shadow-primary btn-skew" onClick={() => navigate('/profile')}>See your orders here</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default PaymentSuccessPage;