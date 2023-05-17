import Sidebar from '../../dashSidebar/Dashsidebar'
import Nav from '../../Nav/Nav'
import './assignmentHome.scss'
import AssignmentForm from '../AssignmentForm/AssignmentForm'
import AssignmentTable from '../assignmentTable/AssignmentTable'


const Assignment = () => {
  return (
    <div className='assignment'>
        <Sidebar/>
        <div className="assignmentContainer">
            <Nav/>
            <div className="formContainer">
              <AssignmentForm/>
            </div>
            <div className="tableContainer">
              <AssignmentTable/>
            </div>
            {/* <div className="tableContainer">
              <AssignmentTable/>
            </div> */}
        </div>
    </div>
  )
}

export default Assignment