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
import LandingPage from "./pages/LandingPage/LandingPage"
import CreateAccount from "./pages/Create/Create"
import AboutUs from "./pages/AboutUS/AboutUs"
import Services from "./pages/Service/Service"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DetailOrder from "./pages/Detail/Detail"
import EditOrder from "./pages/Edit/Edit"
import ChatAI from "./pages/Chat AI/ChatAI"
// import import.meta.env from "import.meta.env"

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
          <Route path="/detail-order" element={<DetailOrder />} />
          <Route path="/edit/:id" element={<EditOrder />} />
          <Route path="/chatAI" element={<ChatAI />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
