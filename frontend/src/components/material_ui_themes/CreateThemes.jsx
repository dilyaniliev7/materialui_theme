import {React, useState} from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { SketchPicker } from 'react-color';
import { Box } from '@mui/material'
const CreateTheme = () =>{
    const [name, setName] = useState('')
    const [mode, setMode] = useState('')
    const [primaryColor, setPrimaryColor] = useState('')
    const [secondaryColor, setSecondaryColor] = useState('')

    const handleNameValue = (event) => {
        setName(event.target.value)
        }

    const handleModeValue = (event) => {
        setMode(event.target.value)
        }

    const handlePrimaryColorValue = (color) => {
        setPrimaryColor(color.hex)
        }

    const handleSecondaryColorValue = (event) => {
        setSecondaryColor(color.hex)
        }

    return(
        <div>
            <TextField
                id="standard-basic"
                value={mode}
                onChange={handleModeValue}
                label="Mode"
                variant="standard"
                sx={{width: '33%'}}
                />
            <FormControl variant="standard" sx={{marginLeft: '200px', width:'33%', minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Mode</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={mode}
                      onChange={handleModeValue}
                      label="Mode"
                    >
                    <MenuItem key={1} value={'light'}>Light</MenuItem>
                    <MenuItem key={2} value={'dark'}>Dark</MenuItem>
                    </Select>
            </FormControl>
            <Box sx={{width: '33%', marginTop:'50px'}}>
                <InputLabel id="demo-simple-select-standard-label">Primary Color</InputLabel>
                <SketchPicker
                    onChange={handlePrimaryColorValue}
                    color={primaryColor}
                />
            </Box>
            <Box sx={{width: '33%', marginTop:'50px'}}>
                <InputLabel id="demo-simple-select-standard-label">Secondary Color</InputLabel>
                <SketchPicker
                    onChange={handleSecondaryColorValue}
                    color={secondaryColor}
                />
            </Box>
        </div>
    )

}

export default CreateTheme