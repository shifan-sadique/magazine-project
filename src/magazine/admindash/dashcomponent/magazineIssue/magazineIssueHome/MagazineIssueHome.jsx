import './magazineIssueHome.scss'
import Nav from '../../Nav/Nav'
import Sidebar from '../../dashSidebar/Dashsidebar'
import MagazineIssueForm from '../magazineIssueForm/MagazineIssueForm'

const ArticleHome = () => {
  return (
    <div className='magazineIssueHome'>
        <Sidebar/>
        <div className="magazineIssueHomeContainer">
            <Nav/>
            <div className="articleForm">
                <MagazineIssueForm/>
            </div>

        </div>
    </div>
  )
}

export default ArticleHome