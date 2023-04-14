import TopBar from "./components/topbar/topbar.jsx"
import Home from "./components/pages/home/Home"
import Single from "./components/pages/single/single"
import Write from "./components/pages/write/Write.jsx";
import Settings from "./components/pages/settings/Settings.jsx";
import Login from "./components/pages/login/Login.jsx";
import Magazine from "./magazine/pages/home/MagazineHome.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./magazine/admindash/dashhome/Dashhome.jsx"
import List from "./magazine/admindash/list/List.jsx";
import Individual from "./magazine/admindash/individual/Individual.jsx";
import NewUser from "./magazine/admindash/newuser/Newuser.jsx"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Register from "./components/register/Register.jsx";


function App() {
  const user= true;
  return (
   <Router> 
    <div className="App">
      {/* <TopBar user/> */}
      {/* <Dashboard/> */}
      <Routes>
        {/* Blog Page */}
        <Route path="/home" element={<Home/>}> </Route>
        <Route path="/magazine" element={<Magazine/>}> </Route>
        <Route path="/post/:postId" element={<Single/>}> </Route>
        <Route path="/write" element={<Write/>}> </Route>
        <Route path="/settings" element={user? <Settings/> : <Home/>}> </Route>
        <Route path="/login" element={user? <Home/> : <Login/>}> </Route>
        <Route path="/register" element={user? <Home/> : <Register/>}> </Route>
        <Route path="/dashboard" element={user?<Home/> :  <Dashboard/>}></Route>

        {/* Admin Dashboard */}
        <Route path="/admin/dashboard" element={user? <Dashboard/> : <Login/> }></Route>

        {/* User page and individual page with ID */}
        
      <Route path="/admin/dashboard/user" element={user ? <List /> : <Navigate to="/login" />} />
      <Route path="/admin/dashboard/user/new" element={user ? <NewUser /> : <Navigate to="/login" />} />
      <Route path="/admin/dashboard/user/:id" element={user ? <Individual /> : <Navigate to="/login" />} />



        <Route path="/admin/dashboard/committee" element={user?<Dashboard/> :<Home/>}></Route>
        <Route path="/admin/dashboard/feedback" element={user?  <Dashboard/>:<Home/>}></Route>
        <Route path="/admin/dashboard/assignments" element={user? <Dashboard/>: <Home/>}></Route>
        <Route path="/admin/dashboard/reviews" element={user?<Dashboard/> : <Home/>}></Route>
        <Route path="/admin/dashboard/articles" element={user?<Dashboard/> :<Home/>}></Route>
        <Route path="/admin/dashboard/magazineissue" element={user? <Dashboard/>: <Home/>}></Route>
        <Route path="/admin/dashboard/advertisement" element={user?  <Dashboard/> : <Home/>}></Route>
        <Route path="/admin/dashboard/notification" element={user?<Dashboard/> : <Home/>}></Route>
        <Route path="/admin/dashboard/settings" element={user? <Dashboard/> : <Home/>}></Route>
        <Route path="/admin/profile" element={user?<Dashboard/> : <Home/>}></Route>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
