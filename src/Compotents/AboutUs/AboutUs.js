import React from 'react';
import './AboutUs.css';
import { aboutUs } from '../../FakeData/FakeData';
import AboutUsCard from './AboutUsCard';

const AboutUs = () => {
    return (
        <div className="container about-us-container">
            <h3>Why you choose us?</h3>
            <p className="about-us">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> atque quia ea aut excepturi, doloremque eum.</p>
            <div className="row">
                {
                    aboutUs.map(about => <AboutUsCard key={about.id} about={about} />)
                }
            </div>
        </div>
    );
};

export default AboutUs;