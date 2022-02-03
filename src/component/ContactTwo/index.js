import React from 'react'
import Map from './Map'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
const ContactTwoArea = () => {
    return (
        <>
            <section id="contact_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact_form_one contact_info_wrapper">
                                <h3 className="text-center">Get In Touch</h3>
                                <form onSubmit={(e)=> {e.preventDefault(); Swal.fire('Thank You', 'We Got Your Message', 'success')}}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" placeholder="Name" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="email" placeholder="Email" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="number" className="form-control" name="phone" placeholder="Phone" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <textarea rows="7" className="form-control" name="message" placeholder="Message"></textarea>
                                            </div>
                                            <div className="submit_bitton_contact_one">
                                                <button value="Submit" className="theme-btn-one btn-black-overlay btn_md">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="left_side_contact contact_info_wrapper">
                                <ul>
                                    <li className="address_location">
                                        <div className="contact_widget ">
                                            <i className="fa fa-map-marker"></i>
                                            <p>32, Choto Mirzapur, Ahsan Ahmed Road <br /> Khulna 9100, Bangladesh</p>
                                        </div>
                                    </li>
                                    <li className="address_location">


                                        <div className="contact_widget">
                                            <i className="fa fa-phone"></i>
                                            <Link to="/">+1 (833) 287-3077</Link>
                                        </div>
                                        <div className="contact_widget">
                                            <i className="fa fa-mobile"></i>
                                            <Link to="/">+1 (833) 528-8619</Link>
                                        </div>
                                    </li>
                                    <li className="address_location">
                                        <div className="contact_widget">
                                            <i className="fa fa-envelope"></i>
                                            <Link to="/">demo@gmail.com</Link>
                                        </div>
                                        <div className="contact_widget">
                                            <i className="fa fa-globe"></i>
                                            <Link to="/">andshop.com</Link>
                                        </div>
                                    </li>
                                </ul>
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactTwoArea