import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import { fetchOrders, deleteOrder } from "../../api/index"
import { useParams } from "react-router-dom"
import "./Detail.module.css"

function DetailOrder() {
  const { id } = useParams()
  const [orders, setOrders] = useState([])
  const [editingOrder, setEditingOrder] = useState(null)

  useEffect(() => {
    fetchOrders()
      .then((data) => {
        setOrders(data)
      })
      .catch((error) => {
        console.error("Gagal mengambil data pesanan: ", error)
      })
  }, [])

  const saveEditedOrder = () => {
    editOrder(editedOrder.id, editedOrder)
      .then(() => {
        alert("Data Anda berhasil diperbarui!")
        window.location.href = "/detail-order"
      })
      .catch((error) => {
        console.error("Gagal menyimpan perubahan pesanan: ", error)
      })
  }

  const handleDelete = (orderId) => {
    deleteOrder(orderId)
      .then(() => {
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
      <table className="table-striped">
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
                <Link to={`/edit/${order.id}`}>Edit</Link>
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
