import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "./Header.css";

export default function Header() {
    const { i18n } = useTranslation();

    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("home");

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "portfolio", label: "Portfolio" },
        { id: "skills", label: "Skills" },
        { id: "contact", label: "Contact" },
    ];

    const langs = [
        { code: "en", label: "EN" },
        { code: "uz", label: "UZ" },
        { code: "ru", label: "RU" },
        { code: "fr", label: "FR" },
    ];

    const scrollToSection = (id) => {
        const el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }

        setMenuOpen(false);
    };

    // 🔥 AUTO ACTIVE SCROLL TRACKING
    useEffect(() => {
        const sections = navItems.map((item) =>
            document.getElementById(item.id)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                root: null,
                threshold: 0.55, // 55% ko‘rinsa active bo‘ladi
            }
        );

        sections.forEach((sec) => {
            if (sec) observer.observe(sec);
        });

        return () => {
            sections.forEach((sec) => {
                if (sec) observer.unobserve(sec);
            });
        };
    }, []);

    return (
        <header className="header">
            <div className="header-container">

                {/* LOGO */}
                <div className="logo" onClick={() => scrollToSection("home")}>
                    Adam.
                </div>

                {/* NAV */}
                <nav className={`nav ${menuOpen ? "active" : ""}`}>
                    <ul>

                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={active === item.id ? "active-link" : ""}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}

                        {/* LANGUAGE */}
                        <li className="lang-item">
                            <select
                                value={i18n.language}
                                onChange={(e) => i18n.changeLanguage(e.target.value)}
                            >
                                {langs.map((l) => (
                                    <option key={l.code} value={l.code}>
                                        {l.label}
                                    </option>
                                ))}
                            </select>
                        </li>

                    </ul>
                </nav>

                {/* MENU ICON */}
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </div>

            </div>

            {menuOpen && (
                <div className="overlay" onClick={() => setMenuOpen(false)} />
            )}
        </header>
    );
}