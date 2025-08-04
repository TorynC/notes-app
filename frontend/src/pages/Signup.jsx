import React from 'react'
import '../styles/index.css'
import '../styles/form.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../utils/axiosinstance'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  const handleSignup = async(e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name");
      return;
    }

    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }
    
    //signup API call 
    try {
      const response = await axiosInstance.post("/create-account", {
        fullName: name,
        email: email,
        password: password
      });

      if (response.data && response.data.error ) {
        setError(response.data.message);
        return;
      }

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/home");
      }
    } catch (error) {
      // handle signup error
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      }

  }

  return (
    <>
        <div className="form-container">
          <div className="form-container-2">
            <form onSubmit={handleSignup}>
              <h4>Sign Up</h4>
              <input required type="text" placeholder='Email' className='input-box' value={email} onChange={(e) => setEmail(e.target.value)}/>
              <input required type="text" placeholder='Name' className='input-box' value={name} onChange={(e) => setName(e.target.value)}/>
              <input required type="text" placeholder='Password' className='password-box' value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button type='submit' className="btn-primary">
                Submit
              </button>
              <p>
                Already have an account?{" "} <Link to="/login" className=''> Login </Link>
              </p>
            </form>
          </div>
        </div>
    </>
  )
}

export default Signup