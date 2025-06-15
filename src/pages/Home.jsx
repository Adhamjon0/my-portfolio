import React from 'react'
import "./Home.css"
import img from "../pages/photos/adam-bmw.jpg"
import { useTranslation } from 'react-i18next'

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className="home-container">
            <div className="home-page">
                <div className="left">
                    <div className="hero-container">
                        <h1 className="typing-text">{t('home.greeting')}</h1>
                        <p className="fade-in-text">
                            {t('home.description')}
                        </p>
                        <button className='btn-cnt'>
                            <a href="https://t.me/@adhamjonsodiqov18" className="about-link delay-6">
                                {t('home.contact')}
                            </a>
                        </button>
                    </div>
                </div>
                <div className="right">
                    <img src={img} alt="Adhamjon Sodiqov" className="profile-img" />
                </div>
            </div>
        </div>
    );
}
