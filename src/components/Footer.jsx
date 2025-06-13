import React from 'react'
import "./Footer.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <p className="copyright">&copy; 2025 My portfolio. All rights reserved.</p>
                <h3>Keep pushing forward. Your best is yet to come.</h3>
                <div className="social_media">
                    <a
                        href="https://instagram.com/__sodiqov18"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ic"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://facebook.com/AdhamjonSodiqov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ic"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://linkedin.com/in/AdhamjonSodiqov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ic"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://t.me/adhamjonsodqiov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ic"
                    >
                        <FaTelegram />
                    </a>
                </div>
            </div>
        </div>
    )
}
