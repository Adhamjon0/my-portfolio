// CVButton.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './CVButton.css';

export default function CVButton() {
    const { i18n, t } = useTranslation();

    const getCVLink = () => {
        switch (i18n.language) {
            case 'uz': return '/cv/cv_uz.pdf';
            case 'ru': return '/cv/cv_ru.pdf';
            case 'fr': return '/cv/cv_fr.pdf';
            case 'en':
            default: return '/cv/cv_en.pdf';
        }
    };

    return (
        <a href={getCVLink()} download className="cv-button">
            {t('Download CV')}
        </a>
    );
}
