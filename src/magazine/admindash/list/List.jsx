import './list.scss'
import Sidebar from "../dashcomponent/dashSidebar/Dashsidebar"
import Navbar from '../dashcomponent/Nav/Nav'
import Datatable from '../dashcomponent/datatable/Datatable'
function List() {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List