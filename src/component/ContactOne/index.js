import React from 'react'
import Map from './Map'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ContactArea = () => {
    return (
        <>
            <section id="contact_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact_info">
                                <h3>Contact Information</h3>
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                    Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                    Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo,
                                    lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum
                                    porta. Proin eget tortor risus. Curabitur arcu erat,
                                    accumsan id imperdiet et, porttitor at sem.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="left_side_contact side_card">
                                <ul>
                                    <li className="address_location">
                                    <div className="contact_widget ">
                                    <i className="fa fa-map-marker"></i>
                                        <p>32, Choto Mirzapur, Ahsan Ahmed Road <br/> Khulna 9100, Bangladesh</p>
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
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact_form_one">
                                <h3>Get In Touch</h3>
                                <form onSubmit={(e)=> {e.preventDefault(); Swal.fire('Thank You', 'We Got Your Message', 'success')}}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Name" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Email" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="number" className="form-control" placeholder="Phone" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Subject" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <textarea rows="7" className="form-control" placeholder="Message"></textarea>
                                            </div>
                                            <div className="submit_bitton_contact_one">
                                                <button className="theme-btn-one btn-black-overlay btn_md">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <Map />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactArea