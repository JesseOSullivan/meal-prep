import styles from "@styles/default.module.scss";
import TextField from '@mui/material/TextField';
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import imageGPT from "../public/gpt.jpg"
import { useState } from "react";

export default function Chat({ children }) {
//   const { data, error } = useSWR('/api/navigation', fetcher)
 
//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>

  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    console.log("Hello World!")
    setTimeout(() => {
      setLoading(false)
    }, 1000);
    
  }
 
  return (
    <section className={styles.container}>
        <div className={styles.content}>
          

          <ul>
            <li>
              <img src="https://cdn.discordapp.com/attachments/857511147879137310/1129629419712036884/gpt.jpg" alt="" />
              <p>{loading ? "Thinking ..." : "Here you go!"}</p>
            </li>
            <li>
              <img src="https://cdn.discordapp.com/attachments/857511147879137310/1129629419712036884/gpt.jpg" alt="" />
              <p>You're actually really good a meal prep! Go do it mate!</p>
            </li>
          </ul>
        </div>
        <div className={styles.inputWrapper}>
          <TextField disabled={loading} className={styles.input} label={loading ? "Finding your meal plan!" : "Describe your meal prep idea"}  />
           <Button disabled={loading} onClick={handleClick} className={styles.sendButton} variant="contained" endIcon={<SendIcon />}>Request</Button>
        </div>

    

    </section>
  )
}