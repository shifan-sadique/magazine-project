import Sidebar from "../dashcomponent/dashSidebar/Dashsidebar"
import Nav from "../dashcomponent/Nav/Nav"
import "./Individual.scss"


function Individual() {
  return (
    <div className="individual">
      <Sidebar/>
      <div className="indiContainer">
      <Nav/>
        <div className="top">
          <div className="left">
            <div className="editButton">
              edit
            </div>
            <h1 className="title">User Information</h1>
            <div className="item">
              <img className="itemImg" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              Details
            
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom"></div>
      </div>
      </div>
  )
}
export default Individual