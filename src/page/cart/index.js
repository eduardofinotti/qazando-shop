import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import CartArea from '../../component/Cart'
import Footer from '../../component/Common/Footer'

const Cart = () => {
    return (
        <>
            <Header/>
            <Banner title="Cart" />
            <CartArea/>
            <Footer/>

        </>
    )
}

export default Cart