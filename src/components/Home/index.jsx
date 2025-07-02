import React from 'react'
import Header from '../Header'
import './index.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home-container'>
            <Header />
            <div className="home-content-container">
                <div className="content-container">
                    <h1 className="heading">Clothes That Get YOU Noticed</h1>
                    <p className="description">
                        Fashion is part of the daily air and it does not quite help that it
                        changes all the time. Clothes have always been a marker of the era
                        and we are in a revolution. Your fashion makes you been seen and
                        heard that way you are. So, celebrate the seasons new and exciting
                        fashion in your own way.
                    </p>
                    <Link to="/products">
                        <button type="button" className="shop-now-button">
                            Shop Now
                        </button>
                    </Link>
                </div>
                <div>
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                        alt="clothes that get you noticed"
                        className="home-img"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home