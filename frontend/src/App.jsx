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
function App() {

  const [themes,setThemes] = useState('')
  const [activeThemes, setActiveTheme] = useState('')
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


  const [theme, setTheme] = useState('LightTheme');

  const handleFormChange = (event) => {
        setTheme(event.target.value);
    };

  return (
    <>
      <ThemeProvider theme={LightTheme}>
          <Navbar
            content={
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/settings" element={<Settings options={themes} value={theme} handleChange={handleFormChange}/>}/>
              </Routes>
            }
          />
      </ThemeProvider>

    </>
  )
}

export default App