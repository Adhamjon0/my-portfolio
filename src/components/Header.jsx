import "./Header.css"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FiMenu } from "react-icons/fi"
import { useState } from "react"

export default function Header() {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleChangeLang = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    return (
        <div className="header">
            <div className="header-container">
                {/* Logo */}
                <div className="header__logo">
                    <h1 className="logo">
                        <Link to="/" className="logo__link" onClick={closeMenu}>A.S</Link>
                    </h1>
                </div>

                {/* Toggle icon */}
                <div className="modal-icon" onClick={toggleMenu}>
                    <FiMenu />
                </div>

                {/* Navigation */}
                <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
                    <ul className="nav__list">
                        <li className="nav__item"><Link to="/about" className="nav__link" onClick={closeMenu}>{t("header.about")}</Link></li>
                        <li className="nav__item"><Link to="/portfolio" className="nav__link" onClick={closeMenu}>{t("header.portfolio")}</Link></li>
                        <li className="nav__item"><Link to="/skill" className="nav__link" onClick={closeMenu}>{t("header.skills")}</Link></li>
                        <li className="nav__item"><Link to="/contact" className="nav__link" onClick={closeMenu}>{t("header.contact")}</Link></li>
                    </ul>
                </nav>

                {/* Language select */}
                <div className="header-actions">
                    <select name="lang" onChange={handleChangeLang} value={i18n.language}>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="uz">Uzbek</option>
                        <option value="ru">Russian</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
