import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

export default function Skills() {

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

            <div className="skills-bg"></div>

            <div className="skills-container">

                {/* TITLE */}
                <motion.h2
                    className="skills-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Mening ko‘nikmalarim ⚡
                </motion.h2>

                {/* GRID */}
                <div className="skills-grid">

                    {skills.map((skill, index) => (

                        <motion.div
                            className="skill-card"
                            key={index}

                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}

                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                                ease: "easeOut"
                            }}

                            viewport={{ once: true, amount: 0.2 }}

                            whileHover={{
                                scale: 1.06,
                                y: -6
                            }}

                            whileTap={{ scale: 0.98 }}
                        >

                            <div className="skill-top">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-value">{skill.value}%</span>
                            </div>

                            <div className="skill-bar">

                                <motion.div
                                    className="skill-fill"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.value}%` }}
                                    transition={{
                                        duration: 1.2,
                                        ease: "easeOut",
                                        delay: 0.2
                                    }}
                                />

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}