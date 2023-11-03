import React, { useState } from "react"
import create from "../../assets/create.png"
import Navbar from "../../components/Navbar/Navbar"
import { useNavigate } from "react-router-dom"
import app from "../Auth/Authfirebase"
import { auth } from "../Auth/Authfirebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleClickLogin = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError("Email and password are required")
      return
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      localStorage.setItem("user", JSON.stringify(userCredential.user))
      alert("Login Successfully!")
      navigate("/")
    } catch (firebaseError) {
      const errorMessage = firebaseError.message
      setError(errorMessage)
      alert("Login Failed!")
    }
  }

  return (
    <div>
      <Navbar />
      <form className="container text-center" onSubmit={handleClickLogin}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="rectangle">
                <img className="in-rec" src={create} alt="Create" />
              </div>
            </div>
            <div className="col" id="box">
              <h2>Login to your account</h2>
              <p>Mari berpindah bersama!</p>
              <br />
              <a href="/auth/google">
                <button
                  className="btn btn-light flex-nowrap"
                  id="google"
                  type="button"
                >
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="Google Icon"
                  />
                  Sign Up with Google
                </button>
              </a>
              <div className="line">
                <div className="row">
                  <div className="col">
                    <hr />
                  </div>
                  <div className="col">
                    <p className="or">Or</p>
                  </div>
                  <div className="col">
                    <hr />
                  </div>
                </div>
              </div>
              <h3>Email</h3>
              <div className="input-group flex-nowrap">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  aria-describedby="addon-wrapping"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <h3>Password</h3>
              <div className="input-group flex-nowrap">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  aria-label="Enter your password"
                  aria-describedby="addon-wrapping"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-danger">{error}</p>}
              <button className="btn btn-primary mt-4 border-0" type="submit">
                Login
              </button>
              <ul className="group">
                <li>
                  <p>Already have an account?</p>
                  <a className="btn btn-link" href="#Login" role="button">
                    Log in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
