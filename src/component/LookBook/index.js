import React from 'react'
import { Link } from 'react-router-dom'
// import Img
import img1 from '../../assets/img/common/lookbook.jpg'
import img2 from '../../assets/img/product-image/product23.png'
import img3 from '../../assets/img/product-image/product22.png'
import img4 from '../../assets/img/common/lookbook2.jpg'
import img5 from '../../assets/img/product-image/product24.png'
import img6 from '../../assets/img/product-image/product25.png'
import img7 from '../../assets/img/product-image/product21.png'

const LookBook = () => {
    return (
        <>
        <section id="lookbook_area" className="lookbook pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="lookbook-block">
                <div className="img-width">
                    <img src={img1} className="img-fluid bg-img" alt="img" />
                </div>
                <div className="lookbook-dot"><span>1</span>
                    <Link to="/product-details-one/8">
                        <div className="dot-showbox">
                            <img src={img7} className="img-fluid blur-up lazyload" alt="img" />
                            <div className="dot-info">
                                <h5 className="title">Blazer</h5>
                                <h5>200$</h5>
                                <h6>details</h6>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="lookbook-dot dot2"><span>2</span>
                <Link to="/product-details-one/5">
                        <div className="dot-showbox"><img src={img2}
                                className="img-fluid blur-up lazyload " alt="img" />
                            <div className="dot-info">
                                <h5 className="title">Jeans</h5>
                                <h5>520$</h5>
                                <h6>details</h6>
                            </div>
                        </div>
                        </Link>
                </div>
                <div className="lookbook-dot dot5"><span>3</span>
                    <Link to="/product-details-one/1">
                        <div className="dot-showbox"><img src={img3}
                                className="img-fluid blur-up lazyload " alt="img" />
                            <div className="dot-info">
                                <h5 className="title">Sun glass</h5>
                                <h5>130$</h5>
                                <h6>details</h6>
                            </div>
                        </div>
                        </Link>
                </div>
            </div>
            </div>
            <div className="col-lg-6">
              <div className="lookbook-block">
                <div className="img-width">
                    <img src={img4} className="img-fluid bg-img" alt="img" />
                </div>
                <div className="lookbook-dot dot3"><span>1</span>
                <Link to="/product-details-one/2">
                        <div className="dot-showbox"><img src={img5}
                                className="img-fluid blur-up lazyload" alt="img" />
                            <div className="dot-info">
                                <h5 className="title">Jacket</h5>
                                <h5>100$</h5>
                                <h6>details</h6>
                            </div>
                        </div>
                        </Link>
                </div>
                <div className="lookbook-dot dot4"><span>2</span>
                <Link to="/product-details-one/3">
                        <div className="dot-showbox"><img src={img6}
                                className="img-fluid blur-up lazyload " alt="img" />
                            <div className="dot-info">
                                <h5 className="title">Inner</h5>
                                <h5>400$</h5>
                                <h6>details</h6>
                            </div>
                        </div>
                        </Link>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default LookBook
