import Image from "next/image"

function Text({ owner, content }) {
    let url = "/icon_square.png" // 'https://media.discordapp.net/attachments/857511147879137310/1129935551471026298/avatar.png?width=665&height=665'
    if (owner == "GPT") {
        url = "/logo.png"
    }

    return (
        <li>
            <img src={url} alt="" />
            <p>{content}</p>
        </li>
    )
}

export default Text