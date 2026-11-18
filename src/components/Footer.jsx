
import React from "react";
import { motion } from "framer-motion";
import {
    FaInstagram,
    FaLinkedinIn,
    FaTelegramPlane,
    FaGithub,
    FaWhatsapp,
    FaFacebookF,
} from "react-icons/fa";
import { FiArrowUpRight, FiArrowUp } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
    const { t } = useTranslation();

    const socials = [
        {
            name: "Instagram",
            href: "https://instagram.com/adam.dev18",
            icon: <FaInstagram />,
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/adhamjon.sodiqov.2025/",
            icon: <FaFacebookF />,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/adhamjon-sodiqov-547371299/",
            icon: <FaLinkedinIn />,
        },
        {
            name: "Telegram",
            href: "https://t.me/the_adhamjon",
            icon: <FaTelegramPlane />,
        },
        {
            name: "WhatsApp",
            href: "https://wa.me/998917077291",
            icon: <FaWhatsapp />,
        },
        {
            name: "GitHub",
            href: "https://github.com/Adhamjon0",
            icon: <FaGithub />,
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer">
            <div className="footer-glow" aria-hidden="true" />

            <div className="footer-container">

                {/* TOP SECTION */}
                <motion.div
                    className="footer-top"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="footer-brand">
                        <span className="footer-overline">
                            THANK YOU FOR VISITING
                        </span>

                        <h2 className="footer-logo">
                            ADAM<span>.</span>
                        </h2>

                        <p className="footer-description">
                            {t("footer.motivation")}
                        </p>
                    </div>

                    <div className="footer-message">
                        <span className="footer-message-label">
                            A THOUGHT TO REMEMBER
                        </span>

                        <p>
                            “Great design is not just seen —
                            <span> it is felt.</span>”
                        </p>
                    </div>
                </motion.div>

                <div className="footer-divider" />

                {/* SOCIAL SECTION */}
                <div className="footer-middle">
                    <div className="footer-social-info">
                        <span className="footer-section-label">
                            LET'S CONNECT
                        </span>

                        <p>Find me across the digital world.</p>
                    </div>

                    <div className="socials">
                        {socials.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                title={social.name}
                                className="social-link"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.07,
                                }}
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.94 }}
                            >
                                {social.icon}
                                <FiArrowUpRight className="social-arrow" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="footer-divider" />

                {/* BOTTOM SECTION */}
                <div className="footer-bottom">
                    <p className="copyright">
                        © {new Date().getFullYear()}{" "}
                        <span>ADHAMJON SODIQOV</span>
                        <span className="copyright-dot">.</span>
                        All rights reserved.
                    </p>

                    <button
                        className="back-to-top"
                        onClick={scrollToTop}
                        aria-label="Back to top"
                    >
                        BACK TO TOP
                        <FiArrowUp />
                    </button>
                </div>

                <div className="footer-index">
                    <span>DESIGNED WITH PURPOSE.</span>
                    <span>ADAM / 001</span>
                </div>
            </div>
        </footer>
    );
}
