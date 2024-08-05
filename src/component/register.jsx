import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useHistory,useNavigate } from 'react-router-dom';


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    
    
    const handleSubmit = async (e) => {
      e.preventDefault();

  
      try {
        const response = await axios.post('http://localhost:4000/register', {
          username,
          password,
        });
  
        setMessage(response.data)
         navigate('/login')
      } catch (error) {
        setMessage('Error registering');
        console.log(error);
      }
    };
  
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header text-center justify-center">Register</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">Register</button>
                </form>
                {message && <p>{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Register;
