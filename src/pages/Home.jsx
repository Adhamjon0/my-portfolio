import React from 'react';
import './Home.css';
import img from '../pages/photos/adam-bmw.jpg';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
    const { t, i18n } = useTranslation(); // i18n kerak
    const { theme } = useTheme();

    // Tilga qarab kerakli CV faylni olish
    const cvFileName = `/cv-${i18n.language}.pdf`;

    return (
        <div className={`home-container ${theme}`}>
            <div className="home-page">
                <div className="left">
                    <div className="hero-container">
                        <h1 className="typing-text1">{t('home.greeting')}</h1>
                        <p className="fade-in-text">
                            {t('home.description')}
                        </p>

                        {/* ✅ CV yuklash tugmasi */}
                        <a
                            href={cvFileName}
                            download
                            className={`download-cv-button ${theme === 'dark'
                                    ? 'text-[#00ffcc] border-[#00ffcc] hover:bg-[#00ffcc] hover:text-[#121212]'
                                    : 'text-[#121212] border-[#121212] hover:bg-[#121212] hover:text-white'
                                }`}
                        >
                            {t('home.downloadCV')}
                        </a>
                    </div>
                </div>
                <div className="right">
                    <img src={img} alt="Adhamjon Sodiqov" className="profile-img" />
                </div>
            </div>
        </div>
    );
}
