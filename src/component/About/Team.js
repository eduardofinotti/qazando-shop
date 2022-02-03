import React from 'react'
import Heading from '../Fashion/Heading'
// import img
import img1 from '../../assets/img/team/team1.png'
import img2 from '../../assets/img/team/team2.png'
import img3 from '../../assets/img/team/team3.png'
import img4 from '../../assets/img/team/team4.png'

const TeamData =[
    {
        img:img1,
        name:"Ms. Sandela",
        posation:"CEO",
    },
    {
        img:img2,
        name:"Mr. Heroas",
        posation:"Head Of Markating",
    },
    {
        img:img3,
        name:"Ms. Valona",
        posation:"Manager",
    },
    {
        img:img4,
        name:"Ms. Raka",
        posation:"Admin",
    }
]

const Team = (props) => {
    return (
        <>
        <section id="team_area" className={`ptb-100 ${props.class} margin_bottom_100`} >
        <div className="container">
            <Heading heading="Expert Team" para="This is our expert team members of AndShop" />
            <div className="row">
                {TeamData.map((data, index)=>(
                    <div className="col-lg-3" key={index}>
                    <div className="team_slider">
                        <div className="team-single">
                            <div className="team-img">
                                <img src={data.img} alt="img" />
                            </div>
                            <div className="team-content">
                                <h4 className="team-name font--bold">{data.name}</h4>
                                <span className="team-title">{data.posation}</span>
                                <ul className="team-social pos-absolute">
                                    <li><a href="#!"><i className="fa fa-facebook-f"></i></a></li>
                                    <li><a href="#!"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#!"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#!"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#!"><i className="fa fa-google-plus-g"></i></a></li>
                                </ul>
                            </div>
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

export default Team
