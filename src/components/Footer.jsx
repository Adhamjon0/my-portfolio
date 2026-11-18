import React from "react";
import { motion } from "framer-motion";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTelegramPlane,
    FaGithub,
    FaWhatsapp,
} from "react-icons/fa";
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

    return (
        <footer className="footer">
            <div className="footer-bg" aria-hidden="true" />

            <div className="footer-container">
                <motion.h2
                    className="footer-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    ✨ {t("footer.motivation")}
                </motion.h2>

                <motion.p
                    className="footer-sub"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    🚀 “Great design is not just seen — it is felt.”
                </motion.p>

                <div className="socials" aria-label="Ijtimoiy tarmoqlar">
                    {socials.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            title={social.name}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.07 }}
                            whileHover={{ scale: 1.12, y: -4 }}
                            whileTap={{ scale: 0.94 }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>

                <div className="line" />

                <p className="copyright">
                    © {new Date().getFullYear()}{" "}
                    <span>Adhamjon Portfolio</span> • All rights reserved
                </p>
            </div>
        </footer>
    );
}