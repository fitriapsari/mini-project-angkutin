import "../Welcome/Welcome.module.css"
import webimage from "../../assets/001.jpg"
import webimage2 from "../../assets/002.jpg"
import webimage3 from "../../assets/003.jpg"
import web1 from "../../assets/web1.jpeg"
import { Link } from "react-router-dom"

const Angkutin = () => {
  return (
    <div>
      <div className="banner1">
        <div className="bubble">
          <div className="bubbledesc">
            <h1>Solusi buat kamu yang mager pindahan</h1>
            <h3>angkutin</h3>
            <h2>#Kebut Yahut</h2>
            <button>
              <Link to="/order-form">Pesan Sekarang</Link>
            </button>
          </div>
        </div>
        <div className="bubblesmall"></div>
        <div>
          <img src={web1} alt="angkutin1" />
        </div>
      </div>

      <div className="banner2">
        <img src={webimage2} alt="angkutin2" />
        <div className="bubble2">
          <div className="bubbledesc">
            <h1>Kenapa angkutin?</h1>
            <p>
              Solusi berbasis teknologi kami memungkinkan pelanggan kami
              mendapatkan layanan pindahan yang bebas stres, profesional, aman,
              dan terjangkau. Kami menawarkan berbagai layanan termasuk
              penyewaan kendaraan, tenaga bantuan, terpal dan pertanggungan
              asuransi. Pemesanan dapat dilakukan melalui situs web dan aplikasi
              seluler kami yang ramah pengguna.
            </p>
          </div>
        </div>
        <div className="bubblesmall2"></div>
      </div>
      <div className="banner3">
        <img src={webimage3} alt="angkutin2" />
        <div className="bannerdesc">
          <h1>Info Selengkapnya</h1>
          <p>
            Untuk informasi lebih lanjut, silahkan buka halaman About atau bisa
            langsung <span>menghubungi kami</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Angkutin
