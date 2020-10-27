import React from 'react';
import './Footer.css';
import logo2 from '../../FakeData/Images/logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col col-md-7">
                        <img style={{width: "120px"}} src={logo2} alt=""/>
                    </div>
                    <div className="col col-md-3">
                        <p>About online food</p>
                        <p>Read our blog</p>
                        <p>Sign up to Deliver</p>
                        <p>Add your restaurant</p>
                    </div>
                    <div className="col col-md-2">
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurants near me</p>
                    </div>
                </div>
                <div style={{marginTop: "40px", color: "lightgray"}} className="row">
                    <div className="col col-md-7">
                        <p className="copyright">Copyright 2020 | Hot onion</p>
                    </div>
                    <div className="col col-md-2">
                        <p>Privacy & policy</p>
                    </div>
                    <div className="col col-md-2">
                        <p>Terms of use</p>
                    </div>
                    <div className="col col-md-1">
                        <p>Pricing</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;