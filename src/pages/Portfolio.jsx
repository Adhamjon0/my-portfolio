/*************  ✨ Windsurf Command 🌟  *************/
import React from 'react'
import './Portfolio.css'
import uzumMarket from '../pages/photos/uzum.jpg'
import { useTranslation } from 'react-i18next'

export default function Portfolio() {
    const { t } = useTranslation();

    return (
        <div>
            <div className='portfolio-container'>
                <div className='uzum-market'>
                    <h1>{t('portfolio.projects')}</h1>
                    <a href="https://uzum-market-psi.vercel.app/" target="_blank">
                        <img src={uzumMarket} className='uzum_img' alt="Uzum market" />
                    </a>
                </div>

                <div className='kunuz'>
                    {/* boshqa loyihalar ham shu yerda bo'ladi */}
                </div>

            </div>
        </div>
    )
}

/*******  a11bec5e-0553-4841-8d67-d9d71f2ae2ff  *******/