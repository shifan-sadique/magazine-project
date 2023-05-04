import './committeeAdvertisementHome.scss'
import Committeesidebar from '../../CommitteeSidebar/CommitteeSidebar'
import CommitteeNav from '../../committeeNav/CommitteeNav'
import CommitteeAdForm from '../committeeAdvertisementForm/CommitteeAdvertisementForm'
const ArticleHome = () => {
  return (
    <div className='articlehome'>
        <Committeesidebar/>
        <div className="articleHomeContainer">
            <CommitteeNav/>
            <div className="articleForm">
                <h1 className='title'>ADVERTISEMENT</h1>
                <CommitteeAdForm/>
            </div>
        </div>
    </div>
  )
}

export default ArticleHome