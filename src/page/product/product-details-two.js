import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import ProductDetailsTwos from '../../component/Common/ProductDetails/ProductDetailsTwo'
import InstgramSlider from '../../component/Common/Instagram'
import Footer from '../../component/Common/Footer'

const ProductDetailsTwo = () => {
    return (
        <>
            <Header />
            <Banner title="Product Desils " />
            <ProductDetailsTwos />
            <InstgramSlider />
            <Footer />
        </>
    )
}

export default ProductDetailsTwo