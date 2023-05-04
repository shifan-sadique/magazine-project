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
        <Route path="/registerdetails" element={user? <Home/> : <RegisterDetails/>}> </Route>
        <Route path="/register" element={user? <Home/> : <Register/>}> </Route>

        <Route path="/dashboard" element={user?<Home/> :  <Dashboard/>}></Route>

        {/* Admin Dashboard */}
        <Route path="/admin/dashboard" element={user? <Dashboard/> : <Login/> }></Route>

          {/* User page and individual page with ID */}
          <Route path="/admin/user" element={user ?<NewBatch/> : <Navigate to="/login" />} />
          {/* user sections ends here */}

          {/* Magazine Committee Section */}
          <Route path="/admin/magazinecommittee" element={user ? <List /> : <Navigate to="/login" />} />
          <Route path="/admin/magazinecommittee/edit" element={user ? <EditUser /> : <Navigate to="/login" />} />
          <Route path="/admin/magazinecommittee/:id" element={user ? <Individual /> : <Navigate to="/login" />} />
          {/* Magazine Committee ends here */}

          {/* Assignment Section */}
          <Route path="/admin/assignment" element={user?<Assignment/>:<Home/>}></Route>
          {/* assignment section end here */}

          {/* Review Section */}
          <Route path="/admin/review" element={user? <Review/>: <Home/>}></Route>
          {/* review section ends here */}

          {/* Article Section */}
          <Route path="/admin/articles" element={user?<Article/> :<Home/>}></Route>
          {/* Article Section end */}

          {/* magazine issue not done */}
          <Route path="/admin/magazineissue" element={user? <Dashboard/>: <Home/>}></Route>
          {/* magaznine issue end */}

          {/* advertisement section */}
          <Route path="/admin/advertisement" element={user?  <Advertisement/> : <Home/>}></Route>
          {/* ad section end */}

          <Route path="/admin/dashboard/notification" element={user?<Dashboard/> : <Home/>}></Route>
          <Route path="/admin/dashboard/settings" element={user? <Dashboard/> : <Home/>}></Route>
          <Route path="/admin/profile" element={user?<Dashboard/> : <Home/>}></Route>


          {/* Magazine Committe Section  */}

            {/* Committee Dashboard  */}
            <Route path="/committee/dashboard" element={user? <CommitteeHome/>: <Home/>}></Route>

            {/* Committee Assignment */}
            <Route path="/committee/assignment" element={user? <CommitteeAssignment/>: <Home/>}></Route>

            {/* Committee Review */}
            <Route path="/committee/review" element={user? <CommitteeReview/>: <Home/>}></Route>

            {/* committee articles */}
            <Route path="/committee/articles" element={user? <CommitteeArticlesHome/>: <Home/>}></Route>

            {/* committee Advertisement */}
            <Route path="/committee/advertisement" element={user? <CommitteeAdHome/>: <Home/>}></Route>




          
      </Routes>
    </div>
    </Router>
  );
}

export default App;
