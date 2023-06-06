import React from 'react'
import './magazineDisplay.css'
import TopBar from '../../topbar/topbar'
import MagazineCards from '../magazineDisplayCard/MagazineDisplayCard.jsx'


const MagazineDisplay = () => {
  return (
    <div className='magazineDisplay'>
        <div className="magazineDisplayContainer">
            <TopBar/>
            <div className="magazineCardList">
              <MagazineCards/>
            </div>
        </div>
    </div>
  )
}

export default MagazineDisplay