import React, { useContext } from 'react';
import './FoodCategory.css';
import { StateContext } from '../../App';

const FoodCategory = () => {

    const [state, setState] = useContext(StateContext);

    return (
        <div className="food-category d-flex justify-content-center">
            <button onClick={() => setState({...state, category: "breakfast", showFood: true})}>Breakfast</button>
            <button onClick={() => setState({...state, category: "lunch", showFood: true})} >Lunch</button>
            <button onClick={() => setState({...state, category: "dinner", showFood: true})} >Dinner</button>
        </div>
    );
};

export default FoodCategory;