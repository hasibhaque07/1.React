import React from 'react'
import { ThemeProvider } from './ThemeContext'
import ToggleComponent from './ToggleComponent'

const MyApp = () => {
  return (
    <ThemeProvider>
       <ToggleComponent />
    </ThemeProvider>
  )
}

export default MyApp
