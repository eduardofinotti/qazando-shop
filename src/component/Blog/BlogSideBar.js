import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"

// import img
import insta1 from '../../assets/img/instagram/1.png'
import insta2 from '../../assets/img/instagram/2.png'
import insta3 from '../../assets/img/instagram/3.png'
import insta4 from '../../assets/img/instagram/4.png'
import insta5 from '../../assets/img/instagram/5.png'
import insta6 from '../../assets/img/instagram/6.png'
import insta7 from '../../assets/img/instagram/7.png'
import insta8 from '../../assets/img/instagram/8.png'
import insta9 from '../../assets/img/instagram/9.png'
import insta10 from '../../assets/img/instagram/10.png'
import insta11 from '../../assets/img/instagram/2.png'
import insta12 from '../../assets/img/instagram/3.png'

// import post img
import post1 from '../../assets/img/blog/post1.png'
import post2 from '../../assets/img/blog/post2.png'
import post3 from '../../assets/img/blog/post3.png'

const InstagramData = [
  {
    img: insta1
  },
  {
    img: insta2
  },
  {
    img: insta3
  },
  {
    img: insta4
  },
  {
    img: insta5
  },
  {
    img: insta6
  },
  {
    img: insta7
  },
  {
    img: insta8
  },
  {
    img: insta9
  },
  {
    img: insta10
  },
  {
    img: insta11
  },
  {
    img: insta12
  },
]

const RecentPost = [
  {
    postImg: post1,
    title: "Informed donor is very effective",
    date: "APRIL 26, 2021"
  },
  {
    postImg: post2,
    title: "A quick tutorial for using",
    date: "APRIL 25, 2021"
  },
  {
    postImg: post3,
    title: "Informed donor is very effective",
    date: "APRIL 1, 2021"
  }
]

const BlogSideBar = () => {
  const history = useHistory()
  return (
    <>
      <div className="col-lg-3">
        <div className="left-sidebar shop-sidebar-wrap">
          <div className="sidebar-widget">
            <h3 className="sidebar-title mt-0">Search</h3>
            <div className="search-widget">
              <form onSubmit={(e) => { e.preventDefault(); history.push("/blog-list-view"); }}>
                <div className="input-group">
                  <input className="form-control" placeholder="Search entire store here ..." type="text" required />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="sidebar-widget mt-40px">
            <h3 className="sidebar-title">Categories</h3>
            <div className="category-post">
              <ul>
                <li>
                  <a href="#!" className="selected">All <span>(4)</span> </a>
                </li>
                <li>
                  <a href="#!">Accesssories <span>(3)</span> </a>
                </li>
                <li>
                  <a href="#!">Box <span>(5)</span> </a>
                </li>
                <li>
                  <a href="#!">chair <span>(2)</span> </a>
                </li>
                <li>
                  <a href="#!">Deco <span>(6)</span> </a>
                </li>
                <li>
                  <a href="#!">Furniture <span>(4)</span> </a>
                </li>
                <li>
                  <a href="#!">Glass <span>(1)</span> </a>
                </li>
                <li>
                  <a href="#!">Sofa <span>(3)</span> </a>
                </li>
                <li>
                  <a href="#!">Table <span>(4)</span> </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-widget mt-40px">
            <h3 className="sidebar-title">Recent Post</h3>
            <div className="recent-post-widget">
              {RecentPost.map((data, index) => (
                <div className="recent-single-post d-flex" key={index}>
                  <div className="thumb-side img-zoom-hover">
                    <Link to="/blog-single-two"><img src={data.postImg} alt="img" /></Link>
                  </div>
                  <div className="media-side">
                    <h5>
                      <Link to="/blog-single-two">{data.title}</Link>
                    </h5>
                    <span className="date">{data.date}</span>
                  </div>
                </div>
              ))}


            </div>
          </div>
          <div className="sidebar-widget mt-40px">
            <h3 className="sidebar-title">Tags</h3>
            <div className="sidebar-widget-tag d-inline-block">
              <ul>
                <li><a href="#!">Food</a></li>
                <li><a href="#!">Hungry</a></li>
                <li><a href="#!">Water</a></li>
                <li><a href="#!">Shool</a></li>
                <li><a href="#!">Kids</a></li>
                <li><a href="#!">Children</a></li>
                <li><a href="#!">selter</a></li>
              </ul>
            </div>
          </div>
          <div className="sidebar-widget mt-40px">
            <h3 className="sidebar-title">Instagram Widget</h3>
            <div className="flicker-widget">
              <ul>
                {InstagramData.map((data, index) => (
                  <li className="img-zoom-hover" key={index}>
                    <a className="image-link" href=""><img
                      src={data.img} alt="instagram" /></a>
                  </li>
                ))}


              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default BlogSideBar
