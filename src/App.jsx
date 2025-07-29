import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import { AppSection } from './components/styled-components'
import ThemeContext from './components/ThemeContext'
import { useState } from 'react'
import VideoDetails from './components/VideoDetails'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  const [isDark, setIsDark] = useState(false)
  const [savedVideos, setSavedVideos] = useState([])
  const [likedVideos, setLikedVideos] = useState([])
  const [dislikedVideos, setDislikedVideos] = useState([])
  const [activeItem, setActiveItem] = useState('home')

  const toggleLikeVideo = (videoId) => {
    setLikedVideos(prev => {
      if (prev.includes(videoId)) {
        return prev.filter(id => id !== videoId)
      } else {
        setDislikedVideos(disliked => disliked.filter(id => id !== videoId))
        return [...prev, videoId]
      }
    })
  }

  const toggleDislikeVideo = (videoId) => {
    setDislikedVideos(prev => {
      if (prev.includes(videoId)) {
        return prev.filter(id => id !== videoId)
      } else {
        setLikedVideos(liked => liked.filter(id => id !== videoId))
        return [...prev, videoId]
      }
    })
  }

  const isVideoLiked = (videoId) => likedVideos.includes(videoId)
  const isVideoDisliked = (videoId) => dislikedVideos.includes(videoId)


  const changeTheme = () => {
    let rootEl = document.getElementById("root");

    setIsDark(!isDark)
    if (rootEl) {
      rootEl.style.backgroundColor = !isDark ? 'black' : 'white';
    }
  }

  const addSavedVideo = video => {
    setSavedVideos(prev =>
      prev.find(v => v.id === video.id)
        ? prev
        : [...prev, video]
    )
  }

  const deleteSaved = video => {
    const filteredVideos = savedVideos.filter(v => v.id != video.id)
    setSavedVideos(filteredVideos)
  }

  const checkSavedVideo = videoId => {
    return savedVideos.some(v => v.id === videoId)
  }

  return (
    <ThemeContext.Provider value={{ isDark, changeTheme, activeItem, setActiveItem, savedVideos, addSavedVideo, deleteSaved, checkSavedVideo, toggleDislikeVideo, toggleLikeVideo, isVideoDisliked, isVideoLiked, likedVideos, dislikedVideos }}>
      <AppSection>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }></Route>
            <Route path='/trending' element={
              <ProtectedRoute>
                <Trending />
              </ProtectedRoute>
            }></Route>
            <Route path='/gaming' element={
              <ProtectedRoute>
                <Gaming />
              </ProtectedRoute>
            } />
            <Route path="/videos/:id" element={
              <ProtectedRoute>
                <VideoDetails />
              </ProtectedRoute>
            } />
            <Route path="/saved-videos" element={
              <ProtectedRoute>
                <SavedVideos />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </AppSection>
    </ThemeContext.Provider>
  )
}

export default App