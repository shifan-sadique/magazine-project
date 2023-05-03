import "./dashsidebar.scss"
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

function Dashsidebar() {
  return (
    <div className="Sidebar">
        <div className="top">
            <span className="logo">
                <img src= {logo} alt="" />
            </span></div>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <Link to="/admin/dashboard">
                    <span>
                    <DashboardIcon className="icons"/>
                        Dashboard
                    </span>
                    </Link>
                </li >
                <p className="title">PEOPLE</p>

                <li>
                    <Link to="/admin/user">
                    <span>
                        <PeopleAltIcon className="icons"/>
                        Users
                    </span>
                    </Link>
                </li>
                
                <li>
                <Link to="/admin/magazinecommittee">
                    <span>
                        <SupervisorAccountIcon className="icons"/>
                        Magazine Committee
                    </span>
                    </Link>

                </li>
                
                <li>
                <Link to="/admin/dashboard">

                    <span>
                        <FeedbackIcon className="icons"/>
                        Feedback
                    </span>
                    </Link>

                </li>
                <p className="title">USEFUL</p>

                <li>
                <Link to="/admin/assignment">

                    <span>
                        <AssignmentIcon className="icons"/>
                        ASSIGNMENTS
                    </span>
                    </Link>

                </li>
                <li>
                <Link to="/admin/review">

                    <span>
                        <PreviewIcon className="icons"/>
                        Reviews
                    </span>
                    </Link>

                </li>
                <li>
                <Link to="/admin/articles">

                    <span>
                        <NewspaperIcon className="icons"/>
                        Articles
                    </span>
                    </Link>

                </li>
                <li>
                <Link to="/admin/magazineissue">

                    <span>
                        <ImportContactsIcon className="icons"/>
                        Magazine Issue
                    </span>
                    </Link>

                </li>
                <li>
                <Link to="/admin/advertisement">

                    <span>
                        <AttachMoneyIcon className="icons"/>
                        Advertisement
                    </span>
                    </Link>

                </li>
                <li>
                <Link to="/admin/dashboard">

                    <span>
                        <NotificationsActiveIcon className="icons"/>
                        Notification
                    </span>
                    </Link>

                </li>

                <li>
                <Link to="/admin/dashboard">

                    <span>
                        <SettingsIcon className="icons"/>
                        Settings
                    </span>
                    </Link>

                </li>
                <p className="title">USER</p>
                <li>
                <Link to="/admin/dashboard">

                    <span>
                        <PersonIcon className="icons"/>
                        Profile
                    </span>
                    </Link>

                </li>
                <li>
                <Link to="/admin/dashboard">

                    <span>
                        <ExitToAppIcon className="icons"/>
                        Logout
                    </span>
                    </Link>

                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>

        </div>
    </div>
  )
}

export default Dashsidebar