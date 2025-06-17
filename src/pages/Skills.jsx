import React from 'react';
import './Skills.css';
import { useTranslation } from 'react-i18next';

export default function Skills() {
    const { t } = useTranslation();

    const skills = [
        { name: 'HTML', value: 90 },
        { name: 'CSS', value: 90 },
        { name: 'JavaScript', value: 80 },
        { name: 'React', value: 75 },
        { name: 'C#', value: 60 },
        { name: 'Python', value: 50 },
    ];

    return (
        <div className="skills-section">
            <div className="skills-container">
                <h2 className="skills-title">{t("skills.title")}</h2>
                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <div className="skill-item" key={index}>
                            <label>{skill.name}</label>
                            <input
                                type="range"
                                value={skill.value}
                                max="100"
                                readOnly
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
