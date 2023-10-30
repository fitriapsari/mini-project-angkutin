import React, { useState } from "react"
// import Button from "../src/components/Chatai/Button"
// import TextArea from "../src/components/Chatai/TextArea"
import OpenAI from "openai"
import { ColorRing } from "react-loader-spinner"
// import Navbar from "../../components/Navbar"

const ChatAI = () => {
  const [command, setCommand] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState("")

  const openai = new OpenAI({
    apiKey: import.meta.env.REACT_APP_URL_OPENAI_APIKEY,
    // apikey: "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",
    dangerouslyAllowBrowser: true,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await openai.chat.completions.create({
      // messages: [
      //   { role: "system", content: "You are a helpful assistant." },
      //   { role: "user", content: command },
      // ],
      model: "gpt-3.5-turbo",
      prompt: "A summarizing article from this url :" + command,
      model: "gpt-3.5-turbo",
      max_tokens: 1000,
      temperature: 0,
      precence_penalty: 1,
      frequency_penalty: 0.0,
      top_p: 1.0,
    })
    setResult(res.choices[0].message.content)
    setLoading(false)
  }

  return (
    <div>
      {/* <Navbar /> */}
      <TextArea
        name="command"
        id="command"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Masukkan perintah di sini"
        className="input"
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
      <Button
        type="submit"
        className="btn-submit"
        text="submit"
        onClick={handleSubmit}
      />
      {result && <p>{result}</p>}
    </div>
  )
}

export default ChatAI
