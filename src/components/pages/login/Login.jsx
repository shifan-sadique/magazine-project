import Register from "../../register/Register"
import Settings from "../settings/Settings"
import "./login.css"
import { Link } from 'react-router-dom';




export default function Login(props) {
      
  return (
    <div className="login" id="gradient">
        <form className="loginForm">
        <span className="loginTitle" >LOGIN</span>
            <label htmlFor="">Email</label>
            <input className="" type="text" placeholder="emil" id="" />
            <label htmlFor="">Password</label>
            <input type="password" placeholder="password" id="" />
            <button className="loginButton">Login</button><br />
            <Link to="/register">
              <button className="loginRegisterButton">Register</button>
            </Link>
        </form>
    </div>
  )
}

