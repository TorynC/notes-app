import '../styles/index.css'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/form.css'
import { useState, useEffect } from 'react'
import axiosInstance from '../utils/axiosinstance'


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();

    // login API call 
    try {
      const response = await axiosInstance.post("/login", {
        email: username,
        password: password
      });

      if (response.data && response.data.accessToken ) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/home");
      }
    } catch (error) {
      // handle login error
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      }
    };

  return (
    <>
        <div className="form-container">
          <div className="form-container-2">
            <form onSubmit={handleLogin}>
              <h4>Login</h4>
              <input required type="text" placeholder='Email' className='input-box' value={username} onChange={(e) => setUsername(e.target.value)}/>
              <input required type="password" placeholder='Password' className='password-box' value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button type='submit' className="btn-primary">
                Submit
              </button>
              <p>
                Not Registered yet?{" "} <Link to="/signup" className=''> Create a new account </Link>
              </p>
            </form>
          </div>
        </div>
    </>
  )
}

export default Login;