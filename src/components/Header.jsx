import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // useLocation qo'shildi sahifa o'zgarishini tekshirish uchun
import { FiMenu } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import "./Header.css";

export default function Header() {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation(); // sahifa o'zgarishini tekshirish uchun

    // ========== MENU FUNKSIYALARI ==========
    const toggleMenu = () => setMenuOpen((s) => !s);
    const closeMenu = () => menuOpen && setMenuOpen(false);

    // ========== LANGUAGE DROPDOWN ==========
    function LanguageDropdown({ currentLang, onChange, lightMode }) {
        const [open, setOpen] = useState(false);
        const ref = useRef(null);

        const langs = [
            { code: "en", label: "English" },
            { code: "fr", label: "French" },
            { code: "uz", label: "Uzbek" },
            { code: "ru", label: "Russian" }
        ];

        useEffect(() => {
            function onDoc(e) {
                if (!ref.current) return;
                if (!ref.current.contains(e.target)) setOpen(false);
            }
            function onKey(e) {
                if (e.key === "Escape") setOpen(false);
            }
            document.addEventListener("mousedown", onDoc);
            document.addEventListener("keydown", onKey);
            return () => {
                document.removeEventListener("mousedown", onDoc);
                document.removeEventListener("keydown", onKey);
            };
        }, []);

        function toggle() {
            setOpen((s) => !s);
        }

        function pick(lang) {
            onChange(lang);
            setOpen(false);
        }

        return (
            <div
                ref={ref}
                className={`lang-dropdown ${open ? "open" : ""} ${lightMode ? "light" : ""}`}
            >
                <button
                    className="lang-dropdown__control"
                    aria-haspopup="listbox"
                    aria-expanded={open}
                    onClick={toggle}
                >
                    {langs.find((l) => l.code === currentLang)?.label || currentLang}
                    <span className="lang-arrow" aria-hidden>▾</span>
                </button>

                <ul
                    className="lang-dropdown__list"
                    role="listbox"
                    aria-activedescendant={`lang-${currentLang}`}
                    tabIndex={-1}
                >
                    {langs.map((l, i) => (
                        <li
                            key={l.code}
                            id={`lang-${l.code}`}
                            role="option"
                            aria-selected={currentLang === l.code}
                            className={`lang-dropdown__item ${currentLang === l.code ? "selected" : ""}`}
                            onClick={() => pick(l.code)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") pick(l.code);
                            }}
                            tabIndex={0}
                            style={{ transitionDelay: open ? `${i * 35}ms` : "0ms" }}
                        >
                            <span>{l.label}</span>
                            {currentLang === l.code && <span className="lang-check">✓</span>}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    // ========== CLOSE MENU WHEN CLICK OUTSIDE OR CHANGE PAGE ==========
    useEffect(() => {
        function handleClickOutside(e) {
            const nav = document.querySelector('.header__nav');
            const menuIcon = document.querySelector('.menu-icon');
            if (menuOpen && nav && !nav.contains(e.target) && !menuIcon.contains(e.target)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    // Sahifa o'zgarganda menu yopiladi
    useEffect(() => {
        if (menuOpen) setMenuOpen(false);
    }, [location]);

    return (
        <header className={`header ${theme}`}>
            <div className="header-container">

                {/* ================= LOGO ================= */}
                <div className="header__logo">
                    <h1 className="logo">
                        <Link to="/" onClick={closeMenu}>
                            A.S
                        </Link>
                    </h1>
                </div>

                {/* ================= MENU ICON (MOBILE) ================= */}
                <div className="menu-icon" onClick={toggleMenu} aria-label="Open menu" role="button">
                    <FiMenu />
                </div>

                {/* ================= MOBILE OVERLAY ================= */}
                <div
                    className={`menu-overlay ${menuOpen ? "active" : ""}`}
                    onClick={closeMenu}
                ></div>

                {/* ================= NAVIGATION ================= */}
                <nav className={`header__nav ${menuOpen ? "active" : ""}`} role="navigation" aria-label="Main Navigation">
                    <ul className="nav__list">
                        <li>
                            <Link to="/about" onClick={closeMenu} className="nav-link">
                                {t("header.about")}
                                <span className="nav-underline" aria-hidden></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio" onClick={closeMenu} className="nav-link">
                                {t("header.portfolio")}
                                <span className="nav-underline" aria-hidden></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/skill" onClick={closeMenu} className="nav-link">
                                {t("header.skills")}
                                <span className="nav-underline" aria-hidden></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={closeMenu} className="nav-link">
                                {t("header.contact")}
                                <span className="nav-underline" aria-hidden></span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* ================= LANGUAGE & THEME ================= */}
                <div className="header-actions">
                    <LanguageDropdown
                        currentLang={i18n.language}
                        onChange={(lang) => i18n.changeLanguage(lang)}
                        lightMode={theme === "light"}
                    />

                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                        {theme === "light" ? "🌞" : "🌙"}
                    </button>
                </div>

            </div>
        </header>
    );
}
