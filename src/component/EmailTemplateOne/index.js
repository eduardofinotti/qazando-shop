import React from 'react'
import { Link, useHistory } from 'react-router-dom'
// Import Img
import logo from '../../assets/img/logo.png'
import img1 from '../../assets/img/email/1.jpg'
import pro1 from '../../assets/img/email/pro-1.jpg'
import pro2 from '../../assets/img/email/pro-2.jpg'
import pro3 from '../../assets/img/email/pro-3.jpg'
import cosmetic from '../../assets/img/email/cosmetic.jpg'
import img2 from '../../assets/img/email/6.jpg'
import img3 from '../../assets/img/email/5.jpg'
// Icon Import
import facebook from '../../assets/img/email/facebook.png'
import youtube from '../../assets/img/email/youtube.png'
import twitter from '../../assets/img/email/twitter.png'
import gplus from '../../assets/img/email/gplus.png'
import linkedin from '../../assets/img/email/linkedin.png'
import pinterest from '../../assets/img/email/pinterest.png'

const EmailTemplateOne = () => {
    const history = useHistory();
    const routeChange = () => {
        history.goBack()
    };
    return (
        <>
            <div className="email_template_one">
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
                                                    <li style={{ display: "inlineBlock", textDecoration: "unset" }}><Link to="/"
                                                        style={{ textTransform: "capitalize", color: "#444", fontSize: "16px", marginRight: "15px", textDecoration: "none" }}> Home</Link>
                                                    </li>
                                                    <li style={{ display: "inlineBlock", textDecoration: "unset" }}><Link to="/wishlist"
                                                        style={{ textTransform: "capitalize", color: "#444", fontSize: "16px", marginRight: "15px", textDecoration: "none" }}> Whishlist</Link>
                                                    </li>
                                                    <li style={{ display: "inlineBlock", textDecoration: "unset" }}><Link to="/cart"
                                                        style={{ textTransform: "capitalize", color: "#444", fontSize: "16px", marginRight: "15px", textDecoration: "none" }}>my
                                                        cart</Link></li>
                                                    <li style={{ display: "inlineBlock", textDecoration: "unset" }}><Link to="/contact-one"
                                                        style={{ textTransform: "capitalize", color: "#444", fontSize: "16px", marginRight: "15px", textDecoration: "none" }}>Contact</Link>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellPadding="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td><img src={img1} alt="img" style={{ width: "100%" }} /></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h4 className="title" style={{ textAlign: "center" }}>Additional 50% Off</h4>
                                <h5 style={{ textAlign: "center" }}>On clothes for kids,women & Mens Wear</h5>
                                <table align="center" border="0" cellPadding="0" width="100%"
                                    style={{ marginTop: "30px" }}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="product-box hover">
                                                    <div className="product border-theme br-0">
                                                        <img src={pro1} alt="product"
                                                            style={{ width: "170px" }} />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#!" style={{ textAlign: "center" }}>
                                                            <h6 style={{ textAlign: "center" }}>When an unknown.</h6>
                                                        </a>
                                                        <h4 style={{ textAlign: "center" }}>$45.00</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="product-box hover">
                                                    <div className="product border-theme br-0">
                                                        <img src={pro2} alt="product"
                                                            style={{ width: "170px" }} />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#!" style={{ textAlign: "center" }}>
                                                            <h6 style={{ textAlign: "center" }}>When an unknown.</h6>
                                                        </a>
                                                        <h4 style={{ textAlign: "center" }}>$45.00</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="product-box hover">
                                                    <div className="product border-theme br-0">
                                                        <img src={pro3} alt="product"
                                                            style={{ width: "170px" }} />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="#!" style={{ textAlign: "center" }}>
                                                            <h6 style={{ textAlign: "center" }}>When an unknown.</h6>
                                                        </a>
                                                        <h4 style={{ textAlign: "center" }}>$45.00</h4>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="main-bg-light" border="0" cellPadding="0" width="100%"
                                    style={{ marginTop: "40px" }}>
                                </table>
                                <table border="0" cellPadding="0" width="100%">
                                    <tbody>
                                        <tr align="center">
                                            <td>
                                                <a href="#!"><img src={cosmetic} style={{ width: "100%" }} alt="img" /></a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                <table border="0" cellPadding="0" width="100%" style={{ marginTop: "30px" }}>
                                    <tbody>
                                        <tr align="center" className="add-with-banner">
                                            <td>
                                                <a href="#!"><img src={img2} style={{ width: "100%" }} alt="img" /></a>
                                            </td>
                                            <td>
                                                <a href="#!"><img src={img3} style={{ width: "100%" }} alt="img" /></a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                <table className="main-bg-light text-center" align="center" border="0" cellPadding="0"
                                    width="100%" style={{ marginTop: "30px" }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: "30px" }}>
                                                <div>
                                                    <h4 className="title" style={{ margin: "0", textAlign: "center" }}>Follow us</h4>
                                                </div>
                                                <table border="0" cellPadding="0" className="footer-social-icon text-center"
                                                    align="center" style={{ marginTop: "20px" }}>
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

export default EmailTemplateOne