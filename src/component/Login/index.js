import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom"

const LoginArea = () => {
    let dispatch = useDispatch();
    const history = useHistory()

    let status = useSelector((state) => state.user.status);
    let user = useSelector((state) => state.user.user);

    var [name, setName] = useState('')

    // Login
    const login = () => {
        if (status) {
            Swal.fire({
                icon: 'question',
                title: 'Mr. ' + user.name,
                html:
                    'You are already loged in <br />' +
                    'You can go to <b>' +
                    'Dashboard</b> ' +
                    'or our <b>Shop</b> page',
            }).then((result) => {
                if (result.isConfirmed) {
                    history.push('/my-account')
                } else {
                    // not clicked
                }
            });
        } else {
            dispatch({ type: "user/login", payload: { name } })
            // let name = user.name || 'Customer'
            console.log(typeof (user.name));
            Swal.fire({
                icon: 'success',
                title: 'Login Sucessfull',
                text: 'Welcome ' + name
            })
            history.push("/my-account");
        }
    }

    return (
        <>
            <section id="login_area" className="ptb-100" style={{ height: '70vh' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="account_form">
                                <h3>Login</h3>
                                <form onSubmit={(e) => { e.preventDefault(); login() }}>
                                    <div className="default-form-box">
                                        <label>Username or email<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id='user' required defaultValue="" onChange={(txt) => setName(txt.target.value)} />
                                    </div>
                                    <div className="default-form-box">
                                        <label>Passwords<span className="text-danger">*</span></label>
                                        <input type="password" className="form-control" id='password' required defaultValue="" minLength="8" />
                                    </div>
                                    <div className="login_submit">
                                        <button className="theme-btn-one btn-black-overlay btn_md" id='btnLogin' type="submit">login</button>
                                    </div>
                                    <div className="remember_area">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="materialUnchecked" />
                                            <label className="form-check-label" htmlFor="materialUnchecked">Remember me</label>
                                        </div>
                                    </div>
                                    <Link to="/register" id='createAccount' className="active">Create Your Account?</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginArea
