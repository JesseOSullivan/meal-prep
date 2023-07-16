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
import Text from "@components/text";

export default function Chat({ children }) {
  //   const { data, error } = useSWR('/api/navigation', fetcher)
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [output, setOutput] = useState('Just ask me for help with your meal prep!')
  const [messages, setMessages] = useState([])

  const ENDPOINT = "https://meal-prep.onrender.com/recipe"

  const postRequest = async (message) => {
    try {
      const content = {content: message}
      const response = await fetch(ENDPOINT, {
        method: "POST",
        body: JSON.stringify(content)
      }) 

      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      
      const data = await response.json()
      console.log(data)
      if (data) {
         // add to messages
        setMessages(messages => [...messages, { owner:"GPT", text:data }])
      }
      return data

    } catch (error) {
      console.error(error)
      setMessages(messages => [...messages, { owner:"GPT", text:"There was a problem when handling your request." }])
    }
  }

  //

  const handlePrompt = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setMessages(messages => [...messages, { owner:"me", text:query }])

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      
      // fetch from endpoint
      const feedback = postRequest(query)
      

      //setOutput(query)
    }, 1000);
    
  }

  const handleClick = () => {
    
    
  }
 
  return (
    <section className={styles.container}>
        <div className={styles.content}>
          <ul>
            { messages?.map(({owner, text}, index) => (
                <Text key={index} owner={owner} content={text} />
            ))
            }
          </ul>
        </div>
        <form onSubmit={handleSubmit} className={styles.inputWrapper}>
          <TextField disabled={loading} className={styles.input} onChange={handlePrompt} label={loading ? "Finding your meal plan!" : "Describe your meal prep idea"}  />
           <Button type="submit" disabled={loading} onClick={handleClick} className={styles.sendButton} variant="contained" endIcon={<SendIcon />}>Request</Button>
        </form>

    

    </section>
  )
}