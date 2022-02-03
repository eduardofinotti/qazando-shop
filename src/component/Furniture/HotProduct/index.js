import React from 'react'
import ProductCard from '../../Furniture/Product/ProductCard';
import { useSelector } from "react-redux";

const HotProduct = () => {
    let products = useSelector((state) => state.products.products);
    products = products.filter(item => item.category === 'furniture')
    return (
        <>
        <section id="hot_Product_area" className="ptb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="tabs_center_button">
                        <ul className="nav nav-tabs">
                            <li><a data-toggle="tab" href="#new_arrival" className="active">New Arrival</a></li>
                            <li><a data-toggle="tab" href="#trending">Trending</a></li>
                            <li><a data-toggle="tab" href="#best_sellers">Best Sellers</a></li>
                            <li><a data-toggle="tab" href="#featured">Featured</a></li>
                            <li><a data-toggle="tab" href="#on_sall">On sall</a></li>
                          </ul>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="tabs_el_wrapper">
                        <div className="tab-content">
                          <div id="new_arrival" className="tab-pane fade show in active">
                              <div className="row">
                                {products.slice(0, 8).map((data, index) =>(
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                    <ProductCard data={data} />
                            </div>
                                ))}
                              </div>
                          </div>
                          <div id="trending" className="tab-pane fade">
                          <div className="row"> 
                                {products.slice(0, 5).map((data, index) =>(
                                      <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                      <ProductCard data={data} />
                              </div>
                                ))}
                              </div>
                          </div>
                          <div id="best_sellers" className="tab-pane fade">
                          <div className="row">
                                {products.slice(3, 5).map((data, index) =>(
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                    <ProductCard data={data} />
                            </div>
                                ))}
                              </div>
                          </div>
                          <div id="featured" className="tab-pane fade">
                          <div className="row">
                                {products.slice(5, 11).map((data, index) =>(
                                     <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                     <ProductCard data={data} />
                             </div>
                                ))}
                              </div>
                          </div>
                          <div id="on_sall" className="tab-pane fade">
                          <div className="row">
                                {products.slice(6, 13).map((data, index) =>(
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

export default HotProduct
