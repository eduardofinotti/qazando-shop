import React, { useState } from 'react'
import BillingsInfo from './BillingsInfo'
import Payment from './Payment'
import YourOrders from './YourOrders'

const Checkout = () => {

    var [isBillingInfo, setIsBillingInfo] = useState(false)

    function isBilling() {
        setIsBillingInfo(true)
    }

    return (
        <>
            <section id="checkout_one" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <BillingsInfo isBilling={isBilling} />
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <YourOrders />
                            <Payment isBilling={isBillingInfo} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout