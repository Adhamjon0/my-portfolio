// Footer.jsx
import React from 'react'
import { motion } from 'framer-motion'
import "./Footer.css"
import {
    SiFacebook,
    SiInstagram,
    SiLinkedin,
    SiTelegram,
    SiGithub,
    SiWhatsapp,
    SiVercel
} from 'react-icons/si'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation();

    // Animatsiya sozlamalari
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const iconHover = {
        hover: { scale: 1.25, rotate: 5, transition: { type: "spring", stiffness: 300 } }
    };

    return (
        <motion.footer 
            className="footer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <motion.div 
                className='footer-container'
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.p className="copyright" variants={fadeUp}>
                    &copy; 2025 {t("footer.portfolio")}
                </motion.p>

                <motion.h3 variants={fadeUp}>
                    {t("footer.motivation")}
                </motion.h3>

                <motion.div className="social_media" variants={fadeUp}>
                    {[
                        { href: "https://instagram.com/its.adhamjon", icon: <SiInstagram /> },
                        { href: "https://www.facebook.com/adhamjon.sodiqov.2025", icon: <SiFacebook /> },
                        { href: "https://www.linkedin.com/in/adhamjon-sodiqov-547371299/", icon: <SiLinkedin /> },
                        { href: "https://t.me/the_adhamjon", icon: <SiTelegram /> },
                        { href: "https://wa.me/998917077291", icon: <SiWhatsapp /> },
                        { href: "https://github.com/Adhamjon0", icon: <SiGithub /> },
                        { href: "https://vercel.com/adhamjon0s-projects", icon: <SiVercel /> },
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ic"
                            variants={iconHover}
                            whileHover="hover"
                            whileTap={{ scale: 0.9 }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </motion.footer>
    )
}
