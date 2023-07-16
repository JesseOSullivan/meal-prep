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

  // Initiate with a welcome message
  const startMsg = {owner:"GPT", text:"Welcome! Please ask below for the type of meal prep plan you would like"}

  // UseState Variables
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [output, setOutput] = useState('Just ask me for help with your meal prep!')
  const [messages, setMessages] = useState([startMsg])

  // Constants
  const ENDPOINT = "https://meal-prep.onrender.com/recipe"

  // Helper Functions
  const addReply = (reply) => {
    setMessages(messages => [...messages, { owner:"GPT", text:reply }])
  }

  // Request Function

  const postRequest = async (message) => {
    try {
      addReply("Generating a plan... please wait... (this could take a moment)")

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
      
      console.log(data)

      // Handle Data
      if (data) {
        
        if (data.products) {
          addReply("Let's get started, you will need the following ingredients:")
          let foodList = ""
          data.products.map((product, index) => {
            //console.log(product)
            let msg = ""
            msg += `${index+1}. ${product.name}, `
            if (product.amt) {
              msg += `amount needed: ${product.amt}. `
            } else if (product.amount) {
              msg += `amount needed: ${product.amount}. `
            }
            if (product.link) {
              msg += `link here: ${product.link}`
            }
            addReply(msg)
          })
        } else {
          addReply("Something went wrong and we could not get a list of ingredients")
        }
        
        if (data.instructions) {
          addReply("Now, follow these steps:")  
          addReply(data.instructions)
        }
        //addReply(foodList)

        //addReply(stringify(data))
      } 

    } catch (error) {
      console.error(error)
      addReply('Something went wrong')
    }
  }

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