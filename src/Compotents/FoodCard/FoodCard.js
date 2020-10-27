import React, { useContext } from 'react';
import './FoodCard.css';
import { useHistory } from 'react-router-dom';
import { StateContext } from '../../App';

const FoodCard = (props) => {

    const [state, setState] = useContext(StateContext);

    const { img, title, price, description, id } = props.food;
    const history = useHistory();
    const goToFoodDetails = () => {
        setState({...state, showFood: false});
        history.push(`/foodDetail/${id}`);
    }

    return (
        <div onClick={goToFoodDetails} className="col-md-6 col-lg-4">
            <div className="card food-card text-center mb-5 pt-3">
                <div className="food-img">
                    <img className="card-img-top" src={img} alt="..."/>
                </div>
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    <p className="card-text text-black-50">{description}</p>
                    <h5>${price}</h5>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;