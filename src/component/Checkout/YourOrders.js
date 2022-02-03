import React from 'react'

const YourOrders = () => {
    return (
        <>
            <div className="order_review  box-shadow bg-white">
                <div className="check-heading">
                    <h3>Your Orders</h3>
                </div>
                <div className="table-responsive order_table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Blue Dress For Woman <span className="product-qty">x 2</span>
                                </td>
                                <td>$90.00</td>
                            </tr>
                            <tr>
                                <td>Lether Gray Tuxedo <span className="product-qty">x 1</span>
                                </td>
                                <td>$55.00</td>
                            </tr>
                            <tr>
                                <td>Woman Full Sliv Dresss <span className="product-qty">x 3</span>
                                </td>
                                <td>$204.00</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>SubTotal</th>
                                <td className="product-subtotal">$349.00</td>
                            </tr>
                            <tr>
                                <th>Shipping</th>
                                <td>Free Shipping</td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <td className="product-subtotal">$349.00</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}

export default YourOrders