import './settings.css'
import Sidebar from '../../sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">
                    Update Your Account
                </span>
                <span className="settingsDeleteTitle">
                    Delete Account
                </span>
            </div>
                <form  className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                        <label htmlFor="fileInput">
                        <i class="fa-regular fa-circle-user settingsPPIcon"></i>
                        </label>
                        <input type="file" id='fileInput' style={{display:'none'}} />
                        </div>
                        <label >Username</label>
                        <input type="text" placeholder='Shifan' name="" id="" />
                        <label >Email</label>
                        <input type="email" placeholder='shifan@gmail.com' name="" id="" />
                        <label >Password</label>
                        <input type="password"  name="" id="" />
                        <button className="settingsSubmit">Update</button>
                </form>
            
        </div>
            <Sidebar/>
        
    </div>
    
  )
}
