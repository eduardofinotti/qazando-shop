import React from 'react'
// import img
import img1 from '../../assets/img/icon/icon_about1.jpg'
import img2 from '../../assets/img/icon/icon_about2.jpg'
import img3 from '../../assets/img/icon/icon_about3.jpg'
import img4 from '../../assets/img/icon/icon_about4.jpg'

// Feature Data
const FeatureData = [
    {
        img: img1,
        title: "Creative Always",
        para: `Stay creative with Billey and the huge collection of premade elements, layouts &amp;
        effects`
    },
    {
        img: img2,
        title: "Express Customization",
        para: `Easy to install and configure the theme customization in a few clicks with Billey.`
    },
    {
        img: img3,
        title: "Premium Integrations",
        para: `Integrated premium plugins in Billey is the secret weapon for your business to thrive.`
    },
    {
        img: img4,
        title: "Real-time Editing",
        para: `Edit your work and preview the changes on the screen live with advanced page builder.`
    }
]

const Feature = () => {
    return (
        <>
            <section id="service_promo_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        {FeatureData.map((data, index) => (
                            <div className="col-lg-3 col-sm-6 col-12" key={index}>
                                <div className="service_promo_single_item">
                                    <div className="service_prom_image">
                                        <img src={data.img} alt="img" />
                                    </div>
                                    <div className="service_prom_content">
                                        <h3>{data.title}</h3>
                                        <p>{data.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature
