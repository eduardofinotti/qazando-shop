import React from 'react'
import BlogCard from '../../Blog/BlogCard'
import { BlogData } from '../../Blog/BlogData'
import Heading from '../Heading'
const Blog = () => {
    return (
        <>
    <section id="blog_area_one" className="ptb-100">
        <div className="container">
            <Heading heading="Latest Blog" para="Mauris luctus nisi sapien tristique dignissim ornare"/>
            <div className="row">
                {BlogData.slice(0, 3).map((data, index) =>(
                      <BlogCard img={data.img} title={data.title} para={data.para} date={data.date} className="col-lg-4 col-md-4 col-sm-6 col-12" button={data.button} key={index}/>
                ))}
            </div>
        </div>
    </section>
        </>
    )
}

export default Blog
