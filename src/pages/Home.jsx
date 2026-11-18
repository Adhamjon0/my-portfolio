
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
    ArrowUpRight,
    ArrowDown,
    Sparkles
} from "lucide-react";

import "./Home.css";
import img from "../pages/photos/adam-bmw.jpg";
import SectionReveal from "../components/SectionReveal";

const Home = () => {
    const { t } = useTranslation();

    return (
        <section className="home" id="home">

            {/* BACKGROUND */}
            <div className="home-bg"></div>
            <div className="home-grid"></div>

            <div className="home-container">

                {/* LEFT CONTENT */}
                <SectionReveal>
                    <motion.div
                        className="home-left"
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        <div className="home-label">
                            <span className="home-label-dot"></span>
                            <span>PERSONAL PORTFOLIO</span>
                            <span className="home-label-line"></span>
                        </div>

                        <div className="home-intro">
                            <span className="home-small-text">
                                HELLO, I'M
                            </span>

                            <h1 className="home-title">
                                ADHAMJON
                                <span>SODIQOV<span className="gold-dot">.</span></span>
                            </h1>
                        </div>

                        <div className="home-role">
                            <Sparkles size={17} />
                            <span>{t("home.tag1")}</span>
                            <span className="role-divider">/</span>
                            <span>{t("home.tag2")}</span>
                        </div>

                        <p className="home-description">
                            {t("home.description")}
                        </p>

                        <div className="home-actions">

                            <a href="#portfolio" className="home-primary-btn">
                                <span>Explore my work</span>
                                <ArrowUpRight size={19} />
                            </a>

                            <a href="#contact" className="home-secondary-btn">
                                Get in touch
                                <span>↗</span>
                            </a>

                        </div>

                        <div className="home-bottom">
                            <div className="home-bottom-item">
                                <span className="bottom-label">SPECIALIZATION</span>
                                <span className="bottom-value">FRONTEND DEVELOPMENT</span>
                            </div>

                            <div className="home-bottom-item">
                                <span className="bottom-label">LOCATION</span>
                                <span className="bottom-value">UZBEKISTAN</span>
                            </div>
                        </div>

                    </motion.div>
                </SectionReveal>

                {/* RIGHT IMAGE */}
                <SectionReveal>
                    <motion.div
                        className="home-right"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >

                        <div className="home-image-wrapper">

                            <div className="image-gold-frame"></div>

                            <div className="image-card">
                                <img
                                    src={img}
                                    alt="Adhamjon Sodiqov"
                                />

                                <div className="image-gradient"></div>

                                <div className="image-top-label">
                                    <span>01 — PERSONAL IDENTITY</span>
                                    <span>2026</span>
                                </div>

                                <div className="image-content">
                                    <span>CREATIVE MINDSET</span>
                                    <h2>BUILD.</h2>
                                    <h2 className="image-gold-text">CREATE.</h2>
                                </div>
                            </div>

                            <div className="image-floating-card">
                                <span className="floating-star">✦</span>
                                <div>
                                    <span className="floating-title">DESIGN</span>
                                    <span className="floating-subtitle">
                                        WITH PURPOSE.
                                    </span>
                                </div>
                            </div>

                            <div className="image-side-text">
                                ADHAMJON SODIQOV — DEVELOPER
                            </div>

                        </div>

                    </motion.div>
                </SectionReveal>

            </div>

            {/* SCROLL */}
            <a href="#about" className="home-scroll">
                <span>SCROLL TO DISCOVER</span>
                <ArrowDown size={15} />
            </a>

            <div className="home-decoration">
                ADHAM / 001
            </div>

        </section>
    );
};

export default Home;
