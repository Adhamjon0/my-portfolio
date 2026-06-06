import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";

import uzumMarket from "../pages/photos/uzum.jpg";
import samtourImg from "../pages/photos/reg.jpg";
import velora from "../pages/photos/velor.png";
import tg from "../pages/photos/tg.webp";

export default function Portfolio() {

    const projects = [
        {
            name: "Uzum Market",
            description: "E-commerce platform for buying and selling products.",
            img: uzumMarket,
            link: "https://uzum-market-psi.vercel.app/"
        },
        {
            name: "Adam Voyage",
            description: "Travel booking & exploration platform.",
            img: samtourImg,
            link: "https://samtour.vercel.app/"
        },
        {
            name: "Telegram Clone",
            description: "Real-time messaging app with modern UI.",
            img: tg,
            link: "https://telegram-app-eosin.vercel.app/"
        },
        {
            name: "Velora",
            description: "Modern fashion & lifestyle e-commerce experience.",
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
                    <h1>Mening loyihalarim</h1>
                    <p>Real dunyo uchun yaratilgan digital tajribalar</p>
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
                                    <span>View Project</span>
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