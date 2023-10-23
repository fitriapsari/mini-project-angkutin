import React, { useState } from "react"
import OrderForm from "../Order/Order"

const OrderTable = ({ orders, handleEdit, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Nomor Telepon</th>
          <th>Alamat Penjemputan</th>
          <th>Alamat Tujuan</th>
          <th>Tanggal Jemput</th>
          <th>Jenis Pengangkutan</th>
          <th>Jenis Mobil</th>
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
            <td>{order.jenisPengangkutan}</td>
            <td>{order.jenisMobil}</td>
            <td>{order.jarakTempuh}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default OrderTable
