
import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import avatar from "../pages/photos/avatar.jpg";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useTranslation } from "react-i18next";

import {
    BiLogoInstagram,
    BiLogoWhatsapp,
    BiLogoTelegram,
    BiLogoGithub,
    BiLogoFacebook,
} from "react-icons/bi";

import {
    MdEmail,
    MdLocationOn,
    MdPhone,
} from "react-icons/md";

import { FiArrowUpRight, FiSend } from "react-icons/fi";

export default function Contact() {
    const { t } = useTranslation();

    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const sendToTelegram = async (data) => {
        const token = import.meta.env.VITE_BOT_TOKEN;
        const chat_id = import.meta.env.VITE_CHAT_ID;

        if (!token || !chat_id) {
            console.error("Telegram environment variables are missing.");
            return false;
        }

        const message = `
📩 Yangi xabar!

👤 Ism: ${data.name}
📧 Email: ${data.email}
📱 Telefon: ${data.number}
💬 Xabar: ${data.message}
        `;

        try {
            const res = await fetch(
                `https://api.telegram.org/bot${token}/sendMessage`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        chat_id,
                        text: message,
                    }),
                }
            );

            return res.ok;
        } catch (error) {
            console.error("Telegram error:", error);
            return false;
        }
    };

    const handleChange = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [field]: "",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = t("contact.errors.name");
        }

        if (!form.email.trim()) {
            newErrors.email = t("contact.errors.email");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = t("contact.errors.email");
        }

        if (!form.number.trim()) {
            newErrors.number = t("contact.errors.phone");
        }

        if (!form.message.trim()) {
            newErrors.message = t("contact.errors.message");
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setStatus("error");
            return;
        }

        setLoading(true);
        setStatus("");

        const success = await sendToTelegram(form);

        setLoading(false);

        if (success) {
            setStatus("success");
            setErrors({});

            setForm({
                name: "",
                email: "",
                number: "",
                message: "",
            });

            alert(t("contact.alertSuccess"));
        } else {
            setStatus("error");
            alert(t("contact.alertError"));
        }
    };

    const socials = [
        {
            icon: <BiLogoInstagram />,
            link: "https://instagram.com/adam.dev18",
            label: "Instagram",
        },
        {
            icon: <BiLogoWhatsapp />,
            link: "https://wa.me/998917077291",
            label: "WhatsApp",
        },
        {
            icon: <BiLogoTelegram />,
            link: "https://t.me/the_adhamjon",
            label: "Telegram",
        },
        {
            icon: <BiLogoGithub />,
            link: "https://github.com/Adhamjon0",
            label: "GitHub",
        },
        {
            icon: <BiLogoFacebook />,
            link: "https://www.facebook.com/adhamjon.sodiqov.2025/",
            label: "Facebook",
        },
    ];

    return (
        <section className="contact" id="contact">
            <div className="contact-container">

                <motion.div
                    className="contact-heading"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="contact-label">05 — GET IN TOUCH</span>
                    <h2>
                        {t("contact.title")}<span>.</span>
                    </h2>
                    <p>{t("contact.subtitle")}</p>
                </motion.div>

                <div className="contact-content">

                    {/* PROFILE */}

                    <motion.div
                        className="contact-card"
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="contact-profile">
                            <div className="contact-avatar">
                                <img src={avatar} alt="Adhamjon Sodiqov" />
                            </div>

                            <h3>Adhamjon Sodiqov</h3>
                            <p>{t("contact.role")}</p>
                        </div>

                        <div className="contact-info">
                            <a href="mailto:adhamjonsodiqov03@gmail.com">
                                <MdEmail />
                                <span>adhamjonsodiqov03@gmail.com</span>
                            </a>

                            <a href="tel:+998917077291">
                                <MdPhone />
                                <span>+998 91 707 72 91</span>
                            </a>

                            <div>
                                <MdLocationOn />
                                <span>Samarqand, Uzbekistan</span>
                            </div>
                        </div>

                        <div className="contact-socials">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                    <FiArrowUpRight className="social-arrow" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* FORM */}

                    <motion.div
                        className="contact-form"
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3>{t("contact.formTitle")}</h3>
                        <p className="contact-form-sub">
                            {t("contact.formSubtitle")}
                        </p>

                        {status === "error" && (
                            <p className="contact-status error">
                                {t("contact.statusError")}
                            </p>
                        )}

                        {status === "success" && (
                            <p className="contact-status success">
                                {t("contact.statusSuccess")}
                            </p>
                        )}

                        <form onSubmit={handleSubmit} noValidate>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>{t("contact.name")}</label>
                                    <input
                                        type="text"
                                        className={errors.name ? "input-error" : ""}
                                        placeholder={t("contact.namePlaceholder")}
                                        value={form.name}
                                        onChange={(e) =>
                                            handleChange("name", e.target.value)
                                        }
                                    />
                                    {errors.name && (
                                        <small>{errors.name}</small>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label>{t("contact.email")}</label>
                                    <input
                                        type="email"
                                        className={errors.email ? "input-error" : ""}
                                        placeholder={t("contact.emailPlaceholder")}
                                        value={form.email}
                                        onChange={(e) =>
                                            handleChange("email", e.target.value)
                                        }
                                    />
                                    {errors.email && (
                                        <small>{errors.email}</small>
                                    )}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>{t("contact.phone")}</label>
                                <div className={`phone-wrapper ${errors.number ? "input-error" : ""}`}>
                                    <PhoneInput
                                        defaultCountry="uz"
                                        value={form.number}
                                        onChange={(phone) =>
                                            handleChange("number", phone)
                                        }
                                    />
                                </div>
                                {errors.number && (
                                    <small>{errors.number}</small>
                                )}
                            </div>

                            <div className="form-group">
                                <label>{t("contact.message")}</label>
                                <textarea
                                    className={errors.message ? "input-error" : ""}
                                    placeholder={t("contact.messagePlaceholder")}
                                    value={form.message}
                                    onChange={(e) =>
                                        handleChange("message", e.target.value)
                                    }
                                    rows="5"
                                />
                                {errors.message && (
                                    <small>{errors.message}</small>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="contact-submit"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : t("contact.send")}
                                <FiSend />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
