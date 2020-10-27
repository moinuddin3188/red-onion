import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import FoodCategory from '../FoodCategory/FoodCategory';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Food from '../Food/Food';

const Home = () => {

    return (
        <>
        <Header/>
        <FoodCategory/>
        <Food/>
        <AboutUs/>
        <Footer/>
        </>
    );
};

export default Home;