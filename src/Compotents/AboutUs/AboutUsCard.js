import React from 'react';
import './AboutUsCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const AboutUsCard = (props) => {

    const { title, img, description, icon } = props.about;

    return (
        <div className="col-md-6 col-lg-4">
            <div className="card about-us-card mb-5">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body row">
                    <div className="col-auto aboutUs-icon">
                        <img src={icon} alt=""/>
                    </div>
                    <div className="col">
                        <h5 className="aboutUs-card-title">{title}</h5>
                        <p className="aboutUs-card-text">{description}</p>
                        <a href="#" className="see-more-btn">See more<FontAwesomeIcon className="see-more-icon" color="green" icon={faArrowCircleRight} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsCard;