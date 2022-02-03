import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import LeftSideBar from '../../component/Shop/LeftSideBar'
import InstgramSlider from '../../component/Common/Instagram'
import Footer from '../../component/Common/Footer'
const ShopLeftSideBar = () => {
    return (
        <>
            <Header />
            <Banner title="Shop" />
            <LeftSideBar />
            <InstgramSlider />
            <Footer />
        </>
    )
}

export default ShopLeftSideBar