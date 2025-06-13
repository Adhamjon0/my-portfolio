import React from 'react';
import './About.css';
import img2 from "../pages/photos/its me.jpg";

export default function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <section className="about-section">
                    <h2 className="about-title">About Me</h2>

                    <p className="about-text delay-1">
                        I'm Sodiqov Adhamjon G'ayratovich — a frontend developer from Samarkand, Uzbekistan.
                    </p>
                    <p className="about-text delay-2">
                        I was born in 2008 and began my journey with HTML, CSS, and JavaScript.
                    </p>
                    <p className="about-text delay-3">
                        I'm currently learning React.js and focusing on creating clean, responsive UIs.
                    </p>
                    <p className="about-text delay-4">
                        I care about code quality, performance, and user experience.
                    </p>
                    <p className="about-text delay-5">
                        Every project I build brings me closer to becoming the developer I aspire to be.
                    </p>
                </section>

                <div className="about-image">
                    <img src={img2} alt="Adhamjon Sodiqov" className="profile-img" />
                </div>
            </div>
        </div>
    );
}
