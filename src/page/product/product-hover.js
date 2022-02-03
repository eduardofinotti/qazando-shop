import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import ProductHovers from '../../component/Common/Product/ProductHover'
import InstgramSlider from '../../component/Common/Instagram'
import Footer from '../../component/Common/Footer'
const ProductHover = () => {
    return (
        <>
            <Header />
            <Banner title="Product Hover" />
            <ProductHovers />
            <InstgramSlider />
            <Footer />
        </>
    )
}

export default ProductHover