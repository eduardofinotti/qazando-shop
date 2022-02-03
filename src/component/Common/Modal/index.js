import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import { RatingStar } from "rating-star";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, TelegramShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon, TelegramIcon, WhatsappIcon } from "react-share";

const MyVerticallyCenteredModal = (props) => {
    let dispatch = useDispatch();
    const [count, setCount] = useState(1)

    const incNum = () => {
        console.log(1);
        setCount(count + 1)
    }
    const decNum = () => {
        console.log(2);
        if (count > 1) {
            setCount(count - 1)
        } else {
            alert("Sorry, Limit Reached")
            setCount(1)
        }
    }

    // Add to cart
    const addToCart = async (id) => {
        dispatch({ type: "products/addToCart", payload: { id } })
    }

    return (
        <>
            <Modal {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Body>
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="product_one_modal_top modal-content">
                            <button type="button" className="close close_modal_icon" onClick={props.onHide} >
                                <span aria-hidden="true"><i className="fa fa-times"></i></span>
                            </button>
                            <div id="product_slider_one">
                                <div className="row">
                                    <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                                        <div className="products_modal_sliders">
                                            <img src={props.data.img} alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-6 col-sm-12 col-12">
                                        <div className="modal_product_content_one">
                                            <h3>{props.data.title}</h3>
                                            <div className="reviews_rating">
                                                <RatingStar maxScore={5} rating={props.data.rating.rate} id="rating-star-modal" />
                                                <span>({props.data.rating.count} Customer Reviews)</span>
                                            </div>
                                            <h4>${props.data.price}.00 <del style={{fontWeight: 400, color: 'gray'}}>${parseInt(props.data.price) + 17}.00</del> </h4>
                                            <p>{props.data.description}</p>
                                            <div className="variable-single-item">
                                                <span>Color</span>
                                                <div className="product-variable-color">
                                                    <label htmlFor="modal-product-color-red">
                                                        <input name="modal-product-color" id="modal-product-color-red"
                                                            className="color-select" type="radio" defaultChecked/>
                                                        <span className="product-color-red"></span>
                                                    </label>

                                                    <label htmlFor="modal-product-color-green">
                                                        <input name="modal-product-color" id="modal-product-color-green"
                                                            className="color-select" type="radio" />
                                                        <span className="product-color-green"></span>
                                                    </label>

                                                    <label htmlFor="modal-product-color-blue">
                                                        <input name="modal-product-color" id="modal-product-color-blue"
                                                            className="color-select" type="radio" />
                                                        <span className="product-color-blue"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <form id="product_count_form_one">
                                                <div className="product_count_one">
                                                    <div className="plus-minus-input">
                                                        <div className="input-group-button">
                                                            <button type="button" className="button" onClick={decNum}>
                                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                        <input className="form-control" type="number" name="quantity" value={count}/>
                                                        <div className="input-group-button">
                                                            <button type="button" className="button" onClick={incNum}>
                                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <a href="#!" className="theme-btn-one btn-black-overlay btn_sm" onClick={() => addToCart(props.data.id)}>Add To Cart</a>
                                                </div>
                                            </form>
                                            <div className="modal_share_icons_one">
                                                <h4>SHARE THIS PRODUCT</h4>
                                                <div className="posted_icons_one">
                                                    <FacebookShareButton url={"https://themeforest.net/item/andshop-ecommerce-react-js-template/33822003"} quote={"Best React.js ecommerce Templete"}>
                                                        <FacebookIcon size={32} round />
                                                    </FacebookShareButton>
                                                    <TwitterShareButton url={"https://themeforest.net/item/andshop-ecommerce-react-js-template/33822003"} title={"Best React.js ecommerce Templete"}>
                                                        <TwitterIcon size={32} round />
                                                    </TwitterShareButton>
                                                    <LinkedinShareButton url={"https://themeforest.net/item/andshop-ecommerce-react-js-template/33822003"} title={"Best React.js ecommerce Templete"}>
                                                        <LinkedinIcon size={32} round />
                                                    </LinkedinShareButton>
                                                    <TelegramShareButton url={"https://themeforest.net/item/andshop-ecommerce-react-js-template/33822003"} title={"Best React.js ecommerce Templete"}>
                                                        <TelegramIcon size={32} round />
                                                    </TelegramShareButton>
                                                    <WhatsappShareButton url={"https://themeforest.net/item/andshop-ecommerce-react-js-template/33822003"} title={"Best React.js ecommerce Templete"}>
                                                        <WhatsappIcon size={32} round />
                                                    </WhatsappShareButton>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default MyVerticallyCenteredModal