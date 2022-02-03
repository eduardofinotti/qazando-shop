import React from 'react'
import { Link } from 'react-router-dom'

// import Img
import car from '../../../assets/img/electronics/icon/car.png'
import world from '../../../assets/img/electronics/icon/world.png'
import lock from '../../../assets/img/electronics/icon/lock.png'
import phone from '../../../assets/img/electronics/icon/phone.png'
import offer1 from '../../../assets/img/electronics/common/offer1.png'
import offer2 from '../../../assets/img/electronics/common/offer2.png'
import offer3 from '../../../assets/img/electronics/common/offer3.png'

const FeatureData = [
    {
        img: car,
        heading: "Free Shipping",
        para: "On all orders over $75.00"
    },
    {
        img: world,
        heading: "Free Returns",
        para: "Returns are free within 9 days"
    },
    {
        img: lock,
        heading: "100% Payment Secure",
        para: "Your payment are safe with us."
    },
    {
        img: phone,
        heading: "Support 24/7",
        para: "Contact us 24 hours a day"
    },

]

const BannerBootom = () => {
    return (
        <>
            <section id="electronics_banner_bottom" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="el_banner_bottom el-ban-bottom-left">
                                <Link to="/shop">
                                    <img src={offer1} alt="img" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="el_banner_bottom">
                                <Link to="/shop">
                                    <img src={offer2} alt="img" />
                                </Link>
                            </div>
                            <div className="el_banner_bottom">
                                <Link to="/shop">
                                    <img src={offer3} alt="img" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="el_feature_wrappers">
                        <div className="row">
                            {FeatureData.map((data, index) => (
                                <div className="col-sm-6 col-md-6 col-lg-3 col-12" key={index}>
                                    <div className="el_feature_box">
                                        <img src={data.img} alt="img" />
                                        <div className="el_feature_text">
                                            <h3>{data.heading}</h3>
                                            <p>{data.para}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default BannerBootom