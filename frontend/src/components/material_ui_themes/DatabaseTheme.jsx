import {createTheme} from "@mui/material/styles";

const DatabaseTheme = ({mode,primary_color, secondary_color}) => {
    return
        createTheme({
            palette: {
                default: mode,
                primary:{
                    main: primary_color
                    },
                secondary:{
                    main: secondary_color
                    }
                }
    }

})}

export default DatabaseTheme