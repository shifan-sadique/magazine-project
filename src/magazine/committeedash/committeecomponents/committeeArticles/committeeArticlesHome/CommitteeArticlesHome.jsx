import './committeeArticlesHome.scss'
import CommitteeNav from '../../committeeNav/CommitteeNav'
import Committeesidebar from '../../CommitteeSidebar/CommitteeSidebar'
import CommitteeArticlesForm from '../committeeArticlesForm/CommitteeArticlesForm'
import CommitteeArticlesTable from '../committeeArticlesTable/CommitteeArticlesTable'
const CommitteeArticlesHome = () => {
  return (
    <div className='articlehome'>
        <Committeesidebar/>
        <div className="articleHomeContainer">
            <CommitteeNav/>
            <div className="articleForm">
              <h1 className='title'>ARTICLES</h1>
                <CommitteeArticlesForm/>
            </div>
            {/* <div className="articleTable">
              <CommitteeArticlesTable/>
            </div> */}
        </div>
    </div>
  )
}

export default CommitteeArticlesHome