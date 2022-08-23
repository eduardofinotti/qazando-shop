import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom"
import validateEmail from 'email-validator';

const LoginArea = () => {
    let dispatch = useDispatch();
    const history = useHistory()

    let status = useSelector((state) => state.user.status);
    let user = useSelector((state) => state.user.user);
    
    const [userError, setUserError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    var [name, setName] = useState('')
    var [password, setPassword] = useState('')

    // // Login
    // const login = () => {
    //     if (status) {
    //         Swal.fire({
    //             icon: 'question',
    //             title: 'Mr. ' + user.name,
    //             html:
    //                 'You are already loged in <br />' +
    //                 'You can go to <b>' +
    //                 'Dashboard</b> ' +
    //                 'or our <b>Shop</b> page',
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 history.push('/my-account')
    //             } else {
    //                 // not clicked
    //             }
    //         });
    //     } else {
    //         dispatch({ type: "user/login", payload: { name } })
    //         // let name = user.name || 'Customer'
    //         console.log(typeof (user.name));
    //         Swal.fire({
    //             icon: 'success',
    //             title: 'Login Sucessfull',
    //             text: 'Welcome ' + name
    //         })
    //         history.push("/my-account");
    //     }
    // }

        // Login
        function login() {

            if (!validateEmail.validate(name) || name == '') {
                setUserError(true)
                return
            } else {
                setUserError(false)
            }

            if (password.length < 6 || password == '') {
                setPasswordError(true)
                return
            } else {
                setPasswordError(false)
            }

            dispatch({ type: "user/login", payload: { name } })
            console.log(typeof (user.name));
            Swal.fire({
                icon: 'success',
                title: 'Login realizado',
                text: 'Olá, ' + name
            })
            history.push("/my-account");
        }

    return (
        <>
            <section id="login_area" className="ptb-100" style={{ height: '70vh' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="account_form">
                                <h3>Login</h3>
                                <div className="default-form-box">
                                    <label>E-mail<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id='user' defaultValue="" onChange={(txt) => setName(txt.target.value)} />
                                    {userError &&
                                        <span className='invalid_input'>E-mail inválido.</span>
                                    }
                                </div>
                                <div className="default-form-box">
                                    <label>Senha<span className="text-danger">*</span></label>
                                    <input type="password" className="form-control" id='password' defaultValue="" minLength="8" onChange={(txt) => setPassword(txt.target.value)}/>
                                    {passwordError &&
                                        <span className='invalid_input'>Senha inválida.</span>
                                    }
                                </div>
                                <div className="login_submit">
                                    <button className="theme-btn-one btn-black-overlay btn_md" id='btnLogin' type="submit" onClick={login}>login</button>
                                </div>
                                <div className="remember_area">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="materialUnchecked" />
                                        <label className="form-check-label" htmlFor="materialUnchecked">Lembrar de mim</label>
                                    </div>
                                </div>
                                <Link to="/register" id='createAccount' className="active">Ainda não tem conta?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginArea
