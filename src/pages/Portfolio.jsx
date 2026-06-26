import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import uzumMarket from "../pages/photos/uzum.jpg";
import samtourImg from "../pages/photos/reg.jpg";
import velora from "../pages/photos/velor.png";
import tg from "../pages/photos/tg.webp";

export default function Portfolio() {

    const { t } = useTranslation();

    const projects = [
        {
            name: "Uzum Market",
            description: t("portfolio.projects.uzum"),
            img: uzumMarket,
            link: "https://uzum-market-psi.vercel.app/"
        },
        {
            name: "Adam Voyage",
            description: t("portfolio.projects.adamVoyage"),
            img: samtourImg,
            link: "https://samtour.vercel.app/"
        },
        {
            name: "Telegram Clone",
            description: t("portfolio.projects.telegram"),
            img: tg,
            link: "https://telegram-app-eosin.vercel.app/"
        },
        {
            name: "Velora",
            description: t("portfolio.projects.velora"),
            img: velora,
            link: "https://velora-plum-one.vercel.app/#gallery"
        }
    ];

    return (
        <section className="portfolio" id="portfolio">

            <div className="portfolio-bg"></div>

            <div className="portfolio-container">

                {/* HEADER */}
                <motion.div
                    className="portfolio-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h1>{t("portfolio.title")}</h1>
                    <p>{t("portfolio.subtitle")}</p>
                </motion.div>

                {/* GRID */}
                <div className="portfolio-grid">

                    {projects.map((project, i) => (

                        <motion.a
                            key={i}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="portfolio-card"

                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}

                            transition={{
                                duration: 0.5,
                                delay: i * 0.12,
                                ease: "easeOut"
                            }}

                            viewport={{ once: true, amount: 0.2 }}

                            whileHover={{
                                scale: 1.05,
                                y: -8
                            }}

                            whileTap={{ scale: 0.97 }}
                        >

                            <div className="img-box">
                                <img src={project.img} alt={project.name} />
                                <div className="overlay"></div>
                            </div>

                            <div className="card-body">
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>

                                <div className="card-footer">
                                    <span>{t("portfolio.viewProject")}</span>
                                    <span className="arrow">→</span>
                                </div>
                            </div>

                        </motion.a>

                    ))}

                </div>

            </div>

        </section>
    );
}