import { createTheme, responsiveFontSizes } from '@mui/material';
import { green, yellow } from '@mui/material/colors';

const pretheme = createTheme({
  palette: {
    primary: green,
    secondary: yellow,
  },
});

const theme = responsiveFontSizes(pretheme);

export default theme;
