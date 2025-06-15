import "./Header.css"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Header() {
    const { t, i18n } = useTranslation();

    const handleChangeLang = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className="header">
            <div className="header-container">
                {/* Logo */}
                <div className="header__logo">
                    <h1 className="logo">
                        <Link to="/" className="logo__link">A.S</Link>
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="header__nav">
                    <ul className="nav__list">
                        <li className="nav__item"><Link to="/about" className="nav__link">{t("header.about")}</Link></li>
                        <li className="nav__item"><Link to="/portfolio" className="nav__link">{t("header.portfolio")}</Link></li>
                        <li className="nav__item"><Link to="/skill" className="nav__link">{t("header.skills")}</Link></li>
                        <li className="nav__item"><Link to="/contact" className="nav__link">{t("header.contact")}</Link></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <select name="lang" onChange={handleChangeLang} value={i18n.language}>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="uz">Uzbek</option>
                        <option value="ru">Russian</option>efewf
                    </select>
                </div>
            </div>
        </div>
    )
}
