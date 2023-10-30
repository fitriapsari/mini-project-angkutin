import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { editOrder, fetchOrders } from "../../api/index"
import Navbar from "../../components/Navbar/Navbar"
import { Link } from "react-router-dom"
import "../Order/OrderForm.module.css"

function EditOrder() {
  const { id } = useParams()
  const [editedOrder, setEditedOrder] = useState({
    nama: "",
    telepon: "",
    alamatPenjemputan: "",
    alamatTujuan: "",
    tanggalJemput: "",
    jenisLayanan: "Delivery",
  })

  useEffect(() => {
    // Mengambil data pesanan
    fetchOrders()
      .then((data) => {
        const orderToEdit = data.find((order) => order.id === id)
        // Memeriksa apakah orderToEdit sesuai
        if (orderToEdit) {
          setEditedOrder(orderToEdit)
        } else {
          console.error("Pesanan tidak ditemukan.")
        }
      })
      .catch((error) => {
        console.error("Gagal mengambil data pesanan: ", error)
      })
  }, [id])

  const confirmSave = (e) => {
    e.preventDefault()
    if (window.confirm("Apakah Anda yakin akan mengganti data ini?")) {
      saveEditedOrder()
    }
  }
  const saveEditedOrder = () => {
    // console.log("ppppp")
    editOrder(editedOrder.id, editedOrder)
      .then(() => {
        alert("Data Anda berhasil diperbarui!")
        window.location.href = "/detail-order"
      })
      .catch((error) => {
        console.error(
          "Gagal mengubah data pesanan: ",
          error.response ? error.response.data : error.message
        )
        alert("Gagal mengubah data pesanan.")
      })
  }

  return (
    <div>
      <Navbar />
      <h2>Edit Pesanan Jasa Angkut</h2>
      <form>
        <label htmlFor="nama"> Nama :</label>
        <input
          type="text"
          value={editedOrder.nama}
          onChange={(e) =>
            setEditedOrder({ ...editedOrder, nama: e.target.value })
          }
        />
        <label htmlFor="telepon">Nomor Telepon:</label>
        <input
          type="tel"
          value={editedOrder.telepon}
          onChange={(e) =>
            setEditedOrder({ ...editedOrder, telepon: e.target.value })
          }
        />
        <label htmlFor="alamatPenjemputan">Alamat Penjemputan:</label>
        <textarea
          value={editedOrder.alamatPenjemputan}
          onChange={(e) =>
            setEditedOrder({
              ...editedOrder,
              alamatPenjemputan: e.target.value,
            })
          }
        />
        <label htmlFor="alamatTujuan">Alamat Tujuan:</label>
        <textarea
          value={editedOrder.alamatTujuan}
          onChange={(e) =>
            setEditedOrder({ ...editedOrder, alamatTujuan: e.target.value })
          }
        />

        <label htmlFor="tanggalJemput">Tanggal Jemput:</label>
        <input
          type="date"
          value={editedOrder.tanggalJemput}
          onChange={(e) =>
            setEditedOrder({ ...editedOrder, tanggalJemput: e.target.value })
          }
        />
        <label htmlFor="jenisLayanan">Jenis Layanan:</label>
        <select
          value={editedOrder.jenisLayanan}
          onChange={(e) =>
            setEditedOrder({ ...editedOrder, jenisLayanan: e.target.value })
          }
        >
          <option value="Delivery">Delivery</option>
          <option value="Packing">Packing</option>
          <option value="Storage">Storage</option>
        </select>
        <button onClick={confirmSave}>Simpan Perubahan</button>
      </form>
    </div>
  )
}

export default EditOrder
