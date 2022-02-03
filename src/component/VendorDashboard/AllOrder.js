import React from 'react'
import { Link } from 'react-router-dom'
const AllOrder = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="vendor_order_boxed">
                        <h4>All Order</h4>
                        <div className="table-responsive">
                            <table className="table pending_table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Order Id</th>
                                        <th scope="col">Product Details</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78153</Link></td>
                                    <td>Belted Trench Coat</td>
                                    <td><span className="badge badge-info">Shipped</span></td>
                                    <td>$50</td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78154</Link></td>
                                    <td>Neck Velvet Dress</td>
                                    <td><span className="badge badge-warning">Pending</span></td>
                                    <td>$50</td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78155</Link></td>
                                    <td>T-Shirt For Woman</td>
                                    <td><span className="badge badge-success">Confrimed</span></td>
                                    <td>$58</td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78156</Link></td>
                                    <td>Fit-Flare Dress</td>
                                    <td><span className="badge badge-danger">Canceled</span></td>
                                    <td>$50</td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78157</Link></td>
                                    <td>Long-Shirt For Men</td>
                                    <td><span className="badge badge-info">Shipped</span></td>
                                    <td>$50</td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78158</Link></td>
                                    <td>Sharee for women</td>
                                    <td><span className="badge badge-info">Shipped</span></td>
                                    <td>$50</td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78159</Link></td>
                                    <td>Handbag for Girls</td>
                                    <td><span className="badge badge-info">Shipped</span></td>
                                    <td>$50</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-12">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a href="#!" className="page-link">
                                        <span aria-hidden="true">«</span>
                                    </a>
                                </li>
                                <li className="page-item active"><a href="#!" className="page-link">1</a></li>
                                <li className="page-item"><a href="#!" className="page-link">2</a></li>
                                <li className="page-item"><a href="#!" className="page-link">3</a></li>
                                <li className="page-item">
                                    <a href="#!" className="page-link">
                                        <span aria-hidden="true">»</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllOrder
