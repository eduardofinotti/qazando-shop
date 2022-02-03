import React from 'react'
import { useHistory } from 'react-router-dom'
// import Img
import img from '../../assets/img/common/delivery_success.png'
import img1 from '../../assets/img/email/success.png'
import img2 from '../../assets/img/email/order-success.png'
import pro1 from '../../assets/img/email/pro-3.jpg'
import pro2 from '../../assets/img/email/pro-5.jpg'
import spoce from '../../assets/img/email/space.jpg'
// Icon Import
import facebook from '../../assets/img/email/facebook.png'
import youtube from '../../assets/img/email/youtube.png'
import twitter from '../../assets/img/email/twitter.png'
import gplus from '../../assets/img/email/gplus.png'
import linkedin from '../../assets/img/email/linkedin.png'
import pinterest from '../../assets/img/email/pinterest.png'

const OrderSuccess = () => {
    const history = useHistory();
    const routeChange = () => {
        history.goBack()
    };
    return (
        <>
            <div className="tables_area">
                <div className="back_btn_emial">
                    <button className="theme-btn-one btn-black-overlay btn_sm" onClick={routeChange}>
                        <i className="fa fa-arrow-left mr-2"></i>Go Back
                    </button>
                </div>
                <table align="center" border="0" cellPadding="0" cellSpacing="0" className="box_table"
                    style={{ padding: "0 30px", BackgroundColor: "#fff", BoxShadow:" 0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353)", width: "100%", display: "block" }}>
                    <tbody>
                        <tr>
                            <td>
                                <table align="center" border="0" cellPadding="0" cellSpacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={img} alt="img" style={{ marginBottom: "30px" }} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={img1} alt="img" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="title">thank you</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Payment Is Successfully Processsed And Your Order Is On The Way</p>
                                                <p>Transaction ID:267676GHERT105467</p>
                                            </td>
                                        </tr>
                                        <tr>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={img2} alt="img"
                                                    style={{ marginTop: "30px", marginBottom: "30px" }} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellPadding="0" cellSpacing="0" className="mt-4">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h2 className="title">YOUR ORDER DETAILS</h2>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="order-detail" border="0" cellPadding="0" cellSpacing="0" align="left">
                                    <tbody>
                                        <tr align="left">
                                            <th>PRODUCT</th>
                                            <th style={{ paddingLeft: " 15px" }}>DESCRIPTION</th>
                                            <th>QUANTITY</th>
                                            <th>PRICE</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={pro1} alt="img" width="70" />
                                            </td>
                                            <td valign="top" style={{ paddingLeft: "15px" }}>
                                                <h5 style={{ marginTop: "15px" }}>Three seater Wood Style sofa for Leavingroom </h5>
                                            </td>
                                            <td valign="top" style={{ paddingLeft: "15px" }}>
                                                <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px", marginBottom: " 0px" }}>Size :
                                                    <span> L</span> </h5>
                                                <h5 style={{ fontSize: "14px", color: "#444", marginTop: "10px" }}>QTY : <span>1</span></h5>
                                            </td>
                                            <td valign="top" style={{ paddingLeft: "15px" }}>
                                                <h5 style={{ fontSize: "14px", Color: "#444", marginTop: "15px" }}><b>$500</b></h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={pro2} alt="img" width="70" />
                                            </td>
                                            <td valign="top" style={{ paddingLeft: "15px" }}>
                                                <h5 style={{ marginTop: "15px" }}>Three seater Wood Style for Badroom </h5>
                                            </td>
                                            <td valign="top" style={{ paddingLeft: "15px" }}>
                                                <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px", marginBottom: "0px" }}>Size :
                                                    <span> XL</span> </h5>
                                                <h5 style={{ fontSize: "14px", color: "#444", marginTop: "10px" }}>QTY : <span>1</span></h5>
                                            </td>
                                            <td valign="top" style={{ paddingLeft: "15px" }}>
                                                <h5 style={{ fontSize: "14px", Color: "#444", marginTop: "15px" }}><b>$650</b></h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"
                                                style={{ lineHeight: "49px", fontSize: "13px", color: "#000000", paddingLeft: "20px", textAlign: "left", borderRight: " unset" }}>
                                                Products:</td>
                                            <td colSpan="3" className="price"
                                                style={{ lineHeight: "49px", textAlign: "right", paddingRight: "28px", fontSize: "13px", color: "#000000", TextAlign: "right", borderLeft: "unset" }}>
                                                <b>$1150</b></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"
                                                style={{ lineHeight: "49px", fontSize: "13px", color: "#000000", paddingLeft: "20px", textAlign: "left", borderRight: " unset" }}>
                                                Discount :</td>
                                            <td colSpan="3" className="price"
                                                style={{ lineHeight: "49px", textAlign: "right", paddingRight: "28px", fontSize: "13px", color: "#000000", TextAlign: "right", borderLeft: "unset" }}>
                                                <b>$10</b></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"
                                                style={{ lineHeight: "49px", fontFamily: " Arial", fontSize: "13px", color: "#000000", paddingLeft: "20px", textAlign: "left", borderRight: "unset" }}>
                                                Gift Wripping: </td>
                                            <td colSpan="3" className="price"
                                                style={{ lineHeight: "49px", textAlign: "right", paddingRight: "28px", fontSize: "13px", color: "#000000", TextAlign: "right", borderLeft: "unset" }}>
                                                <b>$1140</b></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" style={{ lineHeight: "49px", fontSize: "13px", color: "#000000", paddingLeft: "20px", textAlign: "left", borderRight: "unset" }}>Shipping :</td>
                                            <td colSpan="3" className="price"
                                                style={{ lineHeight: "49px", textAlign: "right", paddingRight: "28px", fontSize: "13px", color: "#000000", TtextAlign: "right", borderLeft: " unset" }}>
                                                <b>$30</b></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" style={{ lineHeight: "49px", fontSize: "13px", color: "#000000", paddingLeft: "20px", textAlign: "left", borderRight: "unset" }}>TOTAL PAID :</td>
                                            <td colSpan="3" className="price"
                                                style={{ lineHeight: "49px", textAlign: "right", paddingRight: "28px", fontSize: "13px", color: "#000000", TextAlign: "right", borderLeft: "unset" }}>
                                                <b>$1170</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table cellPadding="0" cellSpacing="0" border="0" align="left"
                                    style={{ width: "100%", marginTop: "30px", marginBottom: "30px" }}>
                                    <tbody>
                                        <tr>
                                            <td
                                                style={{ fontSize: "13px", fontWeight: "400", color: "#444444", letterSpacing: "0.2px", width: " 50%" }}>
                                                <h5
                                                    style={{ fontSize: "16px", fontWeight: "500", color: "#000", lineHeight: "16px", paddingBottom: "13px", borderBottom: "1px solid #e6e8eb", letterSpacing: "-0.65px", marginTop: "0", marginBottom: "13px" }}>
                                                    DILIVERY ADDRESS</h5>
                                                <p
                                                    style={{ textAlign: "left", fontWeight: "normal", fontSize: "14px", color: "#000000", lineHeight: "21px", marginTop: "0" }}>
                                                    268 Cambridge Lane New Albany,<br /> IN 47150268 Cambridge Lane <br />New Albany, IN
                                                    47150</p>
                                            </td>
                                            <td width="57" height="25" className="user-info"><img
                                                src={spoce} alt="img" height="25" width="57" /></td>
                                            <td className="user-info"
                                                style={{ fontSize: "13px", fontWeight: "400", color: "#444444", letterSpacing: "0.2px", width: "50%" }}>
                                                <h5
                                                    style={{ fontSize: "16px", fontWeight: "500", color: "#000", lineHeight: "16px", paddingBottom: "13px", borderBottom: "1px solid #e6e8eb", letterSpacing: "-0.65px", marginTop: "0", marginBottom: "13px" }}>
                                                    SHIPPING ADDRESS</h5>
                                                <p
                                                    style={{ textAlign: "left", fontWeight: "normal", fontSize: "14px", color: "#000000", lineHeight: "21px", marginTop: "0" }}>
                                                    268 Cambridge Lane New Albany,<br /> IN 47150268 Cambridge Lane <br />New Albany, IN
                                                    47150</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="main-bg-light text-center top-0" align="center" border="0" cellPadding="0" cellSpacing="0"
                    width="100%">
                    <tbody>
                        <tr>
                            <td style={{ padding: "30px" }}>
                                <div>
                                    <h4 className="title" style={{ margin: 0, textAlign: "center" }}>Follow us</h4>
                                </div>
                                <table border="0" cellPadding="0" cellSpacing="0" className="footer-social-icon text-center" align="center"
                                    style={{ marginTop: "20px" }}>
                                    <tbody><tr>
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
                                <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ margin: "20px auto 0" }}>
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
            </div>
        </>
    )
}

export default OrderSuccess
