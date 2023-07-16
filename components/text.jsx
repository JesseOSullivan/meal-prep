function Text({ owner, content }) {
    let url = 'https://media.discordapp.net/attachments/857511147879137310/1129935551471026298/avatar.png?width=665&height=665'
    if (owner == "GPT") {
        url = "https://cdn.discordapp.com/attachments/857511147879137310/1129629419712036884/gpt.jpg"
    }

    return (
        <li>
              <img src={url} alt="" />
              <p>{content}</p>
        </li>
    )
}

export default Text