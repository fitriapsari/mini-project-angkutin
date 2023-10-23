import React, { useState } from "react"
import "./OrderForm.module.css"
import Navbar from "../../components/Navbar/Navbar"
import { useNavigate } from "react-router-dom"

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

  const [orders, setOrders] = useState([]) // State untuk menyimpan pesanan

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setOrderForm({
      ...orderForm,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Munculkan notifikasi konfirmasi
    const isConfirmed = window.confirm(
      "Apakah Anda yakin ingin memesan jasa angkut?"
    )

    if (isConfirmed) {
      // Menggabungkan pesanan baru ke dalam state orders
      setOrders([...orders, orderForm])

      // Reset form setelah submit
      setOrderForm({
        nama: "",
        telepon: "",
        alamatPenjemputan: "",
        alamatTujuan: "",
        tanggalJemput: "",
        jenisLayanan: "",
        jarakTempuh: "",
      })
    } else {
      // Tidak melakukan apa-apa jika pengguna membatalkan
    }
    navigate("/order-form")
  }

  return (
    <div>
      <Navbar />
      <h2>Form Pemesanan Jasa Angkut</h2>
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
        {/* <div>
          <label htmlFor="jenisPengangkutan">Jenis Pengangkutan:</label>
          <select
            name="jenisPengangkutan"
            value={orderForm.jenisPengangkutan}
            onChange={handleInputChange}
            required
          >
            <option value="pindahan">Pindahan</option>
            <option value="barang">Barang</option>
          </select>
        </div> */}
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
          {/* <input
            type="text"
            name="jenisMobil"
            value={orderForm.jenisMobil}
            onChange={handleInputChange}
            required
          /> */}
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
      </form>

      {/* Tabel untuk menampilkan hasil inputan pengguna */}
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Nomor Telepon</th>
            <th>Alamat Penjemputan</th>
            <th>Alamat Tujuan</th>
            <th>Tanggal Jemput</th>
            <th>Jenis Layanan</th>
            <th>Jarak Tempuh (KM)</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.nama}</td>
              <td>{order.telepon}</td>
              <td>{order.alamatPenjemputan}</td>
              <td>{order.alamatTujuan}</td>
              <td>{order.tanggalJemput}</td>
              <td>{order.jenisLayanan}</td>
              <td>{order.jarakTempuh}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrderForm
