import React from 'react';
import './Home.css';
import img from '../pages/photos/adam-bmw.jpg';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import CVButton from '../components/CVButton';

export default function Home() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <div className={`home-container ${theme}`}>
            <div className="home-page">
                <div className="left">
                    <div className="hero-container">
                        <h1 className="typing-text1">{t('home.greeting')}</h1>
                        <p className="fade-in-text">{t('home.description')}</p>
                        <CVButton />
                    </div>
                </div>
                <div className="right">
                    <img src={img} alt="Adhamjon Sodiqov" className="profile-img" />
                </div>
            </div>
        </div>
    );
}
