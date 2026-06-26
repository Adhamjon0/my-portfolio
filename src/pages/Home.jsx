import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Home.css";
import img from "../pages/photos/adam-bmw.jpg";
import CVButton from "../components/CVButton";
import SectionReveal from "../components/SectionReveal";

const Home = () => {

    const { t } = useTranslation();

    return (
        <section className="home" id="home">

            <div className="home-bg"></div>

            <div className="home-container">

                {/* LEFT */}
                <SectionReveal>
                    <motion.div
                        className="home-left"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >

                        <div className="tags">
                            <span>🚀 {t("home.tag1")}</span>
                            <span>🌍 {t("home.tag2")}</span>
                        </div>

                        <h1 className="title">
                            {t("home.title")}
                        </h1>

                        <p className="desc">
                            {t("home.description")}
                        </p>

                        <div className="actions">
                            <CVButton />
                        </div>

                    </motion.div>
                </SectionReveal>

                {/* RIGHT */}
                <SectionReveal>
                    <motion.div
                        className="home-right"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >

                        <div className="image-card">
                            <img src={img} alt="Adhamjon" />
                            <div className="glow-border"></div>
                        </div>

                    </motion.div>
                </SectionReveal>

            </div>
        </section>
    );
};

export default Home;