import React from 'react';
import './Intro.css';
import { TypeAnimation } from 'react-type-animation';
import Lottie from 'lottie-react';
import devAnimation from '../assets/dev.json';
import { useTheme } from '../context/ThemeContext';

export default function Intro() {
    const { theme } = useTheme();

    return (
        <section className={`intro-container ${theme === 'light' ? 'light' : ''}`}>
            <div className="intro-content">
                <div className="intro-left">
                    <h1 className="intro-name">Adhamjon Sodiqov</h1>
                    <TypeAnimation
                        sequence={[
                            'Frontend Developer',
                            1500,
                            'UI/UX Designer',
                            1500,
                            'Learning Backend Development',
                            1500,
                        ]}
                        wrapper="span"
                        speed={50}
                        className="typing-text"
                        repeat={Infinity}
                    />
                </div>
                <div className="intro-right">
                    <Lottie animationData={devAnimation} loop className="lottie-anim" />
                </div>
            </div>
        </section>
    );
}
