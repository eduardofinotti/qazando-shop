import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom"
import * as EmailValidator from 'email-validator';

const RegisterArea = () => {
    let dispatch = useDispatch();
    const history = useHistory()
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const [userError, setuserError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passError, setPassError] = useState(false)

    let status = useSelector((state) => state.user.status);
    let userData = useSelector((state) => state.user.user);

    // Add to cart
    function register() {

        console.log('email: ' + email)
        console.log('user: ' + user)
        console.log('pass: ' + pass)

        if (!EmailValidator.validate(email)) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
        if (user == '') {
            setuserError(true)
        } else {
            setuserError(false)
        }
        if (pass == '') {
            setPassError(true)
        } else {
            setPassError(false)
        }

        if (!emailError || !userError || !passError) {
            if (status) {
                Swal.fire({
                    icon: 'question',
                    title: 'Mr. ' + userData.name,
                    html:
                        'You are already Registered <br />' +
                        'You can go to <b>' +
                        'Dashboard</b> ' +
                        'or our <b>Shop</b> page',
                }).then((result) => {
                    if (result.isConfirmed) {
                        userData.
                            history.push('/my-account')
                    } else {
                        // not clicked
                    }
                });
            } else {
                dispatch({ type: "user/register", payload: { user, email, pass } })

                Swal.fire({
                    icon: 'success',
                    title: 'Registration Sucessfull',
                    text: 'Welcome Mr.' + user
                })
                history.push("/my-account");
            }
        }
    }
    return (
        <>
            <section id="login_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="account_form">
                                <h3>Register</h3>
                                <form method="post">
                                    <div className="default-form-box">
                                        <label>Username<span className="text-danger">*</span></label>
                                        <input id='user' type="text" className="form-control" value={user} onChange={(txt) => setUser(txt.target.value)} />
                                        {userError &&
                                            < span className='errorLabel' id='errorMessageFirstName'>O campo Additional Notes deve ser prenchido</span>
                                        }
                                    </div>
                                    <div className="default-form-box">
                                        <label>Email<span className="text-danger">*</span></label>
                                        <input id='email' type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="default-form-box">
                                        <label>Passwords<span className="text-danger">*</span></label>
                                        <input id='password' type="password" className="form-control" value={pass}
                                            onChange={(e) => { setPass(e.target.value) }} minLength="8" />
                                    </div>
                                </form>

                                <button id='btnRegister' className="theme-btn-one btn-black-overlay btn_md" onClick={register}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegisterArea
