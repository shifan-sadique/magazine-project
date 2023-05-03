import "./committeeNav.scss"
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';

const CommitteeNav = () => {
  return (
    <div className="commnavbar">
       <div className="wrapper">
           <div className="search">
               <input type="text" placeholder="Search..." />
               <SearchIcon/>
           </div>
           <div className="items">
               <div className="item">
                   <LanguageIcon className="icon"/>
                   English
               </div>
               <div className="item">
                   <Brightness4Icon className="icon"/>
               </div>
               <div className="item">
                   <FullscreenIcon/>
               </div>
               <div className="item">
                   <NotificationsIcon className="icon"/>
                   <div className="counter">2</div>
               </div>
               <div className="item">
                   <ChatBubbleIcon className="icon"/>
                   <div className="counter">1</div>

               </div>
               <div className="item">
                   <ListOutlinedIcon className="icon"/>
               </div>
           </div>
       </div>
    </div>
  )
}

export default CommitteeNav