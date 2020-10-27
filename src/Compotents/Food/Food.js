import React, { useContext } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import fakeData from '../../FakeData/FakeData';
import { StateContext } from '../../App';
import { Link } from 'react-router-dom';

const Food = () => {

    const [state, setState] = useContext(StateContext);
    const foodCategory = fakeData.filter(food => food.category === state.category);

    return (
        <div className="container mb-5">
            <div className="row">
                {
                    foodCategory.map(food => <FoodCard food={food} />)
                }
            </div>
            <div  className="text-center">
            <Link to="/checkout">
                {state.cart.length > 0 ? <button className="checkout-btn btn btn-success">Checkout your food</button> 
                                       : <button className="checkout-btn btn btn-success" disabled>Checkout your food</button>}
            </Link>
            </div>
        </div>
    );
};

export default Food;