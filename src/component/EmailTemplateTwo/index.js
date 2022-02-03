import React from 'react'
import { Link, useHistory } from 'react-router-dom'

// Import Img
import logo from '../../assets/img/logo.png'
import slider from '../../assets/img/email/e-2-slider.jpg'
import pro1 from '../../assets/img/email/p1.jpg'
import pro2 from '../../assets/img/email/p2.jpg'
import banner1 from '../../assets/img/email/banner.jpg'
import banner2 from '../../assets/img/email/banner-2.jpg'
import ps1 from '../../assets/img/email/ps1.jpg'
import ps2 from '../../assets/img/email/ps2.jpg'
import ps3 from '../../assets/img/email/ps3.jpg'

// Icon Import
import facebook from '../../assets/img/email/facebook.png'
import youtube from '../../assets/img/email/youtube.png'
import twitter from '../../assets/img/email/twitter.png'
import gplus from '../../assets/img/email/gplus.png'
import linkedin from '../../assets/img/email/linkedin.png'
import pinterest from '../../assets/img/email/pinterest.png'

const EmailTemplateTWo = () => {
    const history = useHistory();
    const routeChange = () => {
        history.goBack()
    };
    return (
        <>
            <div className="email_two_area">
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
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="slider" align="center" border="0" cellPadding="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <th align="center" width="40%">
                                                <Link to="/shop">
                                                    <img src={slider} alt="img" style={{ marginBottom: "-5px" }} />
                                                </Link>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                                <h4 className="title" style={{ width: " 100%", textAlign: "center", marginTop: "50px" }}>trending product</h4>
                                <p style={{ margin: "0" }}>GET EVEN 25% OFF DISCOUNT</p>
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

                                        </tr>
                                    </tbody>
                                </table>

                                <table border="0" cellPadding="0" align="center" style={{ marginTop: "30px" }}>
                                    <tbody>
                                        <tr align="center" className="add-with-banner">
                                            <td>
                                                <a href="#!"><img src={banner1} alt="product" style={{ width: "100%" }} /></a>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                                <table border="0" cellPadding="0" align="center" style={{ marginTop: "30px" }}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={banner2} alt="img" style={{ width: "100%" }} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table align="center" border="0" cellPadding="0" width="100%" style={{ marginTop: "30px" }}>
                                    <tbody>
                                        <tr>
                                            <td align="center">
                                                <table align="center" border="0" className="display-width-inner" cellPadding="0"
                                                    width="100%" style={{ maxWidth: "450px" }}>
                                                    <tbody>
                                                        <tr>
                                                            <td align="center" style={{ width: "38%" }}>
                                                                <img src={ps1} alt="img"
                                                                    style={{ width: " 231px" }} />
                                                            </td>
                                                            <td align="center" style={{ backgroundColor: "#fafafa", width: "35%" }}>
                                                                <h3 style={{ margin: "0" }}>Product Two</h3>
                                                                <div
                                                                    style={{ color: "#E01931", fontWeight: "600", fontSize: "16px", lineHeight: "27px", letterSpacing: "1px", margin: "4px" }}>
                                                                    <span
                                                                        style={{ color: "#666666", fontWeight: "600", fontSize: "15px", lineHeight: "25px", letterSpacing: "1px" }}
                                                                        className="txt-price1" data-color="Price1" data-size="Price1" data-min="10"
                                                                        data-max="35"><strike>$25.00</strike></span><span
                                                                            className="txt-price2">&nbsp;&nbsp;&nbsp;</span>$20.90
                                                                </div>
                                                                <div
                                                                    style={{ padding: "15px 0px", textTransform: "uppercase", fontSize: "11px", letterSpacing: "1px" }}>
                                                                    <a href="#!"
                                                                        style={{ color: "#ffffff", textDecoration: "none", background: "#000", padding: "8px 12px" }}>SHOP
                                                                        NOW</a>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                                <table align="center" border="0" className="display-width-inner" cellPadding="0"
                                                    width="100%" style={{ maxWidth: "450px" }}>
                                                    <tbody>
                                                        <tr>
                                                            <td align="center" style={{ backgroundColor: " #fafafa", width: "43%" }}>
                                                                <h3 style={{ margin: "0" }}>Product One</h3>
                                                                <div
                                                                    style={{ color: "#E01931", fontWeight: "600", fontSize: "16px", lineHeight: "27px", letterSpacing: "1px", margin: "4px" }}>
                                                                    <span
                                                                        style={{ color: "#666666", fontWeight: "600", fontSize: "15px", lineHeight: "25px", letterSpacing: "1px" }}
                                                                        className="txt-price1" data-color="Price1" data-size="Price1" data-min="10"
                                                                        data-max="35"><strike>$25.00</strike></span><span
                                                                            className="txt-price2">&nbsp;&nbsp;&nbsp;</span>$20.90
                                                                </div>
                                                                <div
                                                                    style={{ padding: "15px 0px", textTransform: "uppercase", fontSize: "11px", letterSpacing: "1px" }}>
                                                                    <a href="#!"
                                                                        style={{ color: "#ffffff", textDecoration: "none", background: "#000", padding: " 8px 12px" }}>SHOP
                                                                        NOW</a>
                                                                </div>
                                                            </td>
                                                            <td align="center" style={{ width: "40%" }}>
                                                                <img src={ps2} alt="img" style={{ width: "100%", marginBottom: "-4px" }} />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table align="center" border="0" className="display-width-inner" cellPadding="0"
                                                    width="100%" style={{ maxWidth: "450px" }}>
                                                    <tbody>
                                                        <tr>
                                                            <td align="center" style={{ width: "40%" }}>
                                                                <img src={ps3} alt="img"
                                                                    style={{ width: "225px", marginBottom: "-4px" }} />
                                                            </td>
                                                            <td align="center" style={{ backgroundColor: "#fafafa", width: "35%" }}>
                                                                <h3 style={{ margin: "0" }}>Product Three</h3>
                                                                <div
                                                                    style={{ color: "#E01931", fontWeight: "600", fontSize: "16px", lineHeight: "27px", letterSpacing: "1px", margin: "4px" }}>
                                                                    <span
                                                                        style={{ color: "#666666", fontWeight: "600", fontSize: "15px", lineHeight: "25px", letterSpacing: "1px" }}
                                                                        className="txt-price1" data-color="Price1" data-size="Price1" data-min="10"
                                                                        data-max="35"><strike>$25.00</strike></span><span
                                                                            className="txt-price2">&nbsp;&nbsp;&nbsp;</span>$20.90
                                                                </div>
                                                                <div
                                                                    style={{ padding: "15px 0px", textTransform: "uppercase", fontSize: "11px", letterSpacing: "1px" }}>
                                                                    <a href="#!"
                                                                        style={{ color: "#ffffff", textDecoration: "none", background: "#000", padding: "8px 12px" }}>SHOP
                                                                        NOW</a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
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

export default EmailTemplateTWo