import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import LookBooks from '../../component/LookBook'
import InstgramSlider from '../../component/Common/Instagram'
import Footer from '../../component/Common/Footer'
const LookBook = () => {
    return (
        <>
            <Header />
            <Banner title="Lookbook" />
            <LookBooks />
            <InstgramSlider />
            <Footer />
        </>
    )
}

export default LookBook