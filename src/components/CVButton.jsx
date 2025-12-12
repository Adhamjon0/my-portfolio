import React from "react";
import { useTranslation } from "react-i18next";
import "./CVButton.css";
import { useTheme } from '../context/ThemeContext';

export default function CVButton() {
    const { i18n, t } = useTranslation();
    const { theme } = useTheme();

    // PDF faylini til tartibiga mos qaytaradi
    const getCVLink = () => {
        const lang = i18n.language || "en"; // default til
        return process.env.PUBLIC_URL + `/cv-${lang}.pdf`;
    };

    return (
        <a
            href={getCVLink()}
            download
            target="_blank"
            rel="noopener noreferrer"
            className={`download-cv-button ${theme === 'dark'
                ? 'text-[#00ffcc] border-[#00ffcc] hover:bg-[#00ffcc] hover:text-[#121212]'
                : 'text-[#121212] border-[#121212] hover:bg-[#121212] hover:text-white'
                }`}
        >
            {t("home.downloadCV")}
        </a>
    );
}
