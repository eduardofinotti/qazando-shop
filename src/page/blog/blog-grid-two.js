import React from 'react'
import BlogGridTwo from '../../component/Blog/BlogGridTwo'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import InstgramSlider from '../../component/Common/Instagram'
import Footer from '../../component/Common/Footer'
const BlogGridTwos = () => {
    return (
        <>
            <Header/>
            <Banner title="Blog" />
           <BlogGridTwo/> 
           <InstgramSlider/>
            <Footer/>
        </>
    )
}

export default BlogGridTwos
