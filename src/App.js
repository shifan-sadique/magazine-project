import TopBar from "./components/topbar/topbar.jsx"
import Home from "./components/pages/home/Home"
import Single from "./components/pages/single/single"
import Write from "./components/pages/write/Write.jsx";
import Settings from "./components/pages/settings/Settings.jsx";
import Login from "./components/pages/login/Login.jsx";
import RegisterDetails from './components/registerDetails/RegisterDetails.jsx'
import Magazine from "./magazine/pages/home/MagazineHome.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./magazine/admindash/dashhome/Dashhome.jsx"
import List from "./magazine/admindash/list/List.jsx";
import Individual from "./magazine/admindash/individual/Individual.jsx";
import EditUser from "./magazine/admindash/newuser/Newuser.jsx"
import NewBatch from "./magazine/admindash/dashcomponent/newBatch/NewBatch.jsx";
import Assignment from "./magazine/admindash/dashcomponent/assignment/assignmentHome/AssignmentHome.jsx"
import Review from "./magazine/admindash/dashcomponent/review/Review.jsx"
import Article from "./magazine/admindash/dashcomponent/article/articlehome/ArticleHome.jsx"
import Advertisement from "./magazine/admindash/dashcomponent/advertisement/adHome/AdHome.jsx"
import MagazineIssue from "./magazine/admindash/dashcomponent/magazineIssue/magazineIssueHome/MagazineIssueHome.jsx"
import MagazineDisplay from "./components/pages/magazineDisplay/MagazineDisplay.jsx";


// magazine committee imports
import CommitteeHome from './magazine/committeedash/committeecomponents/committeeHome/CommitteeHome.jsx'
import CommitteeAssignment from './magazine/committeedash/committeecomponents/committeeAssignment/CommitteeAssignmentHome/CommitteeAssignmentHome.jsx'
import CommitteeReview from './magazine/committeedash/committeecomponents/committeeReview/CommitteeReview.jsx'
import CommitteeArticlesHome from './magazine/committeedash/committeecomponents/committeeArticles/committeeArticlesHome/CommitteeArticlesHome.jsx'
import CommitteeAdHome from './magazine/committeedash/committeecomponents/committeeAdvertisement/committeeAdvertisementHome/CommitteeAdvertisementHome.jsx'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Register from "./components/register/Register.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";


function App() {
  
  const {currentUser} =useContext(AuthContext);

  const RequireAuth= ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>;
  };


    console.log(currentUser)
  return (
   <Router> 
    <div className="App">
      {/* <TopBar user/> */}
      {/* <Dashboard/> */}
      <Routes>
        {/* Blog Page */}

        <Route path="/" element={<Home/>}> </Route>
        <Route path="/magazine" element={<Magazine/>}> </Route>
        <Route path="/post/:postId" element={<Single/>}> </Route>
        <Route path="/write" element={<Write/>}> </Route>
        <Route path="/settings" element={currentUser? <Settings/> : <Home/>}> </Route>
        <Route path="/registerdetails" element={ <RegisterDetails/>}> </Route>
        <Route path="/register" element={<Register/> }> </Route>

        {/* Login */}
        <Route path="/login" element={<Login/>}> </Route>

        {/* Magazine Display */}
        <Route path="/magazinedisplay" element={<MagazineDisplay/>}> </Route>


        <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>} />
          {/* Admin Dashboard */}
          <Route path="/admin/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>} />

          {/* User page and individual page with ID */}
          <Route path="/admin/user" element={<RequireAuth><NewBatch/></RequireAuth>} />

          {/* Magazine Committee Section */}
          <Route path="/admin/magazinecommittee" element={<RequireAuth><List/></RequireAuth>} />
          <Route path="/admin/magazinecommittee/edit" element={<RequireAuth><EditUser/></RequireAuth>} />
          <Route path="/admin/magazinecommittee/:id" element={<RequireAuth><Individual/></RequireAuth>} />

          {/* Assignment Section */}
          <Route path="/admin/assignment" element={<RequireAuth><Assignment/></RequireAuth>} />

          {/* Review Section */}
          <Route path="/admin/review" element={<RequireAuth><Review/></RequireAuth>} />

          {/* Article Section */}
          <Route path="/admin/articles" element={<RequireAuth><Article/></RequireAuth>} />

          {/* Magazine Issue */}
          <Route path="/admin/magazineissue" element={<RequireAuth><MagazineIssue/></RequireAuth>} />

          {/* Advertisement Section */}
          <Route path="/admin/advertisement" element={<RequireAuth><Advertisement/></RequireAuth>} />

          <Route path="/admin/dashboard/notification" element={<RequireAuth><Dashboard/></RequireAuth>} />
          <Route path="/admin/dashboard/settings" element={<RequireAuth><Dashboard/></RequireAuth>} />
          <Route path="/admin/profile" element={<RequireAuth><Dashboard/></RequireAuth>} />

          {/* Magazine Committe Section  */}

            {/* Committee Dashboard  */}
            <Route path="/committee/dashboard" element={currentUser? <CommitteeHome/>: <Home/>}></Route>

            {/* Committee Assignment */}
            <Route path="/committee/assignment" element={currentUser? <CommitteeAssignment/>: <Home/>}></Route>

            {/* Committee Review */}
            <Route path="/committee/review" element={currentUser? <CommitteeReview/>: <Home/>}></Route>

            {/* committee articles */}
            <Route path="/committee/articles" element={currentUser? <CommitteeArticlesHome/>: <Home/>}></Route>

            {/* committee Advertisement */}
            <Route path="/committee/advertisement" element={currentUser? <CommitteeAdHome/>: <Home/>}></Route>


      </Routes>
    </div>
    </Router>
  );
}

export default App;
