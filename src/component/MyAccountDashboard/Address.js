import React from 'react'
const Address = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className="myaccount-content">
                        <h4 className="title">Billing Address</h4>
                        <div className="billing_address">
                            <h5><strong>Alex Porty</strong></h5>
                            <p>
                             4964 Dennison Street<br /> French Camp, 12345
                            </p>
                            <p>Mobile: (123) 123-456789</p>
                            <button className="theme-btn-one bg-black btn_sm mt-4">Edit
                                Address</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="myaccount-content">
                        <h4 className="title">Shipping Address</h4>
                        <div className="billing_address">
                            <h5><strong>Helen J Francis</strong></h5>
                            <p>
                             Travis street city	 <br /> Newyork, 90001
                            </p>
                            <p>Mobile: (458) 209-534-4814</p>
                            <button  className="theme-btn-one bg-black btn_sm mt-4">Edit
                                Address</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address
