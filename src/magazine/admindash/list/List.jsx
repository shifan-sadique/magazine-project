import './list.scss'
import Sidebar from "../dashcomponent/dashSidebar/Dashsidebar"
import Navbar from '../dashcomponent/Nav/Nav'
function List() {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      </div>
    </div>
  )
}

export default List