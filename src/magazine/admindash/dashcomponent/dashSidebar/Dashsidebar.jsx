import "./dashsidebar.scss"
import DashboardIcon from '@material-ui/icons/Dashboard';
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
                    <span>
                    <DashboardIcon className="icons"/>
                        Dashboard
                    </span>
                </li >
                <p className="title">PEOPLE</p>

                <li>
                    <span>
                        <PeopleAltIcon className="icons"/>
                        Users
                    </span>
                </li>
                
                <li>
                    <span>
                        <SupervisorAccountIcon className="icons"/>
                        Magazine Committee
                    </span>
                </li>
                
                <li>
                    <span>
                        <FeedbackIcon className="icons"/>
                        Feedback
                    </span>
                </li>
                <p className="title">USEFUL</p>

                <li>
                    <span>
                        <AssignmentIcon className="icons"/>
                        ASSIGNMENTS
                    </span>
                </li>
                <li>
                    <span>
                        <PreviewIcon className="icons"/>
                        Reviews
                    </span>
                </li>
                <li>
                    <span>
                        <NewspaperIcon className="icons"/>
                        Articles
                    </span>
                </li>
                <li>
                    <span>
                        <ImportContactsIcon className="icons"/>
                        Magazine Issue
                    </span>
                </li>
                <li>
                    <span>
                        <AttachMoneyIcon className="icons"/>
                        Advertisement
                    </span>
                </li>
                <li>
                    <span>
                        <NotificationsActiveIcon className="icons"/>
                        Notification
                    </span>
                </li>

                <li>
                    <span>
                        <SettingsIcon className="icons"/>
                        Settings
                    </span>
                </li>
                <p className="title">USER</p>
                <li>
                    <span>
                        <PersonIcon className="icons"/>
                        Profile
                    </span>
                </li>
                <li>
                    <span>
                        <ExitToAppIcon className="icons"/>
                        Logout
                    </span>
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