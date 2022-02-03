import React from 'react'
import { useHistory } from 'react-router-dom'
// import img
import bg1 from '../../assets/img/invoice/bg3.jpg'
import logo from '../../assets/img/logo.png'
import shap from '../../assets/img/invoice/shape.png'



const InvoiceTwos = () => {
    const history = useHistory();
    const routeChange = () => {
        history.goBack()
      };
    return (
        <>
            <section className="theme-invoice-4 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-xl-9 m-auto">
                <div className="back_btn_emial">
                            <button className="theme-btn-one btn-black-overlay btn_sm" onClick={routeChange}>
                                <i className="fa fa-arrow-left mr-2"></i>Go Back
                            </button>
                        </div>
                    <div className="invoice-wrapper">
                        <div className="invoice-header">
                            <img src={bg1} className="background-invoice" alt="logo" />
                            <img src={logo} className="img-fluid" alt="logo" />
                        </div>
                        <div className="invoice-body">
                            <div className="top-sec">
                                <div className="row">
                                    <div className="col-xxl-8 col-md-7">
                                        <div className="address-detail">
                                            <div className="mt-2">
                                                <h4 className="mb-2">
                                                    2664 Tail Ends Road,
                                                </h4>
                                                <h4 className="mb-2"> ORADELL, New Jersey</h4>
                                                <h4 className="mb-0">NJ, 07649</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-md-5">
                                        <ul className="date-detail">
                                            <li><span>issue date :</span>
                                                <h4> 20 march, 2020</h4>
                                            </li>
                                            <li><span>invoice no :</span>
                                                <h4> 908452</h4>
                                            </li>
                                            <li><span>email :</span>
                                                <h4> user@gmail.com</h4>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="title-sec">
                                <h2 className="title">invoice</h2>
                                <div className="row">
                                    <div className="col-6">
                                        <button className="theme-btn-one btn-black-overlay btn_sm">export as PDF</button>
                                    </div>
                                    <div className="col-6 text-right">
                                        <button className="theme-btn-one btn-black-overlay btn_sm">print</button>
                                    </div>
                                </div>
                            </div>
                            <div className="table-sec">
                            <div className="table-responsive">
                                <table className="table table-borderless table-striped mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">description</th>
                                            <th scope="col">price</th>
                                            <th scope="col">hrs.</th>
                                            <th scope="col">total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Logo Designing</td>
                                            <td>$50</td>
                                            <td>2</td>
                                            <td>$100</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>website & banner design</td>
                                            <td>$30</td>
                                            <td>3</td>
                                            <td>$90</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>frontend development</td>
                                            <td>$95</td>
                                            <td>1</td>
                                            <td>$95</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>backend development</td>
                                            <td>$95</td>
                                            <td>1</td>
                                            <td>$95</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                                <div className="text-right">
                                    <div className="table-footer">
                                        <span>Grand Total:</span>
                                        <span>$1933.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="invoice-footer">
                            <img src={shap} className="img-fluid design-shape" alt="img" />
                            <ul>
                                <li>
                                    <i className="fa fa-map"></i>
                                    <div>
                                        <h4>Andshop demo store</h4>
                                        <h4>USA, 362351</h4>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-phone"></i>
                                    <div>
                                        <h4>+1-202-555-0144</h4>
                                        <h4>+1-202-555-0117</h4>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa fa-envelope"></i>
                                    <div>
                                        <h4>support@Andshop.com</h4>
                                        <h4>demo@Andshop.com</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

export default InvoiceTwos
