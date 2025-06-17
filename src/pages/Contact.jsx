import React from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const sendToTelegram = async (name, email, subject, message) => {
        const token = '7962235971:AAE0wF3vE3vMYOjKK2VK6kVc_1oMJL36sl4';
        const chatId = '6468423303';
        const text = `📩 Yangi xabar:\n\n👤 Ismi: ${name}\n📧 Email: ${email}\n📝 Mavzu: ${subject}\n💬 Xabar: ${message}`;

        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text
            })
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;

        await sendToTelegram(name, email, subject, message);
        alert(t('contact.alert'));
        e.target.reset();
    };

    return (
        <div className={`contact-container ${theme}`}>
            <h1 className="contact-title">{t('contact.title')}</h1>
            <div className='contact'>
                <div className='cnt-left'>
                    <ul>
                        <li>{t('contact.phone')}</li>
                        <p>+998 90 101 24 70</p>

                        <li>{t('contact.email')}</li>
                        <p>adhamjonsodiqov03@gmail.com</p>

                        <li>{t('contact.address')}</li>
                        <p>Samarkand, Uzbekistan</p>
                    </ul>
                </div>

                <div className='cnt-right'>
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
    )
}