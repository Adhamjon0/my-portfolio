
import React from "react";
import "./About.css";
import img2 from "../pages/photos/its me.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    const cards = [
        {
            number: "01",
            icon: "✦",
            title: t("about.card1.title"),
            desc: t("about.card1.desc"),
        },
        {
            number: "02",
            icon: "◎",
            title: t("about.card2.title"),
            desc: t("about.card2.desc"),
        },
        {
            number: "03",
            icon: "↗",
            title: t("about.card3.title"),
            desc: t("about.card3.desc"),
        },
    ];

    const stories = [1, 2, 3, 4, 5, 6];

    return (
        <section className="about" id="about">
            <div className="about-bg" />

            <div className="about-container">

                {/* LEFT CONTENT */}
                <motion.div
                    className="about-left"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <span className="about-label">01 — ABOUT ME</span>

                    <h2 className="about-title">
                        {t("about.title")}
                        <span>.</span>
                    </h2>

                    {/* CARDS */}
                    <div className="about-cards">
                        {cards.map((card, index) => (
                            <motion.div
                                className="about-card"
                                key={card.number}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.12,
                                }}
                                viewport={{ once: true }}
                            >
                                <div className="about-card-top">
                                    <span className="about-card-number">
                                        {card.number}
                                    </span>
                                    <span className="about-card-icon">
                                        {card.icon}
                                    </span>
                                </div>

                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* STORY */}
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        {stories.map((number) => (
                            <p key={number}>
                                {t(`about.story${number}`)}
                            </p>
                        ))}
                    </motion.div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    className="about-right"
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                >
                    <div className="image-frame">
                        <img src={img2} alt="Adhamjon Sodiqov" />

                        <div className="image-overlay" />

                        <span className="image-index">
                            PERSONAL PROFILE / 001
                        </span>
                    </div>

                    <div className="about-image-caption">
                        <span>ADHAMJON SODIQOV</span>
                        <span>CREATIVE MINDSET.</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
