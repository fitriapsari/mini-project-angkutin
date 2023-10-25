import React, { useState, useEffect } from "react"
import Navbar from "../../components/Navbar/Navbar"
import { fetchOrders, deleteOrder, editOrder } from "../../api/index"
import "./Detail.module.css"
import data from "../../api/data"

function DetailOrder() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    // Mengambil data pesanan
    fetchOrders()
      .then((data) => {
        setOrders(data)
      })
      .catch((error) => {
        console.error("Gagal mengambil data pesanan: ", error)
      })
  }, [])
  console.log(data)

  //menghapus pesanan
  const handleDelete = (orderId) => {
    deleteOrder(orderId)
      .then(() => {
        // Hapus pesanan
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order.id !== orderId)
        )
        console.log("Data berhasil dihapus")
      })
      .catch((error) => {
        console.error("Gagal menghapus data pesanan: ", error)
      })
  }

  return (
    <div>
      <Navbar />
      <h2>Detail Pesanan Jasa Angkut</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Nomor Telepon</th>
            <th>Alamat Penjemputan</th>
            <th>Alamat Tujuan</th>
            <th>Tanggal Jemput</th>
            <th>Jenis Layanan</th>
            <th>Pilihan</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.nama}</td>
              <td>{order.telepon}</td>
              <td>{order.alamatPenjemputan}</td>
              <td>{order.alamatTujuan}</td>
              <td>{order.tanggalJemput}</td>
              <td>{order.jenisLayanan}</td>
              <td>
                <button
                  onClick={() => editOrder(order.id)}
                  style={{ backgroundColor: "lightblue" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    const isConfirmed = window.confirm(
                      "Apakah Anda yakin ingin menghapus pesanan ini?"
                    )

                    if (isConfirmed) {
                      handleDelete(order.id)
                    }
                  }}
                  style={{ backgroundColor: "red" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DetailOrder
