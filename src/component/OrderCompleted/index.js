import React from 'react'
import { Link } from 'react-router-dom'

const OrderComplete = () => {
    return (
        <>
            <section id="order_complet_area" className="ptb-100 ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="text-center order_complete">
                                <i className="fa fa-check-circle"></i>
                                <div className="order_complete_heading">
                                    <h2>Your order is completed!</h2>
                                </div>
                                <p>Thank you for your order! Your order is being processed and will be completed within 3-6
                                    hours. You will receive an email confirmation when your order is completed.</p>
                                <Link to="/shop" className="theme-btn-one bg-black btn_sm">Continue Shopping</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderComplete
