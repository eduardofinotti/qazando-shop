import React from 'react'
import SkillBar from 'react-skillbars';

const skills = [
    { type: "UI/UX", level: 85 },
    { type: "IDEA", level: 75 },
    { type: "DESIGN", level: 55 },
];

const colors = {
    "bar": "#f798378a",
    "title": {
        "text": "#fff",
        "background": "#f79837"
    }
}

const Functionality = () => {
    return (
        <>
            <section id="about_progressbar" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about_progressbar_content">
                                <h2>Functionality meets perfection</h2>
                                <p>In today’s day and age, one cannot underestimate the importance of design, the art of
                                    creating striking visuals to move and captivate your audience.</p>
                                <p>The brand was founded in October 2021, and since then it has upheld the
                                    philosophy that "everyone can enjoy the beauty of fashion." Its business covers more than 220 countries and regions around the world</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="custom-progress m-t-40">
                                <SkillBar skills={skills} height={40} colors={colors} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Functionality
