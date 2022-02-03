import React from 'react'
import Header from '../component/Common/Header'
import Banner from '../component/Furniture/Banner'
import BannerBottom from '../component/Furniture/BannerBottom'
import HotProduct from '../component/Furniture/HotProduct'
import BlackFriday from '../component/Furniture/BlackFriday'
import PopularProduct from '../component/Furniture/PopularProduct'
import OurStory from '../component/Furniture/OurStory'
import Blog from '../component/Furniture/Blog'
import InstgramSlider from '../component/Common/Instagram'
import Footer from '../component/Common/Footer'
const Furniture = () => {
    return (
        <>
            <Header />
            <Banner />
            <BannerBottom />
            <HotProduct />
            <BlackFriday />
            <PopularProduct />
            <OurStory />
            <Blog />
            <InstgramSlider container="container" />
            <Footer />
        </>
    )
}

export default Furniture