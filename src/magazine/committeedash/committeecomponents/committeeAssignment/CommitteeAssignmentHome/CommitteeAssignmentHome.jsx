import CommitteeSidebar from '../../CommitteeSidebar/CommitteeSidebar'
import CommitteeNav from '../../committeeNav/CommitteeNav'
import './committeeAssignmentHome.scss'
import CommitteeAssignmentForm from '../CommitteeAssignmentForm/CommitteeAssignmentForm'
import CommitteeAssignmentTable from '../committeeAssignmentTable/CommitteeAssignmentTable'


const Assignment = () => {
  return (
    <div className='assignment'>
        <CommitteeSidebar/>
        <div className="assignmentContainer">
            <CommitteeNav/>
            <div className="formContainer">
              <CommitteeAssignmentForm/>
            </div>
            <div className="tableContainer">
              <CommitteeAssignmentTable/>
            </div>
        </div>
    </div>
  )
}

export default Assignment