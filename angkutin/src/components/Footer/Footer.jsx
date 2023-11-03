import "../Footer/Footer.module.css"

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <div className="footer-contents">
          <div className="content">
            <h1 className="footer-title">Angkutin</h1>
            <p className="isiAngkutin">
              Angkutin merupakan penyedia jasa pindahan dan angkut barang yang
              menyediakan layanan yang efisien, handal, dan mudah digunakan
              untuk mengatasi masalah transportasi dan pencarian layanan jasa
              pindahan.{" "}
            </p>
            <div className="mediaSosial">
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-youtube" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
            </div>
          </div>
          <div className="content">
            <h1 className="footer-title">AboutUs</h1>
            <p className="isiAboutUs">
              Pindah adalah perusahaan yang menyediakan layanan pindahan rumah
              kantor yang terpercaya. Kami memahami bahwa pindahan bisa
              melelahkan dan memakan waktu, jadi kami siap membantu Anda
              memindahkan barang dengan mudah dan efisien.
            </p>
          </div>
          <div className="content">
            <h6 className="footer-title">Contact</h6>
            <p className="text-light">Ruko Emerald blok F1 Meteseh</p>
            <p className="text-light">Tembalang</p>
            <p className="text-light">Semarang</p>
            <p>
              <a href="" className="text-primary">
                (+62) 852-458-337
              </a>
            </p>
          </div>
        </div>
        <hr className="footer-line" />
        <div className="d-flex flex-row justify-content-center">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">Privacy</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Support</a>
            </li>
          </ul>
          <p className="footerCinema"> ©2023 Angkutin</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
