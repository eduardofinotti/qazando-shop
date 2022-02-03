import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Swal from 'sweetalert2';

const TopLogin = () => {
    let dispatch = useDispatch();

    let status = useSelector((state) => state.user.status);
    let user = useSelector((state) => state.user.user);

    // Login
    const login = () => {
        if (status) {
            Swal.fire({
                icon: 'question',
                title: 'Mr. ' + user.name,
                html: 'You are already loged in <br />'
            })
        } else {
            dispatch({ type: "user/login" })
            let name = user.name || 'Customer'
            console.log(typeof (user.name));
            Swal.fire({
                icon: 'success',
                title: 'Login Sucessfull',
                text: 'Welcome ' + name
            })
        }

    }
    return (
        <>
            <div className="col-12">
                <div className="user-actions accordion">
                    <h3>
                        <i className="fa fa-file mr-2"></i>
                        Returning customer?
                        <a className="Returning  ml-2" href="#!" data-toggle="collapse" data-target="#checkout_login"
                            aria-expanded="true">Click here to login</a>
                    </h3>
                    <div id="checkout_login" className="collapse" data-parent="#checkout_login">
                        <div className="checkout_info">
                            <p>If you have shopped with us before, please enter your details in the boxes below. If
                                you are a new customer please proceed to the Billing &amp; Shipping section.</p>
                            <form onSubmit={(e) => { e.preventDefault(); login() }}>
                                <div className="form_group default-form-box">
                                    <label>Username or email <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form_group default-form-box">
                                    <label>Password <span className="text-danger">*</span></label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="form_group group_3 default-form-box">
                                    <button className="theme-btn-one btn-black-overlay btn_md"
                                        type="submit">Login</button>
                                    <label className="checkbox-default">
                                        <input type="checkbox" />
                                        <span>Remember me</span>
                                    </label>
                                </div>
                                <a href="#!">Lost your password?</a>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="user-actions accordion">
                    <h3>
                        <i className="fa fa-file mr-2"></i>
                        Enter your voucher code
                        <a className="Returning ml-2" href="#!" data-toggle="collapse" data-target="#checkout_coupon"
                            aria-expanded="true">Click here to enter your code</a>
                    </h3>
                    <div id="checkout_coupon" className="collapse checkout_coupon" data-parent="#checkout_coupon">
                        <div className="checkout_info">
                            <form onSubmit={(e) => { e.preventDefault(); Swal.fire('Error!!', 'Invalid Cuppon Code', 'error') }}>
                                <input className="mb-2" placeholder="Coupon code" type="text" required />
                                <button type="submit" className="theme-btn-one btn-black-overlay btn_sm">Apply coupon</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopLogin