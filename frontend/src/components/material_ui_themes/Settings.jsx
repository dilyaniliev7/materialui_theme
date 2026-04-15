import {React} from 'react'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AxiosInstance from './Axios';
import Button from '@mui/material/Button';

const Settings = ({options, value, handleChange}) =>{

    const Submission = () => {
        AxiosInstance.post(`activetheme/`, {
            theme: value
            })
        .then((res) => {
            console.log(res)
            })
        }

    return(
        <div>
              <form onSubmit={Submission}>
                  <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Pick a theme:</InputLabel>
                          <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={value}
                          label="Pick a theme:"
                          onChange={handleChange}
                          >
                          {
                              options.map((option) => (
                                    <MenuItem value={option.id}>{option.name}</MenuItem>
                                  ))
                              }
                          </Select>
                    </FormControl>
                    <Button type="submit" variant="contained">Submit theme</Button>
              </form>
        </div>
    )

}

export default Settings
