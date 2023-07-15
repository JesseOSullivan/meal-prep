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
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [output, setOutput] = useState('Just ask me for help with your meal prep!')

  const handlePrompt = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOutput(query)
    }, 1000);
    
  }

  const handleClick = () => {
    
    
  }
 
  return (
    <section className={styles.container}>
        <div className={styles.content}>
          

          <ul>
            <li>
              <img src="https://cdn.discordapp.com/attachments/857511147879137310/1129629419712036884/gpt.jpg" alt="" />
              <p>{loading ? "Thinking ..." : output}</p>
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className={styles.inputWrapper}>
          <TextField disabled={loading} className={styles.input} onChange={handlePrompt} label={loading ? "Finding your meal plan!" : "Describe your meal prep idea"}  />
           <Button type="submit" disabled={loading} onClick={handleClick} className={styles.sendButton} variant="contained" endIcon={<SendIcon />}>Request</Button>
        </form>

    

    </section>
  )
}