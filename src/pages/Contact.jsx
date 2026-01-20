import React from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

import {
    BiLogoInstagram,
    BiLogoWhatsapp,
    BiLogoFacebook,
    BiLogoTelegram,
    BiLogoGithub,
} from "react-icons/bi";
import { MdEmail } from "react-icons/md";


export default function Contact() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const sendToTelegram = async (name, email, subject, message) => {
        const token = '7962235971:AAE0wF3vE3vMYOjKK2VK6kVc_1oMJL36sl4';
        const chatId = '6468423303';
        const text = `📩 Yangi xabar:\n\n👤 Ismi: ${name}\n📧 Email: ${email}\n📝 Mavzu: ${subject}\n💬 Xabar: ${message}`;

        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text })
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, subject, message } = e.target;
        await sendToTelegram(name.value, email.value, subject.value, message.value);
        alert(t('contact.alert'));
        e.target.reset();
    };

    return (
        <div className={`contact-container ${theme}`}>
            <h1 className="contact-title">{t('contact.title')}</h1>

            <div className="contact">

                {/* 🔹 PERSONAL CARD – DEVELOPER */}
                <div className="cnt-left">
                    <div className={`personal-card-inline ${theme}`}>

                        <div className="avatar-ring">
                            <img src="../pages/photos/avatar.jpg" alt="Adhamjon" />
                        </div>

                        <h2 className="pc-name">
                            Adham Sodiqov
                        </h2>

                        <p className="pc-role">
                            Frontend Developer
                        </p>

                        <div className="pc-info">
                            <p>📧 adhamjonsodiqov03@gmail.com</p>
                            <p>📞 +998 91 707 72 91</p>
                            <p>📍 Samarkand, Uzbekistan</p>
                        </div>

                        {/* SOCIAL ICONS */}
                        <div className="pc-socials">
                            <a href="mailto:adhamjonsodiqov03@gmail.com" title="Email" target="_blank" rel="noreferrer">
                                <MdEmail />
                            </a>

                            <a href="https://instagram.com/its.adhamjon" target="_blank" rel="noreferrer">
                                <BiLogoInstagram />
                            </a>

                            <a href="https://wa.me/998977077291" target="_blank" rel="noreferrer">
                                <BiLogoWhatsapp />
                            </a>

                            <a href="https://www.facebook.com/adhamjon.sodiqov.2025" title="Facebook" target="_blank" rel="noreferrer">
                                <BiLogoFacebook />
                            </a>

                            <a href="https://t.me/the_adhamjon" title="Telegram" target="_blank" rel="noreferrer">
                                <BiLogoTelegram />
                            </a>

                            <a href="https://github.com/Adhamjon0" target="_blank" rel="noreferrer">
                                <BiLogoGithub />
                            </a>
                        </div>


                        {/* DEV LINKS */}
                        <div className="pc-actions">
                            <a href="https://github.com/Adhamjon0" target="_blank" rel="noreferrer" className="pc-btn">
                                GitHub
                            </a>
                            <a href="https://vercel.com/adhamjon0s-projects" target="_blank" rel="noreferrer" className="pc-btn outline">
                                Vercel
                            </a>
                        </div>

                    </div>
                </div>


                {/* 🔹 FORM (ESKI HOLATIDA) */}
                <div className="cnt-right">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder={t('contact.fullName')} name="name" required />
                        <input type="text" placeholder={t('contact.phonePlaceholder')} name="phone" />
                        <input type="email" placeholder={t('contact.emailPlaceholder')} name="email" required />
                        <input type="text" placeholder={t('contact.subject')} name="subject" required />
                        <textarea placeholder={t('contact.message')} name="message" required></textarea>
                        <button type="submit">{t('contact.send')}</button>
                    </form>
                </div>

            </div>
        </div>
    );
}
