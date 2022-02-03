import React from 'react'
import { Link, useHistory } from 'react-router-dom'

// import Img
import logo from '../../assets/img/logo.png'
import header from '../../assets/img/email/header.jpg'
import pro1 from '../../assets/img/email/pro-4.jpg'
import pro2 from '../../assets/img/email/pro-5.jpg'
import pro3 from '../../assets/img/email/pro-6.jpg'
import pro4 from '../../assets/img/email/pro-7.jpg'
import feature1 from '../../assets/img/email/feature1.jpg'
import feature2 from '../../assets/img/email/feature2.jpg'

// Icon Import
import facebook from '../../assets/img/email/facebook.png'
import youtube from '../../assets/img/email/youtube.png'
import twitter from '../../assets/img/email/twitter.png'
import gplus from '../../assets/img/email/gplus.png'
import linkedin from '../../assets/img/email/linkedin.png'
import pinterest from '../../assets/img/email/pinterest.png'

const EmailTemplateThree = () => {
    const history = useHistory();
    const routeChange = () => {
        history.goBack()
    };
    return (
        <>
            <div className="email_area_three">
            <div className="back_btn_emial">
                            <button className="theme-btn-one btn-black-overlay btn_sm" onClick={routeChange}>
                                <i className="fa fa-arrow-left mr-2"></i>Go Back
                            </button>
                        </div>
                <table align="center" border="0" cellPadding="0"
                    style={{ backgroundColor: "#fff", boxShadow: "0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353)" }}>
                    <tbody>
                        <tr>
                            <td>
                                <table align="center" border="0" cellPadding="0" width="100%">
                                    <tbody>
                                        <tr className="header">
                                            <td align="left" valign="top">
                                                <img src={logo} className="main-logo" alt="img" />
                                            </td>
                                            <td className="menu" align="right">
                                                <ul>
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/wishlist">Whishlist</Link></li>
                                                    <li><Link to="/cart">my cart</Link></li>
                                                    <li><Link to="/contact-one">Contact</Link></li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="slider" align="center" border="0" cellPadding="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <th align="center" width="40%">
                                                <img src={header} alt="img" style={{ marginBottom: "-5px" }} />
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td><h4 className="title" style={{ width: "100%", textAlign: "center", marginTop: "50px" }}>trending product</h4></td>
                        </tr>
                        <tr>
                            <td><p style={{ margin: "0" }}>GET EVEN 25% OFF DISCOUNT</p></td>
                        </tr>

                        <tr>
                            <td>
                                <table align="center" border="0" cellPadding="0" width="100%" style={{ marginTop: "30px" }}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="product-box hover">
                                                    <div className="product border-theme br-0">
                                                        <img src={pro1} alt="product" style={{ width: "100%" }} />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#!" >
                                                            <h6>When an unknown.</h6>
                                                        </a>
                                                        <h4>$45.00</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="product-box hover">
                                                    <div className="product border-theme br-0">
                                                        <img src={pro2} alt="product" style={{ width: "100%" }} />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#!" >
                                                            <h6>When an unknown.</h6>
                                                        </a>
                                                        <h4>$45.00</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="product-box hover">
                                                    <div className="product border-theme br-0">
                                                        <img src={pro3} alt="product" style={{ width: "100%" }} />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#!" >
                                                            <h6>When an unknown.</h6>
                                                        </a>
                                                        <h4>$45.00</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="product-box hover">
                                                    <div className="product border-theme br-0">
                                                        <img src={pro4} alt="product" style={{ width: "100%" }} />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#!" >
                                                            <h6>When an unknown.</h6>
                                                        </a>
                                                        <h4>$45.00</h4>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <table border="0" cellPadding="0" align="center" style={{ marginTop: "30px" }}>
                                    <tbody>
                                        <tr align="center" className="add-with-banner">
                                            <td>
                                                <a href="#!"><img src={feature1} alt="product"
                                                    style={{ width: "100%" }} /></a>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <table align="center" border="0" cellPadding="0" width="100%" style={{ marginTop: "30px" }}>

                                    <tbody>
                                        <tr>
                                            <th align="center" width="40%"><img src={feature2} alt="img"
                                                style={{ marginBottom: "-5px" }} />
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <table className="main-bg-light text-center" align="center" border="0" cellPadding="0" width="100%"
                                    style={{ marginTop: "30px" }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: "30px" }}>
                                                <div>
                                                    <h4 className="title" style={{ margin: "0" }}>Follow us</h4>
                                                </div>
                                                <table border="0" cellPadding="0" className="footer-social-icon text-center" align="center"
                                                    style={{ marginTop: "20px" }}>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <a href="#!"><img src={facebook} alt="img" /></a>
                                                            </td>
                                                            <td>
                                                                <a href="#!"><img src={youtube} alt="img" /></a>
                                                            </td>
                                                            <td>
                                                                <a href="#!"><img src={twitter} alt="img" /></a>
                                                            </td>
                                                            <td>
                                                                <a href="#!"><img src={gplus} alt="img" /></a>
                                                            </td>
                                                            <td>
                                                                <a href="#!"><img src={linkedin} alt="img" /></a>
                                                            </td>
                                                            <td>
                                                                <a href="#!"><img src={pinterest} alt="img" /></a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div style={{ borderTop: "1px solid #ddd", margin: "20px auto 0" }}></div>
                                                <table border="0" cellPadding="0" width="100%" style={{ margin: "20px auto 0" }}>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <a href="#!" style={{ fontSize: "13px" }}>Want to change how you receive these emails?</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p style={{ fontSize: "13px", margin: "0" }}>2021 Copy Right by Themeforest powerd by andit_themes</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a href="#!" style={{ fontSize: "13px", margin: "0", textDecoration: "underline" }}>Unsubscribe</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EmailTemplateThree
