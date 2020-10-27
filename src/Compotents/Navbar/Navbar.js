import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../FakeData/Images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { StateContext } from '../../App';

const Navbar = () => {

    const [state, setState] = useContext(StateContext);
    const logOut = () => {
        setState({
            category: 'lunch',
            cart: [],
            userName: "",
            email: ""
        });
    }

    return (
        <nav className="container-md pt-4 pb-1">
            <div className="row">
                <div className="col">
                    <Link to="/">
                        <img style={{width: "110px"}} src={logo} alt=""/>
                    </Link>
                </div>
                <div className="col-auto">
                    {state.userName && <button onClick={logOut} className="log-out-btn">Log out</button>}
                </div>
                <div className="col-auto">
                    {
                        state.userName ?
                        <p className="user-name">{(state.userName).toUpperCase()} <FontAwesomeIcon color="indianred" className="ml-2" icon={faUser} /></p> :
                        <Link to="/login">
                            <button className="sign-up-btn">Sign up</button>
                        </Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;