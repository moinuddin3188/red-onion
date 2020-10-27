import React, { useContext } from 'react';
import './OrderUpdate.css';
import map from "../../FakeData/Images/map.png";
import bike from '../../FakeData/Images/Group 1151.png';
import rider from '../../FakeData/Images/Group 1152.png';
import { StateContext } from '../../App';

const OrderUpdate = () => {

    const [state, setState] = useContext(StateContext); console.log(state);

    return (
        <div className="order-update-container">
            <div className="row">
                <div className="col-6 col-lg-8 d-flex justify-content-center">
                    <div className="map">
                        <img className="img-fluid" src={map} alt="" />
                    </div>
                </div>
                <div className="col-6 col-lg-4">
                    <div className="order-update">
                        <img className="ml-4" src={bike} alt=""/>
                        <div className="location bg-white p-2 mt-3 mb-2 rounded">
                            <h6>Your location</h6>
                            <p>107 Rd No 8</p>
                            <h6 className="mt-4">Shop location</h6>
                            <p>Golshan plaza</p>
                        </div>
                        <h4>9:30</h4>
                        <p className="time">Estimated delivery time</p>
                        <div className="rider bg-white p-2 mt-3 mb-2 rounded d-flex">
                            <img src={rider} alt=""/>
                            <div className="mt-2 ml-3">
                                <h6>{state.userName}</h6>
                                <p>Your Rider</p>
                            </div>
                        </div>
                        <button className="contact-btn mt-2">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderUpdate;