import Navbar from "../../components/Navbar/Navbar"
import Welcome from "../../components/Welcome/Welcome"
import Footer from "../../components/Footer/Footer"
import { Link } from "react-router-dom"
import Services from "../Service/Service"

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Services />
      <Footer />
    </div>
  )
}
export default LandingPage
