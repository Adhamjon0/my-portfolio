
import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";

import velora from "../pages/photos/velor.png";
import tg from "../pages/photos/tg.webp";

export default function Portfolio() {
    const { t } = useTranslation();

    const projects = [
        {
            name: "Adam Shop",
            description: t("portfolio.projects.adamShop"),
            link: "https://adam-shop-omega.vercel.app/",
            number: "01",
        },
        {
            name: "Adam Avto",
            description: t("portfolio.projects.adamAvto"),
            link: "https://adam-luxury-cars.vercel.app/",
            number: "02",
        },
        {
            name: "Velora",
            description: t("portfolio.projects.velora"),
            img: velora,
            link: "https://velora-plum-one.vercel.app/#gallery",
            number: "03",
        },
        {
            name: "Login Form",
            description: t("portfolio.projects.loginForm"),
            link: "https://login-system-five-drab.vercel.app/login",
            number: "04",
        },
        {
            name: "Adam Estate",
            description: t("portfolio.projects.adamEstate"),
            link: "https://adam-estate-khaki.vercel.app/",
            number: "05",
        },
        {
            name: "Weather App",
            description: t("portfolio.projects.weather"),
            link: "https://adam-weather-sand.vercel.app/",
            number: "06",
        },
        {
            name: "Telegram Clone",
            description: t("portfolio.projects.telegram"),
            img: tg,
            link: "https://telegram-app-eosin.vercel.app/",
            number: "07",
        },
    ];

    return (
        <section className="portfolio" id="portfolio">
            <div className="portfolio-bg" />

            <div className="portfolio-container">
                <motion.div
                    className="portfolio-header"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="portfolio-label">
                        03 — SELECTED WORK
                    </span>

                    <h2 className="portfolio-title">
                        {t("portfolio.title")}
                        <span>.</span>
                    </h2>

                    <p className="portfolio-subtitle">
                        {t("portfolio.subtitle")}
                    </p>
                </motion.div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <motion.a
                            key={project.number}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="portfolio-card"
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            viewport={{ once: true, amount: 0.15 }}
                            whileHover={{ y: -7 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="img-box">
                                {project.img ? (
                                    <img
                                        src={project.img}
                                        alt={project.name}
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="project-placeholder">
                                        <span>{project.name}</span>
                                        <small>PROJECT PREVIEW</small>
                                    </div>
                                )}

                                <div className="portfolio-overlay" />

                                <span className="project-number">
                                    {project.number}
                                </span>

                                <span className="project-open">
                                    <FiArrowUpRight />
                                </span>
                            </div>

                            <div className="card-body">
                                <div className="card-heading">
                                    <h3>{project.name}</h3>
                                    <span className="card-arrow">
                                        <FiArrowUpRight />
                                    </span>
                                </div>

                                <p>{project.description}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
