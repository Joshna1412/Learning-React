import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './App.css'
import Home from './Home'
import About from './About'
import { useState } from 'react'

const App = () => {
  const [clickedHome, setClickedHome] = useState(true);

  const handleClick = (view, closePopup) => {
    setClickedHome(view === 'home')
    closePopup()
  }


  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <div className='container'>
            <div className='header-container'>
              <img className='website-logo' src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png" alt="website-logo" />
              <button className='hamburger-button'>☰</button>
            </div>
          </div>
        }
      >
        {close => (
          <>
            <button
              type="button"
              className="trigger-button"
              onClick={() => handleClick('home', close)}
            >
              X
            </button>
            <div className='model-container'>
              <button
                className="nav-button"
                onClick={() => handleClick('home', close)}
              >
                Home
              </button>
              <button
                className="nav-button"
                onClick={() => handleClick('about', close)}
              >
                About
              </button>
            </div>
          </>
        )}
      </Popup>
      {clickedHome ? <Home /> : <About />}
    </div>
  )
}

export default App