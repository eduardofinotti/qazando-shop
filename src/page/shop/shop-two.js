import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import ShopTwo from '../../component/Shop/ShopTwo'
import InstgramSlider from '../../component/Common/Instagram'
import Footer from '../../component/Common/Footer'

const Shop = () => {
    return (
        <>
            <Header />
            <Banner title="Shop" />
            <ShopTwo />
            <InstgramSlider />
            <Footer />
        </>
    )
}

export default Shop