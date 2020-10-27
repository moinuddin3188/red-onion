import React, { useState, useContext } from 'react';
import './FoodDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useParams, Link } from 'react-router-dom';
import fakeData from '../../FakeData/FakeData';
import { StateContext } from '../../App';
import FoodCategory from '../FoodCategory/FoodCategory';
import Food from '../Food/Food';

const FoodDetail = () => {

    const [state, setState] = useContext(StateContext);

    const { foodId } = useParams();
    const food = fakeData.find(food => food.id === foodId);
    const {img, title, description, price} = food;

    const [count, setCount] = useState(1);

    const addFood = () => {
        const newFood = {...food, quantity: count};
        const newCart = [...state.cart, newFood];
        setState({...state, cart: newCart});
    }
console.log(state)
    return (
        <>
        <FoodCategory/>
        {
            state.showFood ?
                <Food/>
                : 
                <div className="food-details-container">
                    <div className="row">
                        <div className="col-md-6 order-md-first">
                            <h1>{title}</h1>
                            <p className="food-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sit inventore mollitia unde deleniti pariatur esse consequuntur ex quaerat incidunt, fugit, molestiae excepturi quis explicabo expedita eaque vero, saepe cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="food-quantity">
                                <h2>${(price*count).toFixed(2)}</h2>
                                <p className="food-count">
                                    <span onClick={() => setCount(count > 1 ? count - 1 : 1)}> - </span>
                                    <span className="count"> {count} </span>
                                    <span onClick={() => setCount(count + 1)} className="text-danger"> + </span>
                                </p>
                            </div>
                            <button onClick={addFood} className="add-btn"><FontAwesomeIcon icon={faShoppingCart} /> add</button>
                            <div className="recommended-food">
                                <img className="w-25" src={img} alt=""/>
                                <img className="w-25 ml-5" src={img} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center order-first pl-5">
                            <img className="w-75" src={img} alt=""/>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default FoodDetail;