import React, { useState } from "react"
import Button from "./Button"
import TextArea from "./TextArea"
import OpenAI from "openai"
import { ColorRing } from "react-loader-spinner"
import Navbar from "../../components/Navbar/Navbar"
import "./TextArea.module.css"

const ChatAI = () => {
  const [command, setCommand] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState("")

  // console.log(import.meta.env.VITE_APP_OPENAI_APIKEY)
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_APP_OPENAI_APIKEY,
    dangerouslyAllowBrowser: true,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: command },
      ],
      model: "gpt-3.5-turbo",
      // prompt: "layanan jasa angkut barang :" + command,
      max_tokens: 1000,
      temperature: 0,
      // precence_penalty: 1,
      frequency_penalty: 0.0,
      top_p: 1.0,
    })
    console.log(res)
    setResult(res.choices[0].message.content)
    setLoading(false)
  }

  return (
    <div>
      <Navbar />
      <h2> Chat With Our AI</h2>
      <textarea
        name="command"
        id="command"
        className="textarea"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Masukkan perintah di sini"
        style={{
          marginTop: "100px",
          marginLeft: "50px",
          width: "80%",
          height: "150px",
          border: "1px solid",
        }}
      />

      {loading && (
        <ColorRing
          visible={true}
          height={80}
          width={80}
          ariaLabel=""
          wrapperStyle={{}}
          wrapperClass="block-wrapper"
          colours={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
      <br />
      <Button
        type="submit"
        className="btn-submit"
        style={{
          background: "#000",
          color: "#fff",
          marginRight: "100px",
          marginTop: "10px",
        }}
        text="submit"
        onClick={handleSubmit}
      />
      <h4 style={{ marginLeft: "50px", marginTop: "10px" }}> Response: </h4>
      {result && (
        <p
          style={{
            fontSize: "16px",
            marginLeft: "50px",
            marginRight: "200px",
          }}
        >
          {result}
        </p>
      )}
    </div>
  )
}

export default ChatAI
