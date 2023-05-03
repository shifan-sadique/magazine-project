import Sidebar from "../dashcomponent/dashSidebar/Dashsidebar"
import Nav from "../dashcomponent/Nav/Nav"
import "./Individual.scss"
import Featured from "../dashcomponent/featured/Featured"
import List from "../dashcomponent/table/Table"

function CommitteeHome() {
  return (
    <div className="commhome">
      <Sidebar/>
      <div className="commhomeContainer">
      <Nav/>
        <div className="top">
          <div className="left">
            <div className="editButton">
              edit
            </div>
            <h1 className="title">User Information</h1>
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">
                  Nelwin George
                </h1>
                <img className="itemImg" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="detailitem">
                  <span className="itemKey">Batch:</span>
                  <span className="itemValue">21-23</span>
                </div>
                <div className="detailitem">
                  <span className="itemKey">Specialization:</span>
                  <span className="itemValue">Proof Read</span>
                </div>
                <div className="detailitem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">nellu@gmail.com</span>
                </div>

                <div className="detailitem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">9876543210</span>
                </div>
              </div>

            </div>
          </div>
          <div className="right">
              <Featured />
          </div>
        </div>
        <div className="userBottom">
        <h1 className="title">Work List</h1>
          <List/>
        </div>
      </div>
      </div>
  )
}
export default CommitteeHome