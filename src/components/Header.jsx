import "./Header.css"
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <>
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
                            <li className="nav__item"><Link to="/about" className="nav__link">About me</Link></li>
                            <li className="nav__item"><Link to="/portfolio" className="nav__link">My portfolio</Link></li>
                            <li className="nav__item"><Link to="/skill" className="nav__link">My skills</Link></li>
                            <li className="nav__item"><Link to="/contact" className="nav__link">Contact me</Link></li>
                        </ul>
                    </nav>

                </div>
            </div>
        </>
    )
}
