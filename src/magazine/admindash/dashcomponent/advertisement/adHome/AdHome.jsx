import './adHome.scss'
import Nav from '../../Nav/Nav'
import Sidebar from '../../dashSidebar/Dashsidebar'
import AdForm from '../adForm/AdForm'
import AdTable from '../adTable/AdTable'

const AdHome = () => {
  return (
    <div className='adHome'>
        <Sidebar/>
        <div className="adHomeContainer">
            <Nav/>
            <div className="articleForm">
                <AdForm/>
            </div>
            <div className="articleTable">
              <AdTable/>
            </div>
        </div>
    </div>
  )
}

export default AdHome