import React from "react";
import { useTranslation } from "react-i18next";
import "./CVButton.css";

export default function CVButton() {
    const { i18n, t } = useTranslation();

    const getCVLink = () => {
        const lang = i18n.language || "en";
        return process.env.PUBLIC_URL + `/cv-${lang}.pdf`;
    };

    return (
        <a
            href={getCVLink()}
            download
            className="cv-btn"
        >
            {t("home.downloadCV")}
        </a>
    );
}