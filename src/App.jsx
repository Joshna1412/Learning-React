import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import ThemeContext from './components/ThemeContext'
import Header from './components/Header'


const App = () => {

  const [isDark, setIsDark] = useState(true)
  const themeChange = () => {
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, themeChange }}>
      <div className='app-container'>
        <BrowserRouter >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  )
}

export default App