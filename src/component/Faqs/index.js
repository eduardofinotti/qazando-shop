import React from 'react'
import { FaqsData } from './FaqsData'
const FaqsArea = () => {
    return (
        <>
            <section id="faqs_arae" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="faqs_area_wrapper">
                                <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                    {FaqsData.map((data, index) => (
                                        <div className="card_items_area" key={index}>
                                            <div className="card-header" role="tab" id="headingOne1">
                                                <a data-toggle="collapse" data-parent="#accordionEx" href={"#collapse" + index} aria-expanded="true">
                                                    <h5 className="mb-0">
                                                        {data.heading}<i className="fa fa-angle-down rotate-icon"></i>
                                                    </h5>
                                                </a>
                                            </div>
                                            <div id={"collapse" + index} className={index === 0 ? "collapse show active" : "collapse"}
                                                role="tabpanel" data-parent="#accordionEx">
                                                <div className="card-body">
                                                    {data.para}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaqsArea