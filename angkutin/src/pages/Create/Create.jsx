import React from "react"
import "./Create.module.css"
import create from "../../assets/create.png"

const CreateAccount = () => {
  return (
    <div className="container text-center">
      {/* <div className="logo ms-4">
        <img src="logo-s.png" width={150} alt="Logo" />
      </div> */}
      <div className="row">
        <div className="col">
          <div className="rectangle">
            <img className="in-rec" src={create} alt="Create" />
          </div>
        </div>
        <div className="col" id="box">
          <h2>Create your account</h2>
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
          <h3>Nama</h3>
          <div className="input-group flex-nowrap">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              aria-label="Enter your name"
              aria-describedby="addon-wrapping"
            />
          </div>
          <h3>Email</h3>
          <div className="input-group flex-nowrap">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Enter your email"
              aria-describedby="addon-wrapping"
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
            />
          </div>
          <button className="btn btn-primary mt-4 border-0" type="submit">
            Create
          </button>
          <div className="input-group-text">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              defaultValue=""
              aria-label="Checkbox for following text input"
            />
            <p>I agree to all Terms, Privacy Policy, and Fees</p>
          </div>
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
  )
}

export default CreateAccount
