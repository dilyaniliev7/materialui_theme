import './App.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import LightTheme from './components/material_ui_themes/LightTheme'
import DarkTheme from './components/material_ui_themes/DarkTheme'
import GreenTheme from './components/material_ui_themes/GreenTheme'
import Settings from './components/material_ui_themes/Settings'
import {useState, useEffect} from 'react'
import AxiosInstance from './components/Axios'
import DatabaseTheme from './components/material_ui_themes/DatabaseTheme'

function App() {

  const [themes,setThemes] = useState([])
  const [activeThemes, setActiveTheme] = useState([])
  const [theme, setTheme] = useState('');

  const handleFormChange = (event) => {
        setTheme(event.target.value);
    };

  const activeThemeCount = activeTheme.length

  const myDatabaseTheme = activeTheme.length === 1 && activeTheme[0].themedetails ?
  DatabaseTheme({
      mode: activeTheme[0].themedetails.mode,
      primary_color: activeTheme[0].themedetails.primary_color,
      secondary_color: activeTheme[0].themedetails.secondary_color
      })
  : LightTheme

  const GetData = () => {
      AxiosInstance.get(`themes/`).then((res) => {
          setThemes(res.data)
          })

      AxiosInstance.get(`activetheme/`).then((res) => {
          setActiveTheme(res.data)
          })
      }

  useEffect(() => {
      GetData()
      }, [])

  useEffect(() => {
      if(activeTheme.length > 0) {
          setTheme(activeTheme[0].theme)
          }
      }, [activeTheme])

  return (
    <>
      <ThemeProvider theme={myDatabaseTheme}>
          <Navbar
            content={
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/settings" element={<Settings options={themes} value={theme} handleChange={handleFormChange} counter={activeThemeCount} activetheme={activeTheme}/>}/>
              </Routes>
            }
          />
      </ThemeProvider>

    </>
  )
}

export default App