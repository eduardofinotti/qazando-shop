import React from 'react'
import TopLogin from './TopLogin'
import YourOrder from './YourOrder'
const CheckOutTwo = () => {
    return (
        <>
            <section id="checkout_two" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <TopLogin />
                        <div className="col-lg-12">
                            <div className="checkout_area_two">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="checkout_form_area">
                                            <h3>Billing Details</h3>
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="default-form-box">
                                                            <label >First Name <span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="default-form-box">
                                                            <label>Last Name <span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="default-form-box">
                                                            <label>Company Name<span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="default-form-box">
                                                            <label htmlFor="country">country<span className="text-danger">*</span></label>
                                                            <select className="country_option nice-select wide form-control"
                                                                name="country" id="country">
                                                                <option defaultValue="2">Bangladesh</option>
                                                                <option defaultValue="3">Algeria</option>
                                                                <option defaultValue="4">Afghanistan</option>
                                                                <option defaultValue="5">Ghana</option>
                                                                <option defaultValue="6">Albania</option>
                                                                <option defaultValue="7">Bahrain</option>
                                                                <option defaultValue="8">Colombia</option>
                                                                <option defaultValue="9">Dominican Republic</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="default-form-box">
                                                            <label>Street address<span className="text-danger">*</span></label>
                                                            <input placeholder="House number and street name" type="text"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="default-form-box">
                                                            <input placeholder="Apartment, suite, unit etc. (optional)"
                                                                type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="default-form-box">
                                                            <label>Town / City<span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="default-form-box">
                                                            <label>State / County<span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="default-form-box">
                                                            <label>Phone <span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="default-form-box">
                                                            <label> Email Address<span className="text-danger">*</span></label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="order-notes">
                                                            <label htmlFor="order_note">Order Notes<span className="text-danger">*</span></label>
                                                            <textarea id="order_note"
                                                                placeholder="Notes about your order, e.g. special notes for delivery."
                                                                className="form-control" rows="5"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <YourOrder />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CheckOutTwo