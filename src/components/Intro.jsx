import React, { useEffect, useState } from "react";
import "./Intro.css";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import devAnimation from "../assets/dev.json";
import { motion } from "framer-motion";

export default function Intro() {

    const [start, setStart] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        // 🔥 kichik delay — intro “chiroyli ochiladi”
        const timer = setTimeout(() => {
            setStart(true);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="intro">

            <div className="intro-bg"></div>

            <div className="intro-container">

                {/* LEFT */}
                <motion.div
                    className="intro-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={start ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >

                    <h1 className="intro-name">
                        Adhamjon Sodiqov
                    </h1>

                    {start && (
                        <TypeAnimation
                            sequence={[
                                "Frontend Developer",
                                2000,
                                "React Specialist",
                                2000,
                                "UI/UX Enthusiast",
                                2000,
                            ]}
                            speed={60}
                            repeat={Infinity}
                            className="intro-type"
                        />
                    )}

                    <p className="intro-desc">
                        Zamonaviy, tezkor va chiroyli web interfeyslar yaratadigan frontend developer.
                        React asosida real loyihalar ustida ishlayman.
                    </p>

                </motion.div>

                {/* RIGHT */}
                <motion.div
                    className="intro-right"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={start ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1 }}
                >

                    <div className="intro-animation">
                        <Lottie animationData={devAnimation} loop />
                    </div>

                </motion.div>

            </div>

        </section>
    );
}