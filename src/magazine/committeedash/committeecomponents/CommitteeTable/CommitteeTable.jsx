import './committeeTable.scss'
import CommitteeSidebar from '../CommitteeSidebar/CommitteeSidebar'
import CommitteeNav from '../committeeNav/CommitteeNav'
import CommitteeDatatable from '../committeeDataTable/CommitteeDataTable'
function List() {
  return (
    <div className='list'>
      <div className="listContainer">
        <CommitteeDatatable/>
      </div>
    </div>
  )
}

export default List