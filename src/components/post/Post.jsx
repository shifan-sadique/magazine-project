import "./post.css"

export default function post() {
  return (
    <div className="post-container">
    <div className="post">
        <img className="postImg" src="https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCats">Music</span>
                <span className="postCats">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor, sit amet</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        <p className="postDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur accusantium, ullam veniam vitae quo voluptates error numquam illo minus pariatur debitis dolorem at, ex fugit soluta dolore? Nulla, voluptatibus voluptate.</p>
        </div>
    </div>
    </div>
  )
}
