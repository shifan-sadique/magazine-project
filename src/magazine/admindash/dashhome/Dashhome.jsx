import "./dashhome.scss"
import Featured from "../dashcomponent/featured/Featured"
import Chart from "../dashcomponent/chart/Chart"
import Widget from "../dashcomponent/widget/Widget"
import Nav from "../dashcomponent/Nav/Nav"
import Table from "../dashcomponent/table/Table"
import Dashsidebar from "../dashcomponent/dashSidebar/Dashsidebar"
import ArticleTable from "../dashcomponent/article/articleTable/ArticleTable"
const Dashhome = () => {
  return (
    <div className="home">
      <Dashsidebar/>
      <div className="homeContainer">
      <Nav/>
        <div className="widgets">
          <Widget type="articles"/>
          <Widget type="stats"/>
          <Widget type="advertisement"/>
          <Widget type="committee"/>
        </div>
        <div className="charts">
          <Featured/>
          {/* <Chart/> */}
        </div>
        <div className="listContainer">
          <div className="listTitle">Pending Articles</div>
          <ArticleTable/>
        </div>
      </div>
    </div>
  )
}

export default Dashhome