import React from "react";
import "./About.css";
import img2 from "../pages/photos/its me.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {

    const { t } = useTranslation();

    return (
        <section className="about" id="about">

            <div className="about-bg"></div>

            <div className="about-container">

                {/* LEFT */}
                <motion.div
                    className="about-left"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                >

                    <motion.h2
                        className="about-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {t("about.title")}
                    </motion.h2>

                    {/* CARDS */}
                    <div className="about-cards">

                        <motion.div
                            className="about-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h3>👨‍💻 {t("about.card1.title")}</h3>
                            <p>
                                {t("about.card1.desc")}
                            </p>
                        </motion.div>

                        <motion.div
                            className="about-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3>🎯 {t("about.card2.title")}</h3>
                            <p>
                                {t("about.card2.desc")}
                            </p>
                        </motion.div>

                        <motion.div
                            className="about-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h3>🌍 {t("about.card3.title")}</h3>
                            <p>
                                {t("about.card3.desc")}
                            </p>
                        </motion.div>

                    </div>

                    {/* STORY */}
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        <p>{t("about.story1")}</p>
                        <br />

                        <p>{t("about.story2")}</p>
                        <br />

                        <p>{t("about.story3")}</p>
                        <br />

                        <p>{t("about.story4")}</p>
                        <br />

                        <p>{t("about.story5")}</p>
                        <br />

                        <p>{t("about.story6")}</p>

                    </motion.div>

                </motion.div>

                {/* RIGHT */}
                <motion.div
                    className="about-right"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                >

                    <div className="image-frame">
                        <img src={img2} alt="Adhamjon" />
                        <div className="glow"></div>
                    </div>

                </motion.div>

            </div>

        </section>
    );
}