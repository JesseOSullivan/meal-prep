import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

import styles from "@styles/index.module.scss"

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

      <main>
        <Header />
        <img className={styles.icon} src="https://media.discordapp.net/attachments/857511147879137310/1129644501737144330/icon.png?width=675&height=675" alt="" />
        
        <h1 className={styles.title}>Find Your Meal Prep</h1>
        
      </main>

      
    </div>
  )
}
