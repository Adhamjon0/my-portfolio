
import React, { useEffect, useState } from "react";
import "./Intro.css";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import devAnimation from "../assets/dev.json";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

export default function Intro() {
    const [start, setStart] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setStart(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="intro" id="home">
            <div className="intro-bg" />

            <div className="intro-container">
                <motion.div
                    className="intro-left"
                    initial={{ opacity: 0, x: -35 }}
                    animate={start ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="intro-greeting">
                        HELLO, I'M
                    </span>

                    <h1 className="intro-name">
                        Adhamjon
                        <br />
                        <span>Sodiqov.</span>
                    </h1>

                    <div className="intro-role">
                        {start && (
                            <TypeAnimation
                                sequence={[
                                    "Frontend Developer",
                                    1500,
                                    "React Developer",
                                    1500,
                                    "UI/UX Enthusiast",
                                    1500,
                                ]}
                                speed={55}
                                deletionSpeed={70}
                                repeat={Infinity}
                                className="intro-type"
                            />
                        )}
                    </div>

                    <p className="intro-desc">
                        Building modern digital experiences.
                    </p>
                    
                </motion.div>

                <motion.div
                    className="intro-right"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={start ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1 }}
                >
                    <div className="intro-visual">
                        <div className="intro-visual-circle" />

                        <div className="intro-animation">
                            <Lottie
                                animationData={devAnimation}
                                loop
                            />
                        </div>

                        <span className="intro-visual-caption">
                            CODE · CREATE · INNOVATE
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
