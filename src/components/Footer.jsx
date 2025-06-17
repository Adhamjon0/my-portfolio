// Footer.jsx
import React from 'react'
import "./Footer.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className='footer'>
            <div className='footer-container'>
                <p className="copyright">&copy; 2025 {t("footer.portfolio")}</p>
                <h3>{t("footer.motivation")}</h3>
                <div className="social_media">
                    <a href="https://instagram.com/__sodiqov18" target="_blank" rel="noopener noreferrer" className="ic"><FaInstagram /></a>
                    <a href="https://www.facebook.com/adhamjon.sodiqov.2025" target="_blank" rel="noopener noreferrer" className="ic"><FaFacebook /></a>
                    <a href="https://www.linkedin.com/in/adhamjon-sodiqov-547371299/" target="_blank" rel="noopener noreferrer" className="ic"><FaLinkedin /></a>
                    <a href="https://t.me/adhamjonsodiqov18" target="_blank" rel="noopener noreferrer" className="ic"><FaTelegram /></a>
                    <a href="https://github.com/Adhamjon0" target="_blank" rel="noopener noreferrer" className="ic"><FaGithub /></a>
                </div>
            </div>
        </div>
    )
}
