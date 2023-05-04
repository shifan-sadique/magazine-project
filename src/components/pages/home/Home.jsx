import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import Sidebar from "../../sidebar/Sidebar"
import "./home.css"
import TopBar from '../../topbar/topbar'


export default function Home() {
  return (
    <>
    <TopBar/>
    <Header/>
    <div className="home">
        <Posts/>
        <Sidebar/>
    </div>
    </>
  )
}
