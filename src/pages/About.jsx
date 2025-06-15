import React from 'react';
import './About.css';
import img2 from "../pages/photos/its me.jpg";
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <div className="about-container">
            <div className="about-content">
                <section className="about-section">
                    <h2 className="about-title">{t("about.title")}</h2>

                    <p className="about-text delay-1">{t("about.p1")}</p>
                    <p className="about-text delay-2">{t("about.p2")}</p>
                    <p className="about-text delay-3">{t("about.p3")}</p>
                    <p className="about-text delay-4">{t("about.p4")}</p>
                    <p className="about-text delay-5">{t("about.p5")}</p>
                </section>

                <div className="about-image">
                    <img src={img2} alt="Adhamjon Sodiqov" className="profile-img" />
                </div>
            </div>
        </div>
    );
}
