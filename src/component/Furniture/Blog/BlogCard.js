import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard = (props) => {
    return (
        <>
            <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="blog_post_wrapper">
                        <div className="blog_post_img">
                          <Link to="/blog-single-one">
                              <img src={props.img} alt="img" />
                          </Link>
                          <div className="blog_post_date">
                              <i className="far fa-calendar-alt"></i>
                              <span>{props.date}</span>
                          </div>
                        </div>
                        <div className="right_block">
                            <div className="right_side_content">
                              <h5>{props.heading}</h5>
                              <p>{props.para}</p>
                              <Link to="/blog-single-one">{props.button}</Link>
                            </div>
                        </div>
                      </div>
                </div>
        </>
    )
}

export default BlogCard
