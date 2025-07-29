import React from 'react'

const ThemeContext = React.createContext({
    isDark: false,
    activeItem: 'home',
    setActiveItem: () => { },
    savedVideos: [],
    addSavedVideo: () => { },
    deleteSaved: () => { },
    changeTheme: () => { },
    checkSavedVideo: () => false,
    likedVideos: [],
    dislikedVideos: [],
    toggleLikeVideo: () => { },
    toggleDislikeVideo: () => { },
    isVideoLiked: () => false,
    isVideoDisliked: () => false,
})

export default ThemeContext