import React from "react";
import "./About.css";
import img2 from "../pages/photos/its me.jpg";
import { motion } from "framer-motion";

export default function About() {
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
                        Men haqimda ✨
                    </motion.h2>

                    {/* CARDS */}
                    <div className="about-cards">

                        <motion.div
                            className="about-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h3>👨‍💻 Frontend Developer</h3>
                            <p>
                                React, JavaScript, HTML va CSS asosida zamonaviy UI/UX interfeyslar yarataman.
                            </p>
                        </motion.div>

                        <motion.div
                            className="about-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3>🎯 Maqsadli inson</h3>
                            <p>
                                Har bir loyihani mukammallik darajasiga olib chiqishga harakat qilaman.
                            </p>
                        </motion.div>

                        <motion.div
                            className="about-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h3>🌍 Kelajak rejasi</h3>
                            <p>
                                IT va turizmni birlashtirib global digital xizmatlar yaratish.
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

                        <p>Men — Adhamjon Sodiqov, frontend developer sifatida zamonaviy web-interfeyslar yarataman.</p>
                        <br />

                        <p>Ma’qsadim — foydalanuvchida hissiyot uyg‘otadigan professional digital mahsulotlar yaratish.</p>
                        <br />

                        <p>React, JavaScript va UI/UX dizayn orqali real loyihalar ustida ishlayapman.</p>
                        <br />

                        <p>“Adam Voyage” loyihasi orqali real product struktura va dizayn tizimini o‘rgandim.</p>
                        <br />

                        <p>Har bir loyiha — bu men uchun o‘sish va yangi daraja.</p>
                        <br />

                        <p>Kelajakda global IT brend yaratish asosiy maqsadim.</p>

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