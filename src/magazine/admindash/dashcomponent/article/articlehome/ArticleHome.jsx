import './articleHome.scss'
import Nav from '../../Nav/Nav'
import Sidebar from '../../dashSidebar/Dashsidebar'
import ArticleForm from '../ArticleForm/ArticleForm'
import ArticleTable from '../articleTable/ArticleTable.jsx'
const ArticleHome = () => {
  return (
    <div className='articlehome'>
        <Sidebar/>
        <div className="articleHomeContainer">
            <Nav/>
            <div className="articleForm">
                <ArticleForm/>
            </div>
            <div className="articleTable">
              <ArticleTable/>
            </div>
        </div>
    </div>
  )
}

export default ArticleHome