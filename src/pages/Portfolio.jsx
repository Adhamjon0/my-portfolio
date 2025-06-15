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
                    <img src={uzumMarket} className='uzum_img' alt="Uzum market" />
                    <a href="https://uzum-market-psi.vercel.app/" target="_blank">
                        {t('portfolio.uzum')}
                    </a>
                </div>

                <div className='kunuz'>
                    {/* boshqa loyihalar ham shu yerda bo'ladi */}
                </div>

            </div>
        </div>
    )
}
