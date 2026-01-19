import React from 'react';
import './Skills.css';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export default function Skills() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const skills = [
        { name: 'HTML', value: 90 },
        { name: 'CSS', value: 90 },
        { name: 'JavaScript', value: 80 },
        { name: 'React', value: 75 },
        { name: 'C#', value: 60 },
        { name: 'Python', value: 50 },
        { name: 'Java', value: 40 },
        { name: 'SQL', value: 40 },
        { name: 'Git', value: 70 },
        
    ];

    return (
        <div className={`skills-section ${theme === 'light' ? 'light' : ''}`}>
            <div className="skills-container">
                <h2 className="skills-title">{t("skills.title")}</h2>
                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <div className="skill-item" key={index}>
                            <label>
                                {skill.name}
                                <span className="skill-value">{skill.value}%</span>
                            </label>
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
