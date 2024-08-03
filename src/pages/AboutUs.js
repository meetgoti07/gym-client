import React from 'react';
import FitnessGoal from '../components/FitnessGoal';
import PageTitle from '../elements/PageTitle';


const AboutUs = () => {
    return (
        <>
            <div className="page-content bg-white">
                <PageTitle activePage="About Us" parentTitle="Pages" /> 
                <section className="content-inner">
			        <div className="container">
				        <div className="row about-bx2 align-items-center">
                            <FitnessGoal />        
                        </div>   
                    </div>
                </section>
            </div>   
        </>
    );
};

export default AboutUs;