import React, { useState, useContext } from 'react';
import './Login.css';
import logo from '../../FakeData/Images/logo2.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Firebase/Firebase.config';
import { StateContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [state, setSate] = useContext(StateContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(true);
    const [forgetPassword, setForgetPassword] = useState(false);
    const [error, setError] = useState({
        emailError: "",
        passwordError: "",
        confirmPasswordError: ""
    })
    
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        isPasswordMatch: false,
        success: false,
        error: ""
    });

    const handleBlur = e => {
        let isFieldValid = true;
        if(e.target.name === "email") {
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            isFieldValid = isEmailValid;
            isEmailValid ? setError({...error, emailError: ""}) : setError({...error, emailError: "Email is not valid"})
        }
        if(e.target.name === "password") {
            const passwordLength = e.target.value.length > 6;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value);
            const isPasswordValid = isPasswordHasNumber && passwordLength;
            isFieldValid = isPasswordValid;
            setUser({...user, password: e.target.value});
            isPasswordValid ? setError({...error, passwordError: ""}) : setError({...error, passwordError: "Password must contain number"})
        }
        if(e.target.name === "confirmPassword"){
            user.password === e.target.value ? setUser({...user, isPasswordMatch: true}) : setUser({...user, isPasswordMatch: false});
            user.password === e.target.value ? setError({...error, confirmPasswordError: ''}) : setError({...error, confirmPasswordError: 'Password not match'});
        }
        if(isFieldValid){
            const userInfo = {...user};
            userInfo[e.target.name] = e.target.value;
            setUser(userInfo);
            setSate({...state, ...userInfo});
        }
    }

    const handleLogin = e => {
        if(newUser && state.email && state.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                setUser({...user, success: true, error: ""});
                setSate({...state, userName: user.name});
                updateUserName(user.name);
                history.replace(from);
            })
            .catch(function(error) {
                const errorMessage = error.message;
                setUser({...user, success: false, error: errorMessage});
            });
        }
        if(!newUser && state.email && state.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const user = firebase.auth().currentUser;
                setUser({...user, success: true, error: ""});
                setSate({...state, userName: user.displayName});
                history.replace(from);
            })
            .catch(function(error) {
                var errorMessage = error.message;
                setUser({...user, success: false, error: errorMessage});
            });
        }
        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        })
        .then(res => {})
        .catch(error => {})
    }    

    return (
        <div className="login-form d-flex justify-content-center">
            <form onSubmit={handleLogin}>
                <img src={logo} alt="" />
                <br />

                {newUser && <> <input onBlur={handleBlur} type="text" name="name" placeholder="Name" required />
                    <br /> </>}

                <input onBlur={handleBlur} type="email" name="email" placeholder={forgetPassword ? "Your email" : "Email"} />
                <br />
                {newUser && <p className="error mt-n3">{error.emailError}</p>}

                <input onBlur={handleBlur} type="password" name="password" placeholder={forgetPassword ? "Password you remember" : "Password"} />
                <br />
                {newUser && <p className="error mt-n3">{error.passwordError}</p>}
                {!newUser && <p onClick={() => setForgetPassword(!forgetPassword)} className="forget-password mt-n2">Forget password</p>}

                {newUser && <> <input onBlur={handleBlur} type="password" name="confirmPassword" placeholder="Confirm password" />
                    <br /> </>}
                {newUser && <p className="error mt-n3">{error.confirmPasswordError}</p>}

                {forgetPassword ? <input type="submit" value="Send email" />
                    : <input type="submit" value={newUser ? "Sign in" : "Log in"} />}
                <p onClick={() => setNewUser(!newUser)} className="have-an-account text-center">{newUser ? 'Already have an account' : 'Create new account'}</p>
                {user.success && <p className="success text-center">User {newUser ? "created" : "logged in"} successfully</p>}
                <p className="error text-center">{user.error}</p>
            </form>
        </div>
    );
};

export default Login;