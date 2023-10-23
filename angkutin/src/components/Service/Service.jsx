import React from "react"
import Delivery from "../../assets/delivery.jpg"
import Packing from "../../assets/packing.jpg"
import Store from "../../assets/store.jpg"
import "./Service.css"

const Services = () => {
  return (
    <div className="body">
      <h1 className="section-heading">Our Services</h1>
      <p className="section-subheading">
        Kami dengan bangga menghadirkan berbagai layanan menarik yang <br />{" "}
        dirancang untuk memenuhi kebutuhan pengiriman barang Anda.
      </p>
      <div className="our-contents">
        <div className="our-content">
          <div className="card mt-3 mx-3" style={{ width: "18rem" }}>
            <img src={Delivery} className="card-img-top" alt="Service 1" />
            <div className="card-body">
              <h2> Delivery </h2>
              <p className="card-text">
                Kami menyediakan layanan pengiriman barang yang cepat, aman, dan
                terpercaya ke seluruh wilayah Indonesia.
              </p>
              <br />
              <b> Harga: Rp200.000 - Rp500.000 Sesuai Jarak </b>
            </div>
          </div>
        </div>
        <div className="our-content">
          <div className="card mt-3 mx-3" style={{ width: "18rem" }}>
            <img src={Packing} className="card-img-top" alt="Service 2" />
            <div className="card-body">
              <h2> Packing </h2>
              <p className="card-text">
                Kami menyediakan layanan kemasan barang yang aman dan terpercaya
                untuk memastikan barang Anda tetap dalam kondisi baik selama
                pengiriman.
              </p>
              <br />
              <b>
                Harga: Rp150.000 - Rp300.000 Sesuai Banyak dan Diameter Barang
              </b>
            </div>
          </div>
        </div>
        <div className="our-content">
          <div className="card mt-3 mx-3" style={{ width: "18rem" }}>
            <img src={Store} className="card-img-top" alt="Service 3" />
            <div className="card-body">
              <h2> Storage </h2>
              <p className="card-text">
                Kami menyediakan layanan penyimpanan barang yang aman dan
                terpercaya untuk memenuhi kebutuhan penyimpanan barang Anda.
              </p>
              <br />
              <b> Harga: Rp100.000 per 7 Hari </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
