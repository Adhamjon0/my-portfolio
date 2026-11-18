
import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Skills() {
    const { t } = useTranslation();

    const skills = [
        { name: "HTML", value: 90 },
        { name: "CSS", value: 90 },
        { name: "JavaScript", value: 80 },
        { name: "React", value: 75 },
        { name: "C#", value: 40 },
        { name: "Python", value: 20 },
        { name: "AI", value: 60 },
    ];

    return (
        <section className="skills" id="skills">
            <div className="skills-container">

                <motion.div
                    className="skills-heading"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="skills-label">04 — EXPERTISE</span>
                    <h2 className="skills-title">
                        {t("skills.title")}<span>.</span>
                    </h2>
                </motion.div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            className="skill-card"
                            key={skill.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="skill-top">
                                <span className="skill-name">
                                    {skill.name}
                                </span>
                                <span className="skill-value">
                                    {skill.value}%
                                </span>
                            </div>

                            <div className="skill-bar">
                                <motion.div
                                    className="skill-fill"
                                    initial={{ width: 0 }}
                                    whileInView={{
                                        width: `${skill.value}%`
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        ease: "easeOut",
                                        delay: 0.2 + index * 0.08
                                    }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
