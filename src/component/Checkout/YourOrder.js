import React from 'react'

const YourOrder = () => {
    return (
        <>
            <div className="col-lg-6 col-md-6">
                <h3>Your order</h3>
                <div className="order_table table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> green Dress For Woman <strong> × 1</strong></td>
                                <td> $100.00</td>
                            </tr>
                            <tr>
                                <td> V-Neck Dress <strong> × 1</strong></td>
                                <td> $50.00</td>
                            </tr>
                            <tr>
                                <td> Boho Tops <strong> × 1</strong></td>
                                <td> $40.00</td>
                            </tr>
                            <tr>
                                <td> Tulip Dress  <strong> × 1</strong></td>
                                <td> $60.00</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Cart Subtotal</th>
                                <td>$250.00</td>
                            </tr>
                            <tr>
                                <th>Shipping</th>
                                <td><strong>$5.00</strong></td>
                            </tr>
                            <tr className="order_total">
                                <th>Order Total</th>
                                <td><strong>$255.00</strong></td>
                            </tr>
                        </tfoot>
                    </table>
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

                    <div className="order_button pt-3">
                        <button className="theme-btn-one btn-black-overlay btn_sm" type="submit">Proceed to Pay</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default YourOrder