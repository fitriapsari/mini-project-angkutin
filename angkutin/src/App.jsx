import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Welcome from "./components/Welcome/Welcome"
import Footer from "./components/Footer/Footer"
import Login from "../src/pages/Login/Login"
import OrderForm from "./pages/Order/Order"
// import OrderTable from "./pages/Detail/Detail"
import LandingPage from "./pages/LandingPage/LandingPage"
import CreateAccount from "./pages/Create/Create"
import AboutUs from "./components/AboutUS/AboutUs"
import Services from "./components/Service/Service"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" element={<Services />} />
          <Route path="/order-form" element={<OrderForm />} />
        </Routes>
      </Router>
      {/* <CreateAccount /> */}
      {/* <Navbar />
      <Welcome />
      <Footer /> */}
      {/* <Login />
      <OrderForm /> */}
      {/* <OrderTable /> */}
      {/* <LandingPage /> */}
    </div>
  )
}

export default App
