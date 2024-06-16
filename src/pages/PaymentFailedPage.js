import React from 'react';
import PageTitle from '../elements/PageTitle';

const PaymentFailedPage = () => {

    return (
        <>
            <div className="page-content bg-white">
                <PageTitle activePage="Payment Status" parentTitle="Payment Status" />
                <section className="content-inner overflow-hidden">
                    <div className="container text-center">
                        <h1 style={{color: '#FF9EAA'}}>Your payment is Failed.</h1>
                        <h4 style={{color: '#FFD0D0', marginTop: '20px'}}>Something went wrong in processing payment.</h4>
                    </div>
                </section>
            </div>
        </>
    );
};

export default PaymentFailedPage;