import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import avatar from "../pages/photos/avatar.jpg";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import {
    BiLogoInstagram,
    BiLogoWhatsapp,
    BiLogoTelegram,
    BiLogoGithub,
    BiLogoFacebook,
} from "react-icons/bi";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Contact() {

    const sendToTelegram = async (data) => {
        const token = process.env.REACT_APP_BOT_TOKEN;
        const chat_id = process.env.REACT_APP_CHAT_ID;


        console.log("TOKEN:", process.env.REACT_APP_BOT_TOKEN);
        console.log("CHAT:", process.env.REACT_APP_CHAT_ID);

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
                        chat_id: chat_id,
                        text: message,
                    }),
                }
            );

            return res.ok;
        } catch (error) {
            console.log("Telegram error:", error);
            return false;
        }
    };

    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newErrors = {};

        if (!form.name) newErrors.name = "Ism kiritilmagan";
        if (!form.email) newErrors.email = "Email kiritilmagan";
        if (!form.number) newErrors.number = "Telefon kiritilmagan";
        if (!form.message) newErrors.message = "Xabar kiritilmagan";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setStatus("error");
            return;
        }

        const success = await sendToTelegram(form);

        if (success) {
            setStatus("success");
            setErrors({});

            setForm({
                name: "",
                email: "",
                number: "",
                message: "",
            });

            // 🔥 ALERT QO‘SHILDI
            alert("✅ Xabaringiz muvaffaqiyatli yuborildi!");
        } else {
            setStatus("error");

            alert("❌ Xabar yuborilmadi, qayta urinib ko‘ring!");
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-bg"></div>
            {/* TITLE */}
            <motion.div
                className="contact-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>📩 Men bilan bog'laning</h1>
                <p>🚀 Loyihangiz bormi? Birga yaratamiz</p>
            </motion.div>

            <div className="contact-container">

                {/* LEFT CARD */}
                <motion.div
                    className="contact-card"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <div className="avatar">
                        <img src={avatar} alt="Adhamjon" />
                    </div>

                    <h2 className="name">✨ Adhamjon Sodiqov</h2>
                    <p className="role">🚀 Frontend Developer • UI/UX Designer</p>

                    <div className="info">

                        <p><MdEmail /> adhamjonsodiqov03@gmail.com</p>
                        <p><MdPhone /> +998 91 707 72 91</p>
                        <p><MdLocationOn /> Samarqand, Uzbekistan</p>

                    </div>

                    <div className="socials">

                        <a href="https://instagram.com/adam.dev18" target="_blank" rel="noopener noreferrer">
                            <BiLogoInstagram />
                        </a>
                        <a href="https://wa.me/998917077291" target="_blank" rel="noopener noreferrer">
                            <BiLogoWhatsapp />
                        </a>
                        <a href="https://t.me/the_adhamjon" target="_blank" rel="noopener noreferrer">
                            <BiLogoTelegram />
                        </a>
                        <a href="https://github.com/Adhamjon0" target="_blank" rel="noopener noreferrer">
                            <BiLogoGithub />
                        </a>
                        <a href="https://www.facebook.com/adhamjon.sodiqov.2025/" target="_blank" rel="noopener noreferrer">
                            <BiLogoFacebook />
                        </a>

                    </div>

                </motion.div>

                {/* RIGHT FORM */}
                <motion.div
                    className="contact-form"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >

                    <h1>📬 Men bilan bog‘laning</h1>
                    <p className="sub">✨ Xabar yuboring — tezda javob beraman</p>

                    {status === "error" && (
                        <p className="error">⚠️ Barcha maydonlarni to‘ldiring</p>
                    )}

                    {status === "success" && (
                        <p className="success">✅ Xabaringiz yuborildi</p>
                    )}

                    <form onSubmit={handleSubmit}>

                        <label>👤 Ismingiz</label>
                        <input
                            className={errors.name ? "input-error" : ""}
                            placeholder="To'liq ismingiz"
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                        />
                        {errors.name && (
                            <small className="error-text">{errors.name}</small>
                        )}

                        <label>📧 Email</label>
                        <input
                            className={errors.email ? "input-error" : ""}
                            placeholder="Email manzilingiz"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />
                        {errors.email && (
                            <small className="error-text">{errors.email}</small>
                        )}

                        <label>📌 Telefon raqam</label>

                        <div className={errors.number ? "input-error" : ""}>
                            <PhoneInput
                                defaultCountry="uz"
                                value={form.number}
                                onChange={(phone) =>
                                    setForm({
                                        ...form,
                                        number: phone,
                                    })
                                }
                            />
                        </div>

                        {errors.number && (
                            <small className="error-text">{errors.number}</small>
                        )}

                        <label>💬 Xabar</label>
                        <textarea
                            className={errors.message ? "input-error" : ""}
                            placeholder="O‘z fikringizni yozing..."
                            value={form.message}
                            onChange={(e) =>
                                setForm({ ...form, message: e.target.value })
                            }
                        />
                        {errors.message && (
                            <small className="error-text">{errors.message}</small>
                        )}

                        <button type="submit">
                            🚀 Yuborish
                        </button>

                    </form>

                </motion.div>

            </div>

        </section>
    );
}