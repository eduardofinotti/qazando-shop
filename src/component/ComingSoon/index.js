import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../../assets/img/logo-white.png'

const ComingSoonArea = () => {
    // Custom Timer
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('August 19 2022 00:00:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop Our Timer
                clearInterval(interval.current);
            } else {
                // update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    }

    useEffect(() => {
        startTimer()
    })
    return (
        <>
            <section id="coming_soon_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="coming_soon_content">
                                <Link to="/"><img src={logo} alt="img" /></Link>
                                <div className="coming_soon_title">
                                    <h2>We Are Coming Soon</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text.</p>
                                </div>
                                <div className="coming_soon_time">
                                    <div id="countdown_soon">
                                        <ul>
                                            <li><span>{timerDays}</span>days</li>
                                            <li><span>{timerHours}</span>Hours</li>
                                            <li><span>{timerMinutes}</span>Minutes</li>
                                            <li><span>{timerSeconds}</span>Seconds</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="coming_soon_newsletter">
                                    <h3>Subscribe for our next update</h3>
                                    <form onSubmit={(e)=> {e.preventDefault(); Swal.fire('Success', 'Thank you for your Subscribtion', 'success')}}>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Your Email" required />
                                            <button className="theme-btn-one btn-black-overlay btn_md">subscrib</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComingSoonArea