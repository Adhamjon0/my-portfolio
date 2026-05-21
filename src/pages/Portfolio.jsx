import React from 'react';
import './Portfolio.css';
import uzumMarket from '../pages/photos/uzum.jpg';
import samtourImg from '../pages/photos/reg.jpg';
import velora from '../pages/photos/velor.png';
import tg from '../pages/photos/tg.webp';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export default function Portfolio() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const projects = [
        {
            name: "Uzum Market",
            discription: "An e-commerce platform for buying and selling products online.",
            img: uzumMarket,
            link: "https://uzum-market-psi.vercel.app/"
        },
        {
            name: "Adam Voyage",
                discription: "A travel booking website that allows users to search and book flights, hotels, and car rentals.",
            img: samtourImg,
            link: "https://samtour.vercel.app/"
        },
        {
            name: "Telegram Clone App",
                discription: "A messaging app that allows users to send messages, make voice and video calls, and share files.",
            img: tg,
            link: "https://telegram-app-eosin.vercel.app/"
        },
        {
            name: "Velora",
                discription: "A modern and stylish e-commerce website for fashion and lifestyle restaurants.",
            img: velora,
            link: "https://velora-plum-one.vercel.app/#gallery"
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
                                <p className="description">{project.discription}</p>
                                <p>{t('portfolio.viewProject', { defaultValue: 'View Project →' })}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
