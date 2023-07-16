import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

import styles from "@styles/index.module.scss"
import { Button } from '@mui/material'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Meal Prep App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet"  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
      </Head>

     
      <main className={styles.main}>
        <Header />
        <div className={styles.logo}>
        <img className={styles.icon} src="/logo.png" alt="" />
        <h1 className={styles.title}>Meal Ninja</h1>
        </div>
        <a href="/chat">
        <Button variant="contained">Start Meal Planning</Button>
        </a>
        
        
      </main>

      
    </div>
  )
}
