import "./committeeSidebar.scss"
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';
import logo from "../../../../assets/asca copy.png"
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import FeedbackIcon from '@material-ui/icons/Feedback';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PreviewIcon from '@mui/icons-material/Preview';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Login from "../../../../components/pages/login/Login";

function Committeesidebar() {
  return (
    <div className="commSidebar">
        <div className="top">
            <span className="logo">
                <img src= {logo} alt="" />
            </span></div>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <Link to="/committee/dashboard">
                    <span>
                    <DashboardIcon className="icons"/>
                        Dashboard
                    </span>
                    </Link>
                </li >
                
                <p className="title">USEFUL</p>

                <li>
                <Link to="/committee/assignment">

                    <span>
                        <AssignmentIcon className="icons"/>
                        ASSIGNMENTS
                    </span>
                    </Link>

                </li>
                <li>
                <Link to="/committee/review">

                    <span>
                        <PreviewIcon className="icons"/>
                        Reviews
                    </span>
                    </Link>

                </li>
                <li>
                <Link to="/committee/articles">

                    <span>
                        <NewspaperIcon className="icons"/>
                        Articles
                    </span>
                    </Link>
                </li>
                {/* <li>
                <Link to="/committee/magazineissue">

                    <span>
                        <ImportContactsIcon className="icons"/>
                        Magazine Issue
                    </span>
                    </Link>

                </li> */}
                <li>
                <Link to="/committee/advertisement">

                    <span>
                        <AttachMoneyIcon className="icons"/>
                        Advertisement
                    </span>
                    </Link>

                </li>


                <p className="title">USER</p>
                <li>
                <Link to="/login">

                    <span>
                        <ExitToAppIcon className="icons"/>
                        Logout
                    </span>
                    </Link>

                </li>
            </ul>
        </div>
        {/* <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>

        </div> */}
    </div>
  )
}

export default Committeesidebar