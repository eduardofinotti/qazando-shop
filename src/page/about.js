import React from 'react'
import Header from '../component/Common/Header'
import Banner from '../component/Common/Banner'
import AboutComponent from '../component/About'
import InstgramSlider from '../component/Common/Instagram'
import Footer from '../component/Common/Footer'
const About = () => {
    return (
        <>
            <Header />
            <Banner title="About" />
            <AboutComponent />
            {/* <InstgramSlider /> */}
            <Footer />
        </>
    )
}

export default About