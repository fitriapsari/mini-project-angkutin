import React, { useState, useEffect } from "react"
// import "./OrderForm.module.css"
import Navbar from "../../components/Navbar/Navbar"
import { useNavigate } from "react-router-dom"
import { fetchOrders, postOrder } from "../../api/index"
import data from "../../api/data"
import { Link } from "react-router-dom"
import { Button, Container, Row, Col } from "react-bootstrap"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"

const initialValuesOrder = {
  nama: "",
  telepon: "",
  alamatPenjemputan: "",
  alamatTujuan: "",
  tanggalJemput: "",
  jenisLayanan: "",
  jarakTempuh: "",
}

const OrderSchema = Yup.object().shape({
  nama: Yup.string()
    .min(2, "Nama Terlalu Pendek!")
    .required("Nama Tidak Boleh Kosong!"),
  telepon: Yup.string()
    .min(10, "Nomor Telepon Minimal 11 Angka!")
    .required("Nomor Telepon Tidak Boleh Kosong!"),
  alamatPenjemputan: Yup.string().required(
    "Alamat Penjemputan Tidak Boleh Kosong!"
  ),
  alamatTujuan: Yup.string().required("Alamat Tujuan Tidak Boleh Kosong!"),
  tanggalJemput: Yup.string().required("Tanggal Jemput Tidak Boleh Kosong!"),
  jenisLayanan: Yup.string().required("Layanan Tidak Boleh Kosong!"),
  jarakTempuh: Yup.number().required("Jarak Tempuh Tidak Boleh Kosong!"),
})

const OrderForm = () => {
  const navigate = useNavigate()
  // State untuk menyimpan pesanan
  const [orders, setOrders] = useState([])

  const handleSubmit = (values) => {
    // notifikasi konfirmasi
    const isConfirmed = window.confirm(
      "Apakah Anda yakin ingin memesan jasa angkut?"
    )

    if (isConfirmed) {
      // Mengirim data pesanan ke API
      postOrder(values)
        .then((data) => {
          alert("Data berhasil ditambahkan!")
          fetchOrders()
            .then((data) => {
              setOrders(data)
            })
            .catch((error) => {
              console.error("Gagal mengambil data pesanan: ", error)
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
    <Container className="mt-5 pt-4">
      <Navbar />
      <Formik
        initialValues={initialValuesOrder}
        validationSchema={OrderSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values)
          resetForm()
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <h2 className="text-center">Form Pemesanan Jasa Angkut</h2>
            <Link to="/detail-order">
              <Button className="w-auto h-auto">Detail Order</Button>
            </Link>
            <Row className="mt-3 d-flex" style={{ alignItems: "flex-end" }}>
              <Col md={6}>
                <div className="form-input mb-3">
                  <label className="form-label" htmlFor="inputNama">
                    <strong>Nama</strong>
                  </label>
                  <Field
                    className="form-control"
                    type="text"
                    id="inputNama"
                    name="nama"
                    style={{ borderRadius: "15px" }}
                    placeholder="Nama Lengkap"
                  />
                  {errors.nama && touched.nama ? (
                    <div style={{ color: "red" }}>{errors.nama}</div>
                  ) : null}
                </div>
                <div className="form-input mb-3">
                  <label className="form-label" htmlFor="inputNomorTelepon">
                    <strong>Nomor Telepon</strong>
                  </label>
                  <Field
                    className="form-control"
                    type="number"
                    id="inputNomorTelepon"
                    name="telepon"
                    style={{ borderRadius: "15px" }}
                    placeholder="Nomor Telepon"
                  />
                  {errors.telepon && touched.telepon ? (
                    <div style={{ color: "red" }}>{errors.telepon}</div>
                  ) : null}
                </div>
                <div className="form-input mb-3">
                  <label className="form-label" htmlFor="inputTanggal">
                    <strong>Tanggal Jemput</strong>
                  </label>
                  <Field
                    className="form-control"
                    type="date"
                    id="inputTanggal"
                    name="tanggalJemput"
                    style={{ borderRadius: "15px" }}
                  />
                  {errors.tanggalJemput && touched.tanggalJemput ? (
                    <div style={{ color: "red" }}>{errors.tanggalJemput}</div>
                  ) : null}
                </div>
                <div className="form-input mb-3">
                  <label className="form-label" htmlFor="inputJarak">
                    <strong>Jarak tempuh (KM)</strong>
                  </label>
                  <Field
                    className="form-control"
                    type="number"
                    id="inputJarak"
                    name="jarakTempuh"
                    style={{ borderRadius: "15px" }}
                    placeholder="Jarak Tempuh"
                  />
                  {errors.jarakTempuh && touched.jarakTempuh ? (
                    <div style={{ color: "red" }}>{errors.jarakTempuh}</div>
                  ) : null}
                </div>
              </Col>
              <Col md={6}>
                <div className="form-input mb-3">
                  <label className="form-label">
                    <strong>Jenis Layanan</strong>
                  </label>
                  <Field
                    className="form-control"
                    component="select"
                    id="inputLayanan"
                    name="jenisLayanan"
                    style={{ borderRadius: "15px" }}
                  >
                    <option value="">Pilih Jenis Layanan</option>
                    <option value="Delivery">Delivery</option>
                    <option value="Packing">Packing</option>
                    <option value="Storage">Storage</option>
                  </Field>
                  {errors.jenisLayanan && touched.jenisLayanan ? (
                    <div style={{ color: "red" }}>{errors.jenisLayanan}</div>
                  ) : null}
                </div>
                <div className="form-input mb-3">
                  <label className="form-label">
                    <strong>Alamat Penjemputan</strong>
                  </label>
                  <Field
                    className="form-control"
                    component="textarea"
                    rows={3}
                    id="inputAlamatPenjemputan"
                    name="alamatPenjemputan"
                    style={{ borderRadius: "15px" }}
                    placeholder="Alamat Penjemputan"
                  />
                  {errors.alamatPenjemputan && touched.alamatPenjemputan ? (
                    <div style={{ color: "red" }}>
                      {errors.alamatPenjemputan}
                    </div>
                  ) : null}
                </div>
                <div className="form-input mb-3">
                  <label className="form-label">
                    <strong>Alamat Tujuan</strong>
                  </label>
                  <Field
                    className="form-control"
                    component="textarea"
                    rows={3}
                    id="inputAlamatTujuan"
                    name="alamatTujuan"
                    style={{ borderRadius: "15px" }}
                    placeholder="Alamat Tujuan"
                  />
                  {errors.alamatTujuan && touched.alamatTujuan ? (
                    <div style={{ color: "red" }}>{errors.alamatTujuan}</div>
                  ) : null}
                </div>
              </Col>
            </Row>
            <div className="d-flex float-end gap-2 mt-3">
              <Button type="reset" variant="danger">
                Reset
              </Button>
              <Button type="submit" variant="success">
                Pesan Jasa Angkut
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default OrderForm
