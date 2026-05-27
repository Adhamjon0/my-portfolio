import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import img from '../pages/photos/adam-bmw.jpg';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import CVButton from '../components/CVButton';

const Home = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.8,
                type: 'spring',
                stiffness: 80,
            },
        },
    };

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <div className={`home-container ${theme}`}>
            <div className="blob-animation"></div>
            <div className="blob-animation blob-2"></div>

            <motion.div
                className="home-page"
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
            >
                {/* Left Section */}
                <motion.div className="left" variants={itemVariants}>
                    <motion.div
                        className="hero-container"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <motion.div
                            className="hero-badges"
                            variants={itemVariants}
                        >
                            <motion.span
                                className="badge"
                                animate={{ rotate: [0, 5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                💻 Frontend Developer
                            </motion.span>
                            <motion.span
                                className="badge"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                            >
                                🎨 UI/UX Designer
                            </motion.span>
                        </motion.div>

                        <motion.h1
                            className="typing-text1"
                            variants={itemVariants}
                            style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            {t('home.greeting')}
                        </motion.h1>

                        <motion.p className="fade-in-text" variants={itemVariants}>
                            {t('home.description')}
                        </motion.p>

                        <motion.div variants={itemVariants}>
                            <CVButton />
                        </motion.div>

                        <motion.div
                            className="floating-shapes"
                            variants={floatingVariants}
                            animate="animate"
                        >
                            <div className="shape shape-1"></div>
                            <div className="shape shape-2"></div>
                            <div className="shape shape-3"></div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right Section - Image */}
                <motion.div
                    className="right"
                    variants={imageVariants}
                    whileHover={{
                        scale: 1.05,
                        rotateY: 10,
                        rotateX: 5,
                    }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    style={{
                        perspective: '1200px',
                    }}
                >
                    <motion.div
                        className="image-wrapper"
                        animate={{
                            boxShadow: [
                                '0 20px 40px rgba(102, 126, 234, 0.1)',
                                '0 40px 80px rgba(102, 126, 234, 0.3)',
                                '0 20px 40px rgba(102, 126, 234, 0.1)',
                            ],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <img
                            src={img}
                            alt="Adhamjon Sodiqov"
                            className="profile-img"
                        />
                        <div className="image-glow"></div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Cursor Effect */}
            <motion.div
                className="cursor-effect"
                animate={{
                    x: mousePosition.x - 10,
                    y: mousePosition.y - 10,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            />
        </div>
    );
};

export default Home;