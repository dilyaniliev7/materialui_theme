import './App.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import MyTheme from './components/material_ui_themes/MyTheme'
import LightTheme from './components/material_ui_themes/LightTheme'
import DarkTheme from './components/material_ui_themes/DarkTheme'
import Settings from './components/material_ui_themes/Settings'
import {useState} from 'react'

function App() {

  const {DarkMode, setIsDarkMode}  = useState(false)
  const handleChange = () => {
      setIsDarkMode(!isDarkMode)
      }

  const currentTheme = isDarkMode ? DarkTheme : LightTheme

  return (
    <>
      <ThemeProvider theme={currentTheme}>
          <Navbar
            content={
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/settings" element={<Settings isDarkMode={isDarkMode} onChange={handleChange}/>}/>
              </Routes>
            }
          />
      </ThemeProvider>

    </>
  )
}

export default App