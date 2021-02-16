import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._BC428684220_.jpg" className="home__image" alt=""/>
            <div className="home__row">
            <Product 
            id="12321341" 
            title="If Animals Kissed Good Night - Board book – Illustrated" 
            price={3.49} 
            rating={5} 
            image="https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._SY498_BO1,204,203,200_.jpg"/>
            <Product 
            id="31545687" 
            title="Nintendo Switch - Animal Crossing: New Horizons Edition - Switch" 
            price={299.99} 
            rating={5} 
            image="https://images-na.ssl-images-amazon.com/images/I/81Sxdp0JBLL._AC_SL1500_.jpg"/>
            </div>
        <div className="home__row">
            <Product 
            id="12321341" 
            title="All-new Blink Outdoor – wireless, weather-resistant HD security camera with two-year battery life and motion detection – 1 camera kit" 
            price={74.99} 
            rating={5} 
            image="https://images-na.ssl-images-amazon.com/images/I/61dymHa0ECL._SL1000_.jpg"/>
            <Product 
            id="12321341" 
            title="Famous TikTok Leggings, Yoga Pants for Women High Waist Tummy Control Booty Bubble Hip Lifting Workout Running Tights" 
            price={12.99} 
            rating={4} 
            image="https://images-na.ssl-images-amazon.com/images/I/61bNbJH%2BZaL._AC_UX522_.jpg"/>
            <Product 
            id="12321341" 
            title="Just Dance 2021 - Nintendo Switch Standard Edition" 
            price={29.83} 
            rating={5} 
            image="https://images-na.ssl-images-amazon.com/images/I/81JMb%2BkSAAL._SL1500_.jpg"/>
        </div>
        <div className="home__row">
            <Product 
            id="12321341" 
            title="All-new Echo Show 10 (3rd Gen) | HD smart display with motion and Alexa | Glacier White" 
            price={249.99} 
            rating={5} 
            image="https://images-na.ssl-images-amazon.com/images/I/61LL0OFPI-L._AC_SL1000_.jpg"/>
        </div>
    
        </div>
    )
}

export default Home
