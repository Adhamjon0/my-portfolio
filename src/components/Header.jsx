
import React, { useState, useEffect, useMemo } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "./Header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("home");
    const { t, i18n } = useTranslation();

    const navItems = useMemo(
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
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        setActive(id);
        setMenuOpen(false);
    };

    // Active section tracking
    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        if (!sections.length) return;

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
                threshold: 0.4,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [navItems]);

    // Close mobile menu with Escape
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <header className="header">
            <div className="header-container">

                {/* LOGO */}
                <button
                    className="logo"
                    onClick={() => scrollToSection("home")}
                    aria-label="Go to homepage"
                >
                    ADAM<span>.</span>
                </button>

                {/* NAVIGATION */}
                <nav className={`nav ${menuOpen ? "active" : ""}`}>
                    <ul className="nav-list">
                        {navItems.map((item, index) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`nav-link ${active === item.id ? "active-link" : ""
                                        }`}
                                >
                                    <span className="nav-number">
                                        0{index + 1}
                                    </span>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* LANGUAGE SELECTOR */}
                    <div className="lang-item">
                        <FiChevronDown className="lang-arrow" />

                        <select
                            value={i18n.language?.split("-")[0] || "uz"}
                            onChange={changeLanguage}
                            aria-label="Select language"
                        >
                            <option value="uz">UZ</option>
                            <option value="en">EN</option>
                            <option value="fr">FR</option>
                            <option value="ru">RU</option>
                        </select>
                    </div>
                </nav>

                {/* MOBILE MENU BUTTON */}
                <button
                    className={`menu-icon ${menuOpen ? "menu-open" : ""}`}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* MOBILE OVERLAY */}
            {menuOpen && (
                <div
                    className="overlay"
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </header>
    );
}
