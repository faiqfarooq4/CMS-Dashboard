import React, { useState } from 'react';
import '../../assets/css/style.css'; // Corrected import


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHuman, setIsHuman] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    if (!isHuman) {
      alert("Please verify you're not a robot");
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);

    // Perform your login logic here
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" id="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group recaptcha-group">
          <input
            type="checkbox"
            id="recaptcha"
            name="recaptcha"
            checked={isHuman}
            onChange={(e) => setIsHuman(e.target.checked)}
            required
          />
          <label htmlFor="recaptcha">I'm not a robot</label>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
