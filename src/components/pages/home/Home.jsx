import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import "./home.css"
import TopBar from '../../topbar/topbar'


export default function Home() {
  return (
    <>
    <TopBar/>
    <div className="home">
      <Header/>
      Home
    </div>
    </>
  )
}
