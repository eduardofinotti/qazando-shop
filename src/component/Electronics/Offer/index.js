import React from 'react'
// import Img
import img from '../../../assets/img/electronics/common/promotion.png'

// Offer Data
const OfferData = [
    {
        icon: "fa fa-bluetooth-b",
        para: "Bluetooth Enabled device"
    },
    {
        icon: "fa fa-wifi",
        para: "Wireless Connections"
    },
    {
        icon: "fa fa-battery-half",
        para: "Rechargeable Battery"
    },
    {
        icon: "fa fa-volume-up",
        para: "Surround Sound System"
    }
]

const Offer = () => {
    return (
        <>
            <section id="promotion_banner" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="elec_promo_text">
                                <h2>DOLBY ATMOS <br /> SOUND FEATURE</h2>
                                <p>Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                <div className="elec_promo_icon">
                                    {OfferData.map((data, index) => (
                                        <div className="icon_promo_item" key={index}>
                                            <i className={data.icon}></i>
                                            <p>{data.para}</p>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="promotion_img">
                                <img src={img} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Offer