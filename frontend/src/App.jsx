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
import {useState} from 'react'

function App() {

  const options = [
      {name:"Dark Theme", value: DarkTheme},
      {name:"Light Theme", value: LightTheme},
      {name:"Green Theme", value: GreenTheme},
      ]
  const [theme, setTheme] = useState('LightTheme');

  const handleFormChange = (event) => {
        setTheme(event.target.value);
    };

  return (
    <>
      <ThemeProvider theme={theme}>
          <Navbar
            content={
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/settings" element={<Settings options={options} value={theme} handleChange={handleFormChange}/>}/>
              </Routes>
            }
          />
      </ThemeProvider>

    </>
  )
}

export default App