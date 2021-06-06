import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import { useWindowWidth } from "@react-hook/window-size";
import ActualPath from '../../components/Actual path/ActualPath';
import MainTitle from '../../components/Main title/MainTitle';
import DesktopProductGrid from '../../components/Desktop product grid/DesktopProductGrid';
import MobileProductGrid from '../../components/Mobile product grid/MobileProductGrid';
import Pagination from '../../components/Pagination/Pagination';
import DiscoverSection from '../../components/Discover section/DiscoverSection';
import InterestProducts from '../../components/Interest products/InterestProducts';



const Products = () => {

    //with this costum hook we can get the window width for conditionally to render some components
    const windowWidth = useWindowWidth()

    return(
        <div className="products">
            <ActualPath />
            <MainTitle />
            {windowWidth > 599 ? <DesktopProductGrid /> : <MobileProductGrid />}
            <Pagination />
            <DiscoverSection />
            <InterestProducts />
        </div>
    )
};

export default Products;