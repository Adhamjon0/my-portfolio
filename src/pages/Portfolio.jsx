import React from 'react';
import './Portfolio.css';
import uzumMarket from '../pages/photos/uzum.jpg';
import samtourImg from '../pages/photos/reg.jpg';
import tg from '../pages/photos/tg.webp';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export default function Portfolio() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const projects = [
        {
            name: "Uzum Market",
            img: uzumMarket,
            link: "https://uzum-market-psi.vercel.app/"
        },
        {
            name: "SamTour",
            img: samtourImg,
            link: "https://samtour.vercel.app/"
        },
        {
            name: "Telegram Clone App",
            img: tg,
            link: "https://telegram-app-eosin.vercel.app/"
        },
        {
            name: "Modme",
            img: "ModeMe",
            link: "https://modme-gray.vercel.app/"
        }
    ];

    return (
        <section className={`portfolio-section ${theme === 'light' ? 'light' : 'dark'}`}>
            <div className="portfolio-title">
                <h1>{t('portfolio.projects')}</h1>
                <p>{t('portfolio.subtitle', { defaultValue: 'My recent web projects' })}</p>
            </div>

            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div className="portfolio-card" key={index}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <div className="img-box">
                                <img src={project.img} alt={project.name} />
                            </div>
                            <div className="card-content">
                                <h2>{project.name}</h2>
                                <p>{t('portfolio.viewProject', { defaultValue: 'View Project →' })}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
