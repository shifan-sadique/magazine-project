import "./dashsidebar.scss"
import DashboardIcon from '@material-ui/icons/Dashboard';
import logo from "../../../../assets/asca copy.png"

function Dashsidebar() {
  return (
    <div className="Sidebar">
        <div className="top">
            <span className="logo">
                <img src= {logo} alt="" />
            </span></div>
        <div className="center">
            <ul>
                <li>
                    <span>
                    <DashboardIcon/>
                        Dashboard
                    </span>
                </li >
                <li>
                    <span>
                        Dashboard
                    </span>
                </li>
                <li>
                    <span>
                        Dashboard
                    </span>
                </li>
                <li>
                    <span>
                        Dashboard
                    </span>
                </li>
            </ul>
        </div>
        <div className="bottom">color</div>
    </div>
  )
}

export default Dashsidebar