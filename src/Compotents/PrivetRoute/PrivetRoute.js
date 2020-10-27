import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import { StateContext } from '../../App';

const PrivetRoute = ({ children, ...rest }) => {

    const [state, setState] = useContext(StateContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                state.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivetRoute;