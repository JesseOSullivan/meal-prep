import '@styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
  
function Application({ Component, pageProps }) {
  return (
  <ThemeProvider theme={darkTheme}>
    <main><Component {...pageProps} /></main>
  </ThemeProvider>
  )
}

export default Application
