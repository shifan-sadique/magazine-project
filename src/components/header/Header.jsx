import "./header.css"

function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitileSm">
                React & Node
            </span>
            <span className="headerTitleLg">
                Blog
            </span>
            <img className="headerImg" src="https://www.thespruce.com/thmb/fsCFUHbEgUN14TTjR7sq6O6a3nE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/styling-tips-for-open-shelving-1975823-hero-8a1877f054d24b3ea9333d35164bde86.jpg" alt="" />
        </div>
    </div>
  )
}

export default Header