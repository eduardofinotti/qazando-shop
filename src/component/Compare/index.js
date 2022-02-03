import React from 'react'
import { Link } from 'react-router-dom'
import { RatingStar } from "rating-star";
import img from '../../assets/img/common/empty-cart.png'
import { useDispatch, useSelector } from "react-redux";

const Compare = () => {
    let products = useSelector((state) => state.products.compare);
    let dispatch = useDispatch();
    // Add to cart
    const addToCart = async (id) => {
        dispatch({ type: "products/addToCart", payload: { id } })
        dispatch({ type: "products/delCompare", payload: { id } })
    }
    // del comp
    const delCompare = async (id) => {
        dispatch({ type: "products/delCompare", payload: { id } })
    }
    return (
        <>{products.length ?
            <section id="compare_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_desc">
                                <div className="table_page table-responsive compare-table">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td className="first-column">Product</td>

                                                {
                                                    products.map((item, index) => (
                                                        <td className="product-image-title" key={index}>
                                                            <Link to={`/product-details-one/${item.id}`} className="image">
                                                                {
                                                                    products.length === 3 ?
                                                                        <img src={item.img} alt="Compare_Product" style={{ height: '43vh' }} />
                                                                        :
                                                                        <img src={item.img} alt="Compare_Product" style={{ height: '70vh' }} />
                                                                }
                                                            </Link>
                                                            <Link to="/shop-left-bar" className="category">{item.category}</Link>
                                                            <h5><Link to="/shop-left-bar" className="title">{item.title}</Link></h5>
                                                        </td>
                                                    ))
                                                }

                                            </tr>
                                            <tr>
                                                <td className="first-column">Description</td>
                                                {
                                                    products.map((item, index) => (
                                                        <td className="pro-desc" key={index}>
                                                            <p>{item.description}</p>
                                                        </td>
                                                    ))
                                                }
                                            </tr>
                                            <tr>
                                                <td className="first-column">Price</td>
                                                {
                                                    products.map((item, index) => (
                                                        <td className="pro-price" key={index}>${item.price}</td>
                                                    ))
                                                }


                                            </tr>
                                            <tr>
                                                <td className="first-column">Color</td>
                                                {
                                                    products.map((item, index) => (
                                                        <td className="pro-color" key={index}>{['Black', 'Red', 'Blue'][index]}</td>
                                                    ))
                                                }

                                            </tr>
                                            <tr>
                                                <td className="first-column">Stock</td>
                                                {
                                                    products.map((item, index) => (
                                                        <td className="pro-stock" key={index}>{['In Stock', 'Coming Soon', 'Sold Out'][index]}</td>
                                                    ))
                                                }

                                            </tr>
                                            <tr>
                                                <td className="first-column">Add to cart</td>
                                                {
                                                    products.map((item, index) => (
                                                        <td className="pro-addtocart" key={index}><a href="#!" onClick={() => addToCart(item.id)} className="theme-btn-one btn-black-overlay btn_sm"><span>ADD TO CART</span></a></td>
                                                    ))
                                                }
                                            </tr>
                                            <tr>
                                                <td className="first-column">Rating</td>
                                                {
                                                    products.map((item, index) => (
                                                        <td className="pro-ratting" key={index}>
                                                            <RatingStar
                                                                maxScore={5}
                                                                id="rating-star-compare"
                                                                rating={item.rating.rate}
                                                            />
                                                        </td>
                                                    ))
                                                }
                                            </tr>
                                            <tr>
                                                <td className="first-column">Delete</td>
                                                {
                                                    products.map((item, index) => (
                                                        <td className="pro-remove" key={index}><button onClick={() => delCompare(item.id)}><i className="fa fa-trash"></i></button></td>
                                                    ))
                                                }

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            :
            <section id="empty_cart_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12 col-12">
                            <div className="empaty_cart_area">
                                <img src={img} alt="img" />
                                <h2>PRODUCT NOT FOUND</h2>
                                <h3>Sorry Mate... No Item Found Inside Your Compare List!</h3>
                                <Link to="/shop" className="btn btn-black-overlay btn_sm">Continue Shopping</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        }
        </>
    )
}

export default Compare