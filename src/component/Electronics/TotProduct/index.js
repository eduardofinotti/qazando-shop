import React from 'react'
import ProductCard from '../Product/ProductCard'
import { useSelector } from "react-redux";

const TopPRoduct = () => {
    let products = useSelector((state) => state.products.products);
    products = products.filter(item => item.category === 'electronics')
    return (
        <>
            <section id="electronics_top_product" className="pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left_heading_three">
                                <h2>Top Product</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tabs_right_button">
                                <ul className="nav nav-tabs">
                                    <li><a data-toggle="tab" href="#video" className="active">Vaideo & Audio</a></li>
                                    <li><a data-toggle="tab" href="#audio">Audio & Home</a></li>
                                    <li><a data-toggle="tab" href="#camera">Camera & Photo</a></li>
                                    <li><a data-toggle="tab" href="#home">Home & Garden</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tabs_el_wrapper">
                                <div className="tab-content">
                                    <div id="video" className="tab-pane fade show in active">
                                        <div className="row">
                                            {products.slice(0, 8).map((data, index) => (
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                                    <ProductCard data={data} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div id="audio" className="tab-pane fade">
                                        <div className="row">
                                            {products.slice(4, 10).map((data, index) => (
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                                    <ProductCard data={data} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div id="camera" className="tab-pane fade">
                                        <div className="row">
                                            {products.slice(3, 9).map((data, index) => (
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                                    <ProductCard data={data} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div id="home" className="tab-pane fade">
                                        <div className="row">
                                            {products.slice(5, 10).map((data, index) => (
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                                    <ProductCard data={data} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopPRoduct