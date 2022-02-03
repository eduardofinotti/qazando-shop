import React from 'react'
import { Link } from 'react-router-dom'

const Trending = () => {
    return (
        <>
     <section id="special_offer_one">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="offer_banner_one text-center">
                        <h5>TRENDING</h5>
                        <h2>New Fashion</h2>
                        <p>
                            Consectetur adipisicing elit. Dolores nisi distinctio magni, iure deserunt doloribus optio
                        </p>
                        <Link to="/shop" className="theme-btn-one bg-whites btn_md">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Trending
