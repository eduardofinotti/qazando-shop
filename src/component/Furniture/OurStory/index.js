import React from 'react'
import { Link } from 'react-router-dom'

const OurStory = () => {
    return (
        <>
             <section id="furniture_story">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="our_story_content">
                        <h2>Our Story</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem quaerat
                             autem obcaecati nisi dolore reprehenderit fugiat accusamus repellat nihil possimus voluptas ipsa, 
                            asperiores maiores quisquam ipsum necessitatibus sit saepe.</p>
                        <Link to="/about" className="theme-btn-one bg-black btn_md">Read Full Story</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default OurStory
