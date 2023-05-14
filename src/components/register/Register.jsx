import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection,setDoc, doc, serverTimestamp, getDoc } from "firebase/firestore"; 
import { db, auth } from "../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import "./register.css";


export default function Register(props) {
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = useState("");
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


    // Validate confirm password
    if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        // Create user in Firebase Authentication
        const authUser = await createUserWithEmailAndPassword(auth, email, password);

        console.log(authUser);
        console.log(authUser.user);
        console.log(authUser.user.uid);


        // Add user details to the database
        const data = {
          id: authUser.user.uid, // Use the authenticated user's UID as the document ID
          name,
          phoneNumber,
          email,
          timestamp: serverTimestamp(),
        };
  
        const userRef = await setDoc(doc(db, "user", authUser.user.uid), data); // Use setDoc instead of addDoc with the specific document ID
        console.log("Document written with ID: ");

        // Redirect to register details page
        await navigate(-1); // Navigate to the desired page

        
      } catch (error) {
        console.error("Error creating user or adding document: ", error);
      }
    }
  };


  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
      <span className="registerTitle">COMMITTEE REGISTERATION</span>
        <label htmlFor="name">Name</label>
        <input className='registerInput' type="text" placeholder="Name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input className='registerInput' type="number" placeholder="Mobile" id="phoneNumber" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
        {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
      
        <label htmlFor="email">Email</label>
        <input className='registerInput' type="text" placeholder="Email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="password">Password</label>
        <input className='registerInput' type="password" placeholder="Password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        {errors.password && <div className="error">{errors.password}</div>}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input className='registerInput' type="password" placeholder="Confirm Password" id="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
        <button type="submit" className="registerButton">Register</button>
      </form>
    </div>
  );
}


