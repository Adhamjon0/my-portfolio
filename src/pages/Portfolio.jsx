import React from 'react';
import './Portfolio.css';
import uzumMarket from '../pages/photos/uzum.jpg';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext'; // Theme qo‘shilgan

export default function Portfolio() {
    const { t } = useTranslation();
    const { theme } = useTheme(); // theme ni olish

    return (
        <section className={`portfolio-section ${theme === 'light' ? 'light' : ''}`}>
            <div className="portfolio-container">

                {/* Project Card: Uzum Market */}
                <div className="uzum-market">
                    <h1>{t('portfolio.projects')}</h1>
                    <a href="https://uzum-market-psi.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src={uzumMarket} alt="Uzum Market Project" className="uzum_img" />
                    </a>
                </div>

                {/* Boshqa loyihalar shu yerga qo‘shiladi */}
                <div className="kunuz">
                    {/* Masalan: Kun.uz Clone, Chat App, Weather App, YouTube Clone */}
                </div>

            </div>
        </section>
    );
}
