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

        if (user === '') {
            setuserError(true)
            return
        } else {
            setuserError(false)
        }
        if (!EmailValidator.validate(email) || email === '') {
            setEmailError(true)
            return
        } else {
            setEmailError(false)
        }
        if (pass === '' || pass.length < 6) {
            setPassError(true)
            return
        } else {
            setPassError(false)
        }

        if (!emailError || !userError || !passError) {
            dispatch({ type: "user/register", payload: { user, email, pass } })
            
            Swal.fire({
                icon: 'success',
                title: 'Cadastro realizado!',
                text: 'Bem-vindo ' + user
            })

            history.push("/my-account");
        }
    }
    return (
        <>
            <section id="login_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="account_form">
                                <h3>Cadastro de usuário</h3>
                                <div className="default-form-box">
                                    <label>Nome<span className="text-danger">*</span></label>
                                    <input id='user' type="text" className="form-control" value={user} onChange={(txt) => setUser(txt.target.value)} />
                                    {userError &&
                                        < span className='errorLabel' id='errorMessageFirstName'>O campo nome deve ser prenchido</span>
                                    }
                                </div>
                                <div className="default-form-box">
                                    <label>E-mail<span className="text-danger">*</span></label>
                                    <input id='email' type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    {emailError &&
                                        < span className='errorLabel' id='errorMessageFirstName'>O campo e-mail deve ser prenchido corretamente</span>
                                    }
                                </div>
                                <div className="default-form-box">
                                    <label>Senha<span className="text-danger">*</span></label>
                                    <input id='password' type="password" className="form-control" value={pass}
                                        onChange={(e) => { setPass(e.target.value) }} minLength="8" />
                                    {passError &&
                                        < span className='errorLabel' id='errorMessageFirstName'>O campo senha deve ter pelo menos 6 dígitos</span>
                                    }
                                </div>
                                <button id='btnRegister' className="theme-btn-one btn-black-overlay btn_md" onClick={register}>Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegisterArea
