import {React} from 'react'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const Settings = ({isDarkMode, onChange}) =>{
    return(
        <div>
          <FormControlLabel
            control={<Switch checked={isDarkMode} onChange={onChange}/>}
            label={isDarkMode ? "Dark Mode": "Light Mode"} />
        </div>
    )

}

export default Settings


