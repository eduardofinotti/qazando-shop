import React, { useState } from 'react'
import NewsletterModal from '../../component/Common/NewsletterModal'

const Payment = (props) => {

    var [showSuccess, setShowSuccess] = useState(false)
    var [isBillingInfo, setIsBillingInfo] = useState(true)

    function doPayment() {
        setIsBillingInfo(props.isBilling)

        if (props.isBilling) {
            setShowSuccess(true)
        }
    }

    function stop() {
        setShowSuccess(false)
    }

    return (
        <>
            <div className="order_review bg-white">
                <div className="check-heading">
                    <h3>Payment</h3>
                </div>
                <div className="payment_method">
                    <form>
                        <div className="accordion" id="accordionExample">
                            <div className="payment_area_wrappers">
                                <div className="heading_payment" id="headingOne">
                                    <div className="" data-toggle="collapse" data-target="#collapseOne" >
                                        <input type="radio" name="payment" id="html" value="HTML" defaultChecked />
                                        <label htmlFor="html">Direct Bank Transfer</label>
                                    </div>
                                </div>
                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="payment_body">
                                        <p>Direct Bank Transfer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="payment_area_wrappers">
                                <div className="heading_payment" id="headingTwo">
                                    <div className="collapsed" data-toggle="collapse" data-target="#collapseTwo">
                                        <input type="radio" name="payment" id="javascript" value="JavaScript" />
                                        <label htmlFor="javascript">Mobile Banking</label>
                                    </div>
                                </div>
                                <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                                    <div className="payment_body">
                                        <p>Direct Mobile Transfer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="payment_area_wrappers">
                                <div className="heading_payment" id="headingThree">
                                    <div className="collapsed" data-toggle="collapse" data-target="#collapseThree">
                                        <input type="radio" name="payment" id="css" value="JavaScript" />
                                        <label htmlFor="css">Paypal</label>
                                    </div>
                                </div>
                                <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                                    <div className="payment_body">
                                        <p>Some placeholder content for the second accordion panel. This panel is hidden by default.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    {!isBillingInfo &&
                        < span className='errorLabel' id='errorMessageFirstName'>Preencha os dados de pagamento!</span>
                    }

                </div>
                <button className="theme-btn-one btn-black-overlay btn_sm" onClick={doPayment}>Place Order</button>
            </div>

            <NewsletterModal show={showSuccess} stop={stop} title="Order success!" subtitle="Congrats! Your order was created with sucess!" />
        </>
    )
}

export default Payment