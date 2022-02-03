import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import ProductDetailsOne from '../../component/Common/ProductDetails/ProductDetails'
import InstgramSlider from '../../component/Common/Instagram'
import Footer from '../../component/Common/Footer'

const ProductDetails = () => {
    return (
        <>
            <Header />
            <Banner title="Product Details" />
            <ProductDetailsOne />
            <InstgramSlider />
            <Footer />
        </>
    )
}

export default ProductDetails