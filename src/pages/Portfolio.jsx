import React from 'react'
import './Portfolio.css'
import uzumMarket from '../pages/photos/uzum.jpg'
export default function Portfolio() {
    return (
        <div>
            <div className='portfolio-container'>

                <div className='uzum-market'>
                    <h1>Projects</h1>
                    <h2>Uzum market</h2>
                    <img src={uzumMarket} className='uzum_img' alt="Uzum market" />
                    <a href=" https://uzum-market-psi.vercel.app/" target="_blank">Uzum market</a>
                </div>

                <div className='kunuz'>

                </div>

            </div>
        </div>
    )
}
