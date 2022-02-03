import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MyVerticallyCenteredModal from '../../Common/Modal'
import { useDispatch } from "react-redux";
const ProductCard = (props) => {
    let dispatch = useDispatch();
    // Add to cart
    const addToCart = async (id) => {
        dispatch({ type: "products/addToCart", payload: { id } })
    }
    // Add to Favorite
    const addToFav = async (id) => {
        dispatch({ type: "products/addToFav", payload: { id } })
    }
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="product_item_two">
                <div className="product_item_inner">
                    <div className="product_img_wrap">
                        <Link to={`/product-details-two/${props.data.id}`}>
                            <img src={props.data.img} alt="product_img" />
                        </Link>
                    </div>
                    <div className="product_button">
                        <a href="#!" onClick={() => addToCart(props.data.id)}><i className="fa fa-shopping-bag"></i></a>
                        <a href="#!" onClick={() => addToFav(props.data.id)}><i className="fa fa-heart"></i></a>
                        <a href="#!" className="action quickview" title="Quick view" onClick={() => setModalShow(true)}><i className="fa fa-eye"></i></a>
                    </div>
                </div>
                <div className="product_detail">
                    <h5 className="product_title">
                        <Link to={`/product-details-two/${props.data.id}`}>{props.data.title}</Link>
                    </h5>
                    <p className="item_price">${props.data.price}.00</p>
                </div>
            </div>

            <MyVerticallyCenteredModal data={props.data} show={modalShow} onHide={() => setModalShow(false)} />

        </>
    )
}

export default ProductCard