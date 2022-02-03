import React, { useState } from 'react'
import * as EmailValidator from 'email-validator';

const BillingsInfo = (props) => {

    var [name, setName] = useState('')
    var [isName, setIsName] = useState(true)

    var [lastname, setLastName] = useState('')
    var [isLastName, setIsLastName] = useState(true)

    var [company, setCompany] = useState('')
    var [isCompany, setIsCompany] = useState(true)

    var [email, setEmail] = useState('')
    var [isEmail, setIsEmail] = useState(true)

    var [country, setCountry] = useState('')
    var [isCountry, setIsCountry] = useState(true)

    var [city, setCity] = useState('')
    var [isCity, setIsCity] = useState(true)

    var [zip, setZip] = useState('')
    var [isZip, setisZip] = useState(true)

    var [address, setAddress] = useState('')
    var [isAddress, setIsAddress] = useState(true)

    var [note, setNote] = useState('')
    var [isNote, setIsNote] = useState(true)

    var [isSucess, setIsSuccess] = useState(false)

    function save() {
        // props.isBilling()

        name == '' ? setIsName(false) : setIsName(true)
        lastname == '' ? setIsLastName(false) : setIsLastName(true)
        company == '' ? setIsCompany(false) : setIsCompany(true)
        email == '' ? setIsEmail(false) : setIsEmail(true)
        city == '' ? setIsCity(false) : setIsCity(true)
        country == '' ? setIsCountry(false) : setIsCountry(true)
        zip == '' ? setisZip(false) : setisZip(true)
        address == '' ? setIsAddress(false) : setIsAddress(true)
        note == '' ? setIsNote(false) : setIsNote(true)
        EmailValidator.validate(email) ? setIsEmail(true) : setIsEmail(false)

        if (EmailValidator.validate(email) && setIsName && setIsLastName && setIsCompany && setIsEmail && setIsCity && setIsCountry && setisZip && setIsAddress && setIsNote) {
            setIsSuccess(true)
            props.isBilling()
        }
    }

    return (
        <>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="checkout-area-bg bg-white">
                    <div className="check-heading">
                        <h3>Billings Information</h3>
                    </div>

                    {isSucess &&
                        <div className="check-out-form">
                            <h3 style={{ marginTop: 10, marginBottom: 10, fontSize: 18, color: 'green', backgroundColor: '#C3FFAE', padding: 10 }}>Billings Information registred with success!</h3>
                        </div>
                    }

                    <div className="check-out-form">
                        <form method="post">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="fname">First name<span className="text-danger">*</span> </label>
                                        <input type="text" required="" className="form-control" id="fname"
                                            placeholder="First name" onChange={(txt) => { setName(txt.target.value) }} disabled={isSucess ? true : false} />
                                        {!isName &&
                                            < span className='errorLabel' id='errorMessageFirstName'>O campo First Name deve ser prenchido</span>
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="lname">Last name<span className="text-danger">*</span></label>
                                        <input type="text" required="" className="form-control" id="lname"
                                            placeholder="Last name" onChange={(txt) => { setLastName(txt.target.value) }} disabled={isSucess ? true : false} />
                                        {!isLastName &&
                                            < span className='errorLabel' id='errorMessageFirstName'>O campo Last Name deve ser prenchido</span>
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="cname">Company Name<span className="text-danger">*</span></label>
                                        <input className="form-control" required="" type="text" id="cname"
                                            placeholder="Company Name" onChange={(txt) => setCompany(txt.target.value)} disabled={isSucess ? true : false} />
                                        {!isCompany &&
                                            < span className='errorLabel' id='errorMessageFirstName'>O campo Company deve ser prenchido</span>
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Addresse<span className="text-danger">*</span></label>
                                        <input className="form-control" required="" type="text" id="email"
                                            placeholder="info@gmail.com" onChange={(txt) => setEmail(txt.target.value)} disabled={isSucess ? true : false} />
                                        {!isEmail &&
                                            < span className='errorLabel' id='errorMessageFirstName'>O campo E-mail deve ser prenchido ou é inválido</span>
                                        }

                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="country">Country<span className="text-danger">*</span></label>
                                        <select className="form-control first_null" id="country" onChange={(txt) => setCountry(txt.target.value)} disabled={isSucess ? true : false}>
                                            <option defaultValue="">Select an option...</option>
                                            <option defaultValue="AX">usa</option>
                                            <option defaultValue="AF">Afghanistan</option>
                                        </select>
                                        {!isCountry &&
                                            < span className='errorLabel' id='errorMessageFirstName'>O campo Country deve ser prenchido</span>
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="city">State/City<span className="text-danger">*</span></label>
                                        <select className="form-control first_null" id="city" onChange={(txt) => setCity(txt.target.value)} disabled={isSucess ? true : false}>
                                            <option defaultValue="">Select an option...</option>
                                            <option defaultValue="AX">Aland Islands</option>
                                            <option defaultValue="AF">Afghanistan</option>
                                        </select>
                                        {!isCity &&
                                            < span className='errorLabel' id='errorMessageFirstName'>O campo City deve ser prenchido</span>
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="zip">Zip Code<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="zip" required=""
                                            placeholder="Enter Your zipcode" onChange={(txt) => setZip(txt.target.value)} disabled={isSucess ? true : false} />
                                        {!isZip &&
                                            < span className='errorLabel' id='errorMessageFirstName'>O campo Zip Code deve ser prenchido</span>
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="faddress">Full Address<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="faddress" required=""
                                            placeholder="Enter your address here.." onChange={(txt) => setAddress(txt.target.value)} disabled={isSucess ? true : false} />
                                        {!isAddress &&
                                            < span className='errorLabel' id='errorMessageFirstName'>O campo Address deve ser prenchido</span>
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="messages">Additional Notes<span className="text-danger">*</span></label>
                                        <textarea rows="5" className="form-control" id="messages"
                                            placeholder="Order notes" onChange={(txt) => setNote(txt.target.value)} disabled={isSucess ? true : false}></textarea>
                                        {!isNote &&
                                            < span className='errorLabel' id='errorMessageFirstName'>O campo Additional Notes deve ser prenchido</span>
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="materialUnchecked" disabled={isSucess ? true : false} />
                                        <label className="form-check-label" htmlFor="materialUnchecked">Save In Address
                                            Book</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <button className="theme-btn-one btn-black-overlay btn_sm" onClick={save}>Save</button>
                </div>
            </div >
        </>
    )
}

export default BillingsInfo