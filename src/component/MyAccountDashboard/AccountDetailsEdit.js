import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import img1 from '../../assets/img/team/team1.png'

const AccountDetailsEdit = () => {
const history = useHistory();
const routeChange = () => {
    history.goBack()
  };
    return (
        <>
    <section id="account_edit" className="pt-100 pb-100">
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                    <div className="back_btn">
                       <Link to="/" onClick={routeChange}><i className="fa fa-arrow-left"></i>Back to Dashboard</Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <div className="account_thumd">
                        <div className="account_thumb_img">
                            <img src={img1} alt="img" />
                            <div className="fixed_icon"><input type="file" /><i className="fa fa-camera"></i></div>
                        </div>
                        <h4>Robert Downey JR. </h4>
                        <p>UX/UI Designer</p>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="account_setting">
                        <div className="account_setting_heading">
                            <h2>Account Details</h2>
                            <p>Edit your account settings and change your password here.</p>
                        </div>
                        <form id="account_info_form" onSubmit={(e) => {e.preventDefault(); history.push('/vendor/vendor-profile')} }>
                            <div className="input-radio">
                                <span className="custom-radio"><input type="radio" value="1" name="id_gender" defaultChecked/> Mr.</span>
                                <span className="custom-radio"><input type="radio" value="1" name="id_gender"/> Mrs.</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="f_name">Name</label>
                                <input type="text" className="form-control" id="f_name" placeholder="Jhon" required />
                                <input type="text" className="form-control" placeholder="Dhoe" required />
                            </div>
                            <div className="form-group">
                                <label  htmlFor="email_address">Email Address</label>
                                <input type="email" className="form-control" id="email_address"
                                    placeholder="our email address is demo123@gmail.com" required />
                            </div>
                            <div className="form-group">
                                <label  htmlFor="current_password">Current Password</label>
                                <input type="password" className="form-control" id="current_password"
                                    placeholder="Enter your current password" required />
                                <input type="password" className="form-control" id="new_password"
                                    placeholder="Enter your new password" required />
                                <input type="password" className="form-control" id="re_password"
                                    placeholder="Re-type your new password" required />
                            </div>
                            <button type="submit" className="theme-btn-one bg-black btn_sm">Update Information</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default AccountDetailsEdit
