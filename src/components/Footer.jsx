import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

import {
    SiFacebook,
    SiInstagram,
    SiLinkedin,
    SiTelegram,
    SiGithub,
    SiWhatsapp,
} from "react-icons/si";

import { useTranslation } from "react-i18next";

export default function Footer() {

    const { t } = useTranslation();

    const socials = [
        { href: "https://instagram.com/adam.dev18", icon: <SiInstagram /> },
        { href: "https://facebook.com/adhamjon.sodiqov.2025/", icon: <SiFacebook /> },
        { href: "https://www.linkedin.com/in/adhamjon-sodiqov-547371299/", icon: <SiLinkedin /> },
        { href: "https://t.me/the_adhamjon", icon: <SiTelegram /> },
        { href: "https://wa.me/998917077291", icon: <SiWhatsapp /> },
        { href: "https://github.com/Adhamjon0", icon: <SiGithub /> },
    ];

    return (
        <footer className="footer">

            <div className="footer-bg"></div>

            <div className="footer-container">

                {/* TITLE */}
                <motion.h2
                    className="footer-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    ✨ {t("footer.motivation")}
                </motion.h2>

                <p className="footer-sub">
                    🚀 “Great design is not just seen — it is felt.”
                </p>

                {/* SOCIALS */}
                <div className="socials">
                    {socials.map((s, i) => (
                        <motion.a
                            key={i}
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {s.icon}
                        </motion.a>
                    ))}
                </div>

                {/* LINE */}
                <div className="line"></div>

                {/* COPYRIGHT */}
                <p className="copyright">
                    © 2026 <span>Adhamjon Portfolio</span> • All rights reserved
                </p>

            </div>
        </footer>
    );
}