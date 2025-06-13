import React from 'react';
import './Skills.css';

export default function Skills() {
    const skills = [
        { name: 'HTML', value: 90 },
        { name: 'CSS', value: 90 },
        { name: 'JavaScript', value: 80 },
        { name: 'React', value: 75 },
        { name: 'C#', value: 60 },
        { name: 'Python', value: 50 },
        { name: 'English', value: 50 },
        { name: 'French', value: 95 },
    ];

    return (
        <div className="skills-section">
            <div className="skills-container">
                <h2 className="skills-title">My Skills</h2>
                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <div className="skill-item" key={index}>
                            <label>{skill.name}</label>
                            <progress value={skill.value} max="100"></progress>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
