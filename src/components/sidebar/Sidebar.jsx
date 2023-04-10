import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT ME <br /></span>
                <img className="aboutimg" src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores minus officiis deleniti quod ea doloribus dolor rem neque ipsa nobis eveniet vel, laborum repudiandae facilis sint cum recusandae sed molestias.</p>
            
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">
                CATEGORIES <br /></span>
        <ul className="sidebarList">
            <li className="sidebarListItem">life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Tech</li>
        </ul>
        </div>
        <div className="sidebarItem"></div>
        <span className="sidebarTitle">FOLLOW US <br /></span>
        <div className="sidebarSocial">
            <i className="sidebarIcon">FB</i> <br />
            <i className="sidebarIcon">Inst</i> <br />
            <i className="sidebarIcon">Tweet</i> <br />
        </div>
    </div>
  )
}
