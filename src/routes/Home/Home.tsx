import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import Slide from '../../components/Slide/Slide';
import DiscoverSection from '../../components/Discover section/DiscoverSection';
import HomeGrid from '../../components/Home grid/HomeGrid';
import InterestProducts from '../../components/Interest products/InterestProducts';




const Home = () => {

    return(
        <div className="home">

            <Slide />
            <HomeGrid />
            <HomeGrid />
            <DiscoverSection />
            <InterestProducts />
            
        </div>
    )
};

export default Home;