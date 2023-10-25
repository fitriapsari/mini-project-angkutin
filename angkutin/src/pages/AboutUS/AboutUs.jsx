import React from "react"
import "./AboutUs.css"
import jasaPindahan from "../../assets/jasa-pindahan.jpg"
import Navbar from "../../components/Navbar/Navbar"

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about-us-container">
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>
            Jasa Pindahan adalah sebuah perusahaan yang menyediakan layanan
            pindahan rumah dan kantor yang efisien dan andal. Kami memahami
            bahwa pindahan dapat menjadi proses yang melelahkan dan memakan
            waktu, oleh karena itu kami hadir untuk membantu Anda dalam
            memindahkan barang dari satu tempat ke tempat lainnya dengan mudah
            dan efisien.
          </p>
          <p>
            Jangan ragu untuk menghubungi kami jika Anda membutuhkan layanan
            pindahan rumah atau kantor yang efisien dan andal. Tim kami siap
            membantu Anda dalam memindahkan barang dengan mudah dan efisien.
          </p>
        </div>
        <div className="about-us-image">
          <img src={jasaPindahan} alt="JasaPindahan" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
