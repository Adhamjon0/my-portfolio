import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";

import avatar from "../pages/photos/avatar.jpg";

import {
    BiLogoInstagram,
    BiLogoWhatsapp,
    BiLogoTelegram,
    BiLogoGithub,
    BiLogoFacebook,
} from "react-icons/bi";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.subject || !form.message) {
            setStatus("error");
            return;
        }

        setStatus("success");

        setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
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
                <h1>📩 Aloqa sahifasi</h1>
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
                            placeholder="Adhamjon"
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                        />

                        <label>📧 Email</label>
                        <input
                            placeholder="example@gmail.com"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />

                        <label>📌 Mavzu</label>
                        <input
                            placeholder="Loyiha haqida..."
                            value={form.subject}
                            onChange={(e) =>
                                setForm({ ...form, subject: e.target.value })
                            }
                        />

                        <label>💬 Xabar</label>
                        <textarea
                            placeholder="O‘z fikringizni yozing..."
                            value={form.message}
                            onChange={(e) =>
                                setForm({ ...form, message: e.target.value })
                            }
                        />

                        <button type="submit">
                            🚀 Yuborish
                        </button>

                    </form>

                </motion.div>

            </div>

        </section>
    );
}