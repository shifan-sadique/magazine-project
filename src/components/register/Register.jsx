import { useState } from 'react';
import "./register.css"

export default function Register(props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    // Validate phone number
    if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = "Phone number must be 10 digits";
    }

    // Validate password
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      errors.password = "Password must contain both letters and numbers";
    }

    // Validate username
    if (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(username)) {
      errors.username = "Username must start with a letter and contain only letters and numbers";
    }

    // Validate confirm password
    if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Submit form
      console.log("Submitting form...");
    }
  };

  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
      <span className="registerTitle">REGISTER</span>
        <label htmlFor="name">Name</label>
        <input className='registerInput' type="text" placeholder="Name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input className='registerInput' type="number" placeholder="Mobile" id="phoneNumber" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
        {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
        <label htmlFor="username">Username</label>
        <input className='registerInput' type="text" placeholder="Username" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        {errors.username && <div className="error">{errors.username}</div>}
        <label htmlFor="email">Email</label>
        <input className='registerInput' type="text" placeholder="Email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="password">Password</label>
        <input className='registerInput' type="password" placeholder="Password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        {errors.password && <div className="error">{errors.password}</div>}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" placeholder="Confirm Password" id="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
        <button type="submit" className="registerButton">Register</button>
      </form>
    </div>
  );
}
