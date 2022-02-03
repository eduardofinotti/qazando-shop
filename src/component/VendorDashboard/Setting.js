import React from 'react'

const Setting = () => {
    return (
        <>
            <div className="vendors_settings">
                <h4>Settings</h4>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="setings_boxed">
                            <h3>Notifications</h3>
                            <form>
                                <input type="radio" id="allow_desktop" name="fav_language" checked readOnly/>
                                <label htmlFor="allow_desktop">Allow Desktop Notifications</label><br />
                                <input type="radio" id="enable" name="fav_language" />
                                <label htmlFor="enable">Enable Notifications</label><br />
                                <input type="radio" id="get_notification" name="fav_language" />
                                <label htmlFor="get_notification">Get notification for my own activity</label><br />
                                <input type="radio" id="dnd" name="fav_language" />
                                <label htmlFor="dnd">DND</label>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="setings_boxed">
                            <h3>Deactivate Account</h3>
                            <form>
                                <input type="radio" id="privacy_oncern" name="deactivate_account" checked readOnly/>
                                <label htmlFor="privacy_oncern">I have a privacy concern</label><br />
                                <input type="radio" id="is_temporary" name="deactivate_account" />
                                <label htmlFor="is_temporary">This is temporary</label><br />
                                <input type="radio" id="other" name="deactivate_account" />
                                <label htmlFor="other">Other</label>
                            </form>
                            <button className="theme-btn-one btn-black-overlay btn_sm ">Deactivate Account</button>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="setings_boxed">
                            <h3>Delete Account</h3>
                            <form>
                                <input type="radio" id="longer_usable" name="delete_account" checked readOnly/>
                                <label htmlFor="longer_usable"> No longer usable</label><br />
                                <input type="radio" id="switch_on_other" name="delete_account" />
                                <label htmlFor="switch_on_other">Want to switch on other account</label><br />
                                <input type="radio" id="other_delete" name="delete_account" />
                                <label htmlFor="other_delete">Other</label>
                            </form>
                            <button className="theme-btn-one btn-black-overlay btn_sm ">Delete Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting
