import '@styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Image from 'next/image';
import { Button } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


 
function Application({ Component, pageProps }) {
  return (
  <ThemeProvider theme={darkTheme}>
    <nav>
      <a href="/">
      <Image src='/logo.png' width={64} height={64} />
      <p>Meal Ninja</p>
      </a>
 
      

      
    </nav>
    <main><Component {...pageProps} /></main>
  </ThemeProvider>
  )
}

export default Application
