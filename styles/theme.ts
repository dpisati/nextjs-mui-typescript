import { createTheme } from '@mui/material/styles';
import styles from './style.module.scss';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: styles.colorPrimary,
        },
        secondary: {
            main: styles.colorSecondary,
        },
        error: {
            main: styles.colorDanger,
        },
    },
});

export default theme;
