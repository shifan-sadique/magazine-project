import './committeeFeatured.scss'
import '../committeeHome/committeeHome.scss'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar"; 
import 'react-circular-progressbar/dist/styles.css'



const CommitteeFeatured = () => {
  return (
    <div className='committeefeatured'>
        <div className="top">
          <h1 className='title'>Workflow</h1>
          <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
          <div className="featuredchart">
              <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
          </div>
          <p className='title'>Work Progress</p>
          <p className='totalnum'>80</p>
          <p className='desc'>Total Articles Recieved</p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Deadline Nearby</div>
              <div className="itemResult">
                <div className="resultAmount">10</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Work Pending</div>
              <div className="itemResult">
                <div className="resultAmount">20</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Upcoming Events</div>
              <div className="itemResult">
                <div className="resultAmount">7</div>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default CommitteeFeatured