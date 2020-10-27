import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StateContext } from '../../App';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {

    const [isFiledValid, setIsFiledValid] = useState(false);
    const handleSubmitDetails = e => {
        setIsFiledValid(true);
        e.preventDefault();
    }

    const [state, setState] = useContext(StateContext);
    const cart = state && state.cart;

    const subTotal = cart.reduce((total, food) => (total + food.price) * food.quantity, 0);
    const tex = 5;
    const deliveryFee = 2;
    const total = subTotal + tex + deliveryFee;

    const fixedToTwoDecimal = num => num.toFixed(2);

    const increaseCount = (id) => {
        const food = cart.find(item => item.id === id);
        food.quantity = food.quantity + 1;;
        const otherItems = cart.filter(item => item.id !== id);
        const newCart = [food, ...otherItems];
        setState({...state, cart: newCart});
    }

    const decreaseCount = (id) => {
        const food = cart.find(item => item.id === id);
        food.quantity = food.quantity > 1 ? food.quantity - 1 : 1;
        const otherItems = cart.filter(item => item.id !== id);
        const newCart = [...otherItems, food];
        setState({...state, cart: newCart});
    }

    return (
        <div className="place-order-container container-md">
            <div className="row">
                <div className="col-lg-7 delivery-details-form d-flex justify-content-center">
                    <form onSubmit={handleSubmitDetails}>
                        <h5>Edit order detail</h5>
                        <input type="text" name="" id="" placeholder="Deliver to Door" required/>
                        <br/>
                        <input type="text" name="" id="" placeholder="107 Rd" required/>
                        <br/>
                        <input type="text" name="" id="" placeholder="Flat, Suit or Floor" required/>
                        <br/>
                        <input type="text" name="" id="" placeholder="Business name"/>
                        <br/>
                        <input type="text" name="" id="" placeholder="Delivery Instruction" required/>
                        <br/>
                        <input type="submit" value="Save & continue"/>
                        {isFiledValid && <p style={{color: "green", fontSize: "12px", textAlign: "center"}}>Details saved place your order</p>}
                    </form>
                </div>
                <div className="col-lg-5 order order-details-container">
                    <div className="order-details">
                        <p className="restaurant-name">From <span style={{fontWeight: "500"}}>Gulshan Pizza Restura RR</span><br/>
                        Arriving in 30-20 min <br/>
                        107 Rd No 8</p>
                        {cart.map(food => <div className="ordered-food row">
                                                <div className="col-auto pl-0 d-flex align-items-center">
                                                    <img src={food.img} alt=""/>
                                                </div>
                                                <div className="col p-0">
                                                    <p><span className="ordered-food-title">{food.title}</span><br/>
                                                    <span className="ordered-food-price">${(food.price * food.quantity).toFixed(2)}</span><br/>
                                                    <span className="ordered-food-text">Order now</span></p>
                                                </div>
                                                <div className="col-auto pr-0 d-flex align-items-center">
                                                    <p>
                                                        <span onClick={() => decreaseCount(food.id)}>-</span>
                                                        <span className="count font-weight-bold bg-white pl-1 pr-1 rounded">{food.quantity}</span>
                                                        <span onClick={() => increaseCount(food.id)}>+</span>
                                                    </p>
                                                </div>
                                            </div>)
                        }
                        <table className="prices">
                            <tr>
                                <td>Subtotal. {cart.length} item</td>
                                <td>${fixedToTwoDecimal(subTotal)}</td>
                            </tr>
                            <tr>
                                <td>Tex</td>
                                <td>${fixedToTwoDecimal(tex)}</td>
                            </tr>
                            <tr>
                                <td>Delivery fee</td>
                                <td>${fixedToTwoDecimal(deliveryFee)}</td>
                            </tr>
                            <tr className="total">
                                <td>Total</td>
                                <td>${fixedToTwoDecimal(total)}</td>
                            </tr>
                        </table>
                        <Link to="/orderUpdate">
                            {isFiledValid ? <button className="place-order-btn">Place order</button>
                                        : <button className="place-order-btn bg-secondary" disabled title="Please save your details">Place order</button>}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;