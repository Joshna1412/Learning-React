import React from 'react'
import rootStore from '../stores'

export const StoreContext = React.createContext(rootStore)

export const useStore = () => React.useContext(StoreContext)
