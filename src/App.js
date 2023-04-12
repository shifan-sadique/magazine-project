import TopBar from "./components/topbar/topbar.jsx"
import Home from "./components/pages/home/Home"
import Single from "./components/pages/single/single"
import Write from "./components/pages/write/Write.jsx";
import Settings from "./components/pages/settings/Settings.jsx";
import Login from "./components/pages/login/Login.jsx";
import Magazine from "./magazine/pages/home/MagazineHome.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./magazine/admindash/dashhome/Dashhome.jsx"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Register from "./components/register/Register.jsx";



function App() {
  const user= false;
  return (
   <Router> 
    <div className="App">
      {/* <TopBar user/> */}
      <Dashboard/>
      <Routes>
        <Route path="/home" element={<Home/>}> </Route>
        <Route path="/magazine" element={<Magazine/>}> </Route>
        <Route path="/post/:postId" element={<Single/>}> </Route>
        <Route path="/write" element={<Write/>}> </Route>
        <Route path="/settings" element={user? <Settings/> : <Home/>}> </Route>
        <Route path="/login" element={user? <Home/> : <Login/>}> </Route>
        <Route path="/register" element={user? <Home/> : <Register/>}> </Route>
        <Route path="/dashboard" element={user? <Dashboard/> : <Home/>}></Route>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
