import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";
import { useTranslation } from "react-i18next";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("home");
    const { t, i18n } = useTranslation();

    // NAV ITEMS (stable)
    const navItems = React.useMemo(
        () => [
            { id: "home", label: t("header.home") },
            { id: "about", label: t("header.about") },
            { id: "portfolio", label: t("header.portfolio") },
            { id: "skills", label: t("header.skills") },
            { id: "contact", label: t("header.contact") },
        ],
        [t]
    );
    const scrollToSection = (id) => {
        const el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }

        setMenuOpen(false);
    };

    // ACTIVE SECTION TRACKING
    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

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
                threshold: 0.55,
            }
        );

        sections.forEach((sec) => observer.observe(sec));

        return () => {
            sections.forEach((sec) => observer.unobserve(sec));
        };
    }, [navItems]);

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
                    </ul>

                    {/* LANGUAGE SELECT */}
                    <div className="lang-item">
                        <select
                            value={i18n.language}
                            onChange={(e) => {
                                i18n.changeLanguage(e.target.value);
                            }}
                        >
                            <option value="uz">🇺🇿 UZ</option>
                            <option value="en">🇺🇸 EN</option>
                            <option value="fr">🇫🇷 FR</option>
                            <option value="ru">🇷🇺 RU</option>
                        </select>
                    </div>
                </nav>

                {/* MENU ICON */}
                <div
                    className="menu-icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </div>

            </div>

            {menuOpen && (
                <div
                    className="overlay"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </header>
    );
}