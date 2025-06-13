import React from 'react'
import "./Home.css"
import img from "../pages/photos/adam-bmw.jpg"


export default function Home() {
    return (
        <div className="home-container">
            <div className="home-page">
                <div className="left">
                    <div className="hero-container">
                        <h1 className="typing-text">Hi, I'm Adhamjon 👋</h1>
                        <p className="fade-in-text">
                            A Frontend Developer building modern and responsive web experiences.
                        </p>
                        <button className='btn-cnt'><a href="https://t.me/@adhamjonsodiqov18" className="about-link delay-6">
                            Contact Me With Telegram
                        </a></button>
                    </div>
                </div>
                <div className="right">
                    <img src={img} alt="Adhamjon Sodiqov" className="profile-img" />
                </div>
            </div>
        </div>
    );
}
