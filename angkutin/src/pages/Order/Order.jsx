import React, { useState, useEffect } from "react"
import "./OrderForm.module.css"
import Navbar from "../../components/Navbar/Navbar"
import { useNavigate } from "react-router-dom"
import { fetchOrders, postOrder, editOrder, deleteOrder } from "../../api/index"
import data from "../../api/data"
import { Link } from "react-router-dom"

const OrderForm = () => {
  const navigate = useNavigate()
  const [orderForm, setOrderForm] = useState({
    nama: "",
    telepon: "",
    alamatPenjemputan: "",
    alamatTujuan: "",
    tanggalJemput: "",
    jenisLayanan: "",
    jarakTempuh: "",
  })

  // State untuk menyimpan pesanan
  const [orders, setOrders] = useState([])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setOrderForm({
      ...orderForm,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // notifikasi konfirmasi
    const isConfirmed = window.confirm(
      "Apakah Anda yakin ingin memesan jasa angkut?"
    )

    if (isConfirmed) {
      // Mengirim data pesanan ke API
      postOrder(orderForm)
        .then((data) => {
          fetchOrders()
            .then((data) => {
              setOrders(data)
            })
            .catch((error) => {
              console.error("Gagal mengambil data pesanan: ", error)
            })

          // Reset form
          setOrderForm({
            nama: "",
            telepon: "",
            alamatPenjemputan: "",
            alamatTujuan: "",
            tanggalJemput: "",
            jenisLayanan: "",
            jarakTempuh: "",
          })
        })
        .catch((error) => {
          console.error("Gagal menambahkan data pesanan: ", error)
        })
    } else {
      // tidak ada action
    }

    navigate("/order-form")
  }

  return (
    <div>
      <Navbar />
      <h2>Form Pemesanan Jasa Angkut</h2>
      <Link to="/detail-order">Detail Order</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nama">Nama:</label>
          <input
            type="text"
            name="nama"
            value={orderForm.nama}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="telepon">Nomor Telepon:</label>
          <input
            type="tel"
            name="telepon"
            value={orderForm.telepon}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="alamatPenjemputan">Alamat Penjemputan:</label>
          <textarea
            name="alamatPenjemputan"
            value={orderForm.alamatPenjemputan}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="alamatTujuan">Alamat Tujuan:</label>
          <textarea
            name="alamatTujuan"
            value={orderForm.alamatTujuan}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="tanggalJemput">Tanggal Jemput:</label>
          <input
            type="date"
            name="tanggalJemput"
            value={orderForm.tanggalJemput}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="jenisLayanan">Jenis Layanan:</label>
          <select
            name="jenisLayanan"
            placeholder="Pilih Jenis Layanan"
            value={orderForm.jenisLayanan}
            onChange={handleInputChange}
            required
          >
            <option value="Pilih Jenis Mobil">Pilih Jenis Layanan</option>
            <option value="Delivery">Delivery</option>
            <option value="Packing">Packing</option>
            <option value="Storage">Storage</option>
          </select>
        </div>
        <div>
          <label htmlFor="jarakTempuh">Jarak Tempuh (KM):</label>
          <input
            type="number"
            name="jarakTempuh"
            value={orderForm.jarakTempuh}
            onChange={handleInputChange}
            required
          />
        </div>
        <br />
        <button type="submit">Pesan Jasa Angkut</button>
        {/* <button>List Order</button> */}
      </form>
    </div>
  )
}

export default OrderForm
