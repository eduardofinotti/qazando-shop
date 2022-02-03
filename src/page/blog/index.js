import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import BlogGridThree from '../../component/Blog/BlogGridThree'
import InstgramSlider from '../../component/Common/Instagram'
import Footer from '../../component/Common/Footer'
const BlogGridThrees = () => {
    return (
        <>
            <Header/>
            <Banner title="Blog" />
            <BlogGridThree/>
            <InstgramSlider/>
            <Footer/>
        </>
    )
}

export default BlogGridThrees
