import Navbar from "../../components/Navbar/Navbar"
import Welcome from "../../components/Welcome/Welcome"
import Footer from "../../components/Footer/Footer"
// import Services from "../../components/Service/Service"
import { Link } from "react-router-dom"

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Welcome />
      {/* <Services />  */}
      <Footer />
    </div>
  )
}
export default LandingPage
