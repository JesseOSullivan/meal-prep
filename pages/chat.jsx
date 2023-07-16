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

  const startMsg = {owner:"GPT", text:"Welcome! Please ask below for the type of meal prep plan you would like"}

  //   const { data, error } = useSWR('/api/navigation', fetcher)
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [output, setOutput] = useState('Just ask me for help with your meal prep!')
  const [messages, setMessages] = useState([startMsg])

  const ENDPOINT = "https://meal-prep.onrender.com/recipe"

  const addReply = (reply) => {
    setMessages(messages => [...messages, { owner:"GPT", text:reply }])
  }

  const postRequest = async (message) => {
    try {
      setMessages(messages => [...messages, { owner:"GPT", text:"Generating a plan... please wait" }])

      const content = {content: message}
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          "Content-Type": "application/json"
         },
        body: JSON.stringify(content)
      }) 

      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      
      const data = await response.json()
      
      console.log(response)
      console.log(data)
      if (data) {

          addReply("Let's get started, you will need the following ingredients:")

          if (data.ingredients) {
            console.log(data)
          } else if (data.products) {
            console.log(data)
          }
          
          // for (ingredient in data.ingredients) {
          //   console.log(ingredient.name)
          //   addReply("Something here")
          //   //addReply(`You will need ${ingredient.name}`)
          //   //setMessages(messages => [...messages, { owner:"GPT", text:data }])
          // }

         // add to messages
        // let messagesarray = messages
        // setMessages(messagesarray.pop())
        setMessages(messages => [...messages, { owner:"GPT", text:data }])
      }
      return data

    } catch (error) {
      console.error(error)
      // let messagesarray = messages
      // setMessages(messagesarray.pop())
      //setMessages(messages => [...messages, { owner:"GPT", text:"There was a problem when handling your request." }])
      addReply("There was a problem handling your request.")
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
    }, 200);
    
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
          <TextField disabled={loading} className={styles.input} onChange={handlePrompt} label={loading ? "Finding your meal plan!" : "Describe your meal prep plan"}  />
           <Button type="submit" disabled={loading} onClick={handleClick} className={styles.sendButton} variant="contained" endIcon={<SendIcon />}>Request</Button>
        </form>

    

    </section>
  )
}