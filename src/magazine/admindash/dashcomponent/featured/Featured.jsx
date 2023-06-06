import './featured.scss'
import '../../dashhome/dashhome.scss'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar"; 
import 'react-circular-progressbar/dist/styles.css'



const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
          <h1 className='title'>Workflow</h1>
          <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
          <div className="featuredchart">
              <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
          </div>
          <p className='title'>Work Progress</p>
          <p className='totalnum'>13</p>
          <p className='desc'>Total Articles Recieved</p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Deadline Nearby</div>
              <div className="itemResult">
                <div className="resultAmount">3</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Work Pending</div>
              <div className="itemResult">
                <div className="resultAmount">9</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Upcoming Events</div>
              <div className="itemResult">
                <div className="resultAmount">1</div>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Featured