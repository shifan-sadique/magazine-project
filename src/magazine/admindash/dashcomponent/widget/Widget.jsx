import './widget.scss'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FeedbackIcon from '@material-ui/icons/Feedback';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

const Widget = ({type}) => {
    let data;


    //temp
    const amount=100;
    const diff=20;


        switch(type){
                case "articles":
                    data={
                        title:"Pending Articles",
                        ISmONEY: false,
                        link: "See all Pending Articles",
                        icon:(<AssignmentIcon className='icon' style={{backgroundColor: "#1974d230", color:"navy"}}/> ),              
                    };
                    break;
                    
                case "feedback":
                    data={
                        title:"Feedback",
                        ISmONEY: false,
                        link: "View All Feedbacks",
                        icon:<FeedbackIcon className='icon' style={{backgroundColor: "#fdcf7630", color:"#fdcf76"}}/>                   
                    };
                    break;
                case "stats":
                    data={
                        title:"Article Statistics",
                        ISmONEY: false,
                        link: "View All Articles",
                        icon:<EqualizerIcon className='icon' style={{backgroundColor: "#33004430", color:"#330044"}}/>                   
                    };
                    break;
                    
                case "advertisement":
                    data={
                        title:"Advertisement",
                        ISmONEY: true,
                        link: "See Ad Stats",
                        icon:<MonetizationOnIcon className='icon'style={{backgroundColor: "#ffff0030", color:"gold"}}/>                   
                    };
                    break;
                    
                case "committee":
                    data={
                        title:"Volunteer Request",
                        ISmONEY: false,
                        link: "View All Requests",
                        icon:<GroupAddIcon className='icon' style={{backgroundColor: "#990f0230", color:"#990f02"}}/>                   
                    };
                    break;

                case "name":
                    data={
                        title:"Name Suggestions",
                        ISmONEY: false,
                        link: "View All Names",
                        icon:<HourglassEmptyIcon className='icon' style={{backgroundColor: "#00ff0030", color:"#00ff00"}}/>                   
                    };
                    break;                    
                    default:
                        break;
        }



  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
                {data.isMoney && "$"} {amount}
            </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                {diff}
            </div>
        <div className="icon">
            {data.icon}
        </div>
        </div>
    </div>
  )
}

export default Widget